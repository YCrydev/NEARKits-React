if (
  localStorage.getItem("nearKitsDark") === "true" ||
  (!("nearKitsDark" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
