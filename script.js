function showLinks(type) {
  document.getElementById("studentLinks").style.display = type === "student" ? "block" : "none";
  document.getElementById("workingLinks").style.display = type === "working" ? "block" : "none";
}
