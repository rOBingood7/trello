import { Column } from "./components/Column";
import { Task } from "./components/Task";
import { getData, postData } from "./lib/http.request";
import { reload } from "./lib/utils";

const dialog = document.querySelector("dialog");
const form = dialog.querySelector("form");
const select = form.querySelector("select");
const close_dialog_btn = dialog.querySelector(".close");
const open_dialog_btn = document.querySelector(".header_create_btn");

open_dialog_btn.onclick = () => {
  dialog.showModal();
};
close_dialog_btn.onclick = () => {
  dialog.close();
};

form.onsubmit = async (e) => {
  e.preventDefault();

  const task = {
    id: crypto.randomUUID(),
  };

  new FormData(e.target).forEach((val, key) => (task[key] = val));

  await postData("/tasks", task);

  const tasks = await getData("/tasks");
  reload(tasks, Task, cols);

  form.reset();
  dialog.close();
};

const columns = await getData("/columns");
const board_columns = document.querySelector(".board_columns");

for (let item of columns) {
  select.append(new Option(item.title, item.status));
}

reload(columns, Column, [board_columns], true);

const tasks = await getData("/tasks");
const cols = document.querySelectorAll(".tasks");
reload(tasks, Task, cols);
