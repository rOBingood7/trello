export function Column(item) {
  const column = document.createElement("div");

  column.classList.add("column");

  column.ondragenter = (e) => {};

  column.ondragover = (e) => {
    e.preventDefault();
  };
  column.ondragleave = (e) => {};

  column.ondrop = (e) => {
    const selected = document.getElementById("active");

    column.append(selected);
    selected.removeAttribute("id");
  };
  return column;
}
