import time
import asyncio
import boto3
from botocore.exceptions import ClientError

from app.config import settings


def _get_client():
    return boto3.client(
        "dynamodb",
        endpoint_url=settings.DYNAMODB_ENDPOINT,
        region_name="us-east-1",
        aws_access_key_id="local",
        aws_secret_access_key="local",
    )


def create_table_if_not_exists():
    client = _get_client()
    table_name = settings.DYNAMODB_TABLE

    try:
        client.describe_table(TableName=table_name)
        return
    except ClientError as e:
        if e.response["Error"]["Code"] != "ResourceNotFoundException":
            raise

    client.create_table(
        TableName=table_name,
        KeySchema=[{"AttributeName": "session_id", "KeyType": "HASH"}],
        AttributeDefinitions=[{"AttributeName": "session_id", "AttributeType": "S"}],
        BillingMode="PAY_PER_REQUEST",
    )

    client.update_time_to_live(
        TableName=table_name,
        TimeToLiveSpecification={"Enabled": True, "AttributeName": "ttl"},
    )


async def get_session(session_id: str) -> dict | None:
    client = _get_client()
    response = client.get_item(
        TableName=settings.DYNAMODB_TABLE,
        Key={"session_id": {"S": session_id}},
    )
    item = response.get("Item")
    if not item:
        return None

    ttl = int(item["ttl"]["N"])
    if time.time() > ttl:
        return None

    messages = []
    for msg in item.get("messages", {}).get("L", []):
        m = msg["M"]
        messages.append({
            "role": m["role"]["S"],
            "content": m["content"]["S"],
        })

    return {
        "session_id": item["session_id"]["S"],
        "messages": messages,
        "query_count": int(item["query_count"]["N"]),
        "created_at": int(item["created_at"]["N"]),
        "ttl": ttl,
    }


async def put_session(session: dict):
    client = _get_client()
    messages_list = []
    for msg in session["messages"]:
        messages_list.append({
            "M": {
                "role": {"S": msg["role"]},
                "content": {"S": msg["content"]},
            }
        })

    client.put_item(
        TableName=settings.DYNAMODB_TABLE,
        Item={
            "session_id": {"S": session["session_id"]},
            "messages": {"L": messages_list},
            "query_count": {"N": str(session["query_count"])},
            "created_at": {"N": str(session["created_at"])},
            "ttl": {"N": str(session["ttl"])},
        },
    )
