export function Task(item) {
  const task = document.createElement("div");
  const task_header = document.createElement("div");
  const task_title = document.createElement("h2");
  const additional_icon = document.createElement("button");
  const card = document.createElement("div");
  const add_card_btn = document.createElement("button");

  task.draggable = true;
  task.classList.add("task");
  task_header.classList.add("task_header");
  task_title.classList.add("task_title");
  additional_icon.classList.add("additional_icon");
  card.classList.add("card");
  add_card_btn.classList.add("add_card_btn");

  task_title.innerHTML = item.title;
  add_card_btn.innerHTML = "+ Добавить карточку";
  card.innerHTML = item.description;

  task.append(task_header, card, add_card_btn);
  task_header.append(task_title, additional_icon);

  task.ondragstart = (e) => {
    setTimeout(() => {
      task.classList.add("hide");
    }, 0);
    task.id = "active";
  };
  task.ondragend = (e) => {
    task.classList.remove("hide");
  };

  return task;
}
