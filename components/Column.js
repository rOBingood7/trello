import { patchData } from "../lib/http.request";

export function Column(item) {
  const column = document.createElement("div");
  const tasks = document.createElement("div");
  const span = document.createElement("span");
  const add_card_btn = document.createElement("button");

  column.classList.add("column");
  span.innerHTML = item.title;
  tasks.classList.add("tasks");
  add_card_btn.classList.add("add_card_btn");
  add_card_btn.innerHTML = "+ Добавить карточку";

  column.append(span, tasks, add_card_btn);

  column.ondragenter = (e) => {};
  column.ondragover = (e) => e.preventDefault();
  column.ondragleave = (e) => {};
  column.ondrop = async (e) => {
    const selected = document.getElementById("active");
    tasks.append(selected);
    selected.removeAttribute("id");
    // PATCH писать здесь КОД
    await patchData("/tasks/" + selected.dataset.id, { status: item.status });
  };

  add_card_btn.onclick = () => {
    const dialog = document.querySelector("dialog");

    dialog.showModal();
  };

  return column;
}
