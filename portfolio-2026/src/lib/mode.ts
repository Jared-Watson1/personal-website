export type Mode = "light" | "dark" | "md";

export const MODE_KEY = "jw-mode";

export function applyMode(mode: Mode) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode !== "light");
  if (mode === "md") root.setAttribute("data-mode", "md");
  else root.removeAttribute("data-mode");
}

export function readMode(): Mode {
  const root = document.documentElement;
  if (root.getAttribute("data-mode") === "md") return "md";
  return root.classList.contains("dark") ? "dark" : "light";
}

/**
 * Runs in <head> before paint so the saved mode never flashes. With nothing
 * saved it follows prefers-color-scheme, including live changes.
 */
export const MODE_SCRIPT = `(function(){try{
var k="${MODE_KEY}",r=document.documentElement,q=matchMedia("(prefers-color-scheme: dark)");
function a(m){r.classList.toggle("dark",m!=="light");if(m==="md")r.setAttribute("data-mode","md");else r.removeAttribute("data-mode");}
function s(){var m=localStorage.getItem(k);return m==="light"||m==="dark"||m==="md"?m:null;}
a(s()||(q.matches?"dark":"light"));
q.addEventListener("change",function(e){if(!s())a(e.matches?"dark":"light");});
}catch(e){}})();`;
