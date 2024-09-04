export function Task(item) {
  const task = document.createElement("div");
  const task_header = document.createElement("div");
  const task_title = document.createElement("h2");
  const additional_icon = document.createElement("button");
  const card = document.createElement("div");

  task.draggable = true;
  task.setAttribute("data-id", item.id);
  task.classList.add("task");
  task_header.classList.add("task_header");
  task_title.classList.add("task_title");
  additional_icon.classList.add("additional_icon");
  card.classList.add("card");

  task_title.innerHTML = item.title;
  card.innerHTML = item.description;

  task.append(task_header, card);
  task_header.append(task_title, additional_icon);

  task.ondragstart = () => {
    setTimeout(() => {
      task.classList.add("hide");
    }, 0);
    task.id = "active";
  };
  task.ondragend = () => {
    task.classList.remove("hide");
  };

  return task;
}
