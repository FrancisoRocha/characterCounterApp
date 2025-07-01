import "./title.css";

export const Title = () => {

  const title = document.createElement("P");
  title.classList.add("title", "dark");
  title.textContent = "Analyze your text in real-time.";

  return title;
}
