# Projects

## Cure AI (2024) — AI / Research
AI-driven platform streamlining scientific research with evidence-based insights from 26M+ peer-reviewed articles.

Cure AI transforms complex scientific queries into simple natural language questions, providing evidence-based answers sourced from over 26 million peer-reviewed articles. The platform leverages patented retrieval technology to ensure reliable, accurate AI responses for critical research use cases. Researchers can specify journals, date ranges, and other advanced parameters to refine searches with precision. Every response includes inline citations linking directly to source material, backed by rigorous literature verification. The interface supports seamless navigation between studies, enabling fast exploration of related research and citation export. Cure AI earned Product of the Day on Product Hunt.

**Tech stack:** React, Tailwind CSS, Python, FastAPI, Stripe, Pinecone, OpenAI API, Vercel, Neon
**Website:** https://www.askcureai.com
**Product Hunt:** https://www.producthunt.com/posts/cure-ai-2

## U.S. Wildfire Analysis (2024) — Data Science
Analyzed 1.88M+ U.S. wildfire records to identify spatial clusters, seasonal peaks, and predict containment times.

The project analyzed 1.88 million U.S. wildfire records spanning 1992 to 2015 using the FPA-FOD dataset. Spatial analysis revealed significant clustering of large, intense wildfires across the western United States and Alaska. Temporal pattern analysis identified seasonal peaks during summer months and explored containment time distributions. Multiple regression models were trained to predict wildfire containment times, with Gradient Boosted Trees achieving the strongest performance (R² = 0.4516). The data pipeline included cleaning, normalization, and feature encoding using pandas and NumPy, with all models evaluated on RMSE, MAE, and R² metrics.

**Tech stack:** Python, scikit-learn, pandas, NumPy, Matplotlib
**GitHub:** https://github.com/Jared-Watson1/CS470

## Loan Default Prediction (2024) — Machine Learning
Assessing fairness in loan approvals using ML models trained on the Lending Club dataset with 890K+ applications.

The project investigated fairness in automated loan approval systems by training multiple machine learning models on the Lending Club dataset, which contains over 890,000 applications and 200+ attributes. KNN, Decision Tree, and Logistic Regression models were evaluated for both predictive accuracy and equitable outcomes across demographic groups. A key finding was that removing bias features from the training data had minimal impact on overall model accuracy, suggesting fairer lending decisions can be achieved without sacrificing performance. The project explored the tension between algorithmic optimization and social equity in financial decision making.

**Tech stack:** Python, scikit-learn, pandas
**GitHub:** https://github.com/Jared-Watson1/loan-default-prediction

## DooleyAFavor (2023) — Full Stack
Peer-to-peer platform connecting Emory students to complete tasks and earn money.

DooleyAFavor is a peer-to-peer task marketplace built for Emory University students. Students can post tasks for others to complete and earn compensation. The project involved system architecture design, sprint planning, and development team coordination with weekly progress updates. The backend uses Python and Flask with RESTful APIs for task and user management. PostgreSQL handles secure data storage through ElephantSQL, and the application is deployed on Heroku with a Node.js frontend.

**Tech stack:** Node.js, Python, Flask, PostgreSQL, Heroku
**GitHub:** https://github.com/Jared-Watson1/DooleyAFavor

## Dodge (2022) — Game Dev
2D game featuring custom AI enemy behavior, physics-based collision detection, and particle systems.

Dodge is a solo developed 2D game demonstrating object-oriented programming principles and realtime AI techniques. The game features modular class architecture for enemies, players, power-ups, and GUI elements. A custom AI system dynamically calculates enemy velocities to intercept the player, creating adaptive difficulty. The physics engine handles collision detection between 2D objects and projectiles, while a custom particle system generates visual effects on impact.

**Tech stack:** Python, Pygame
**GitHub:** https://github.com/Jared-Watson1/Dodge
