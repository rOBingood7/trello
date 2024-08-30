import { Column } from "./components/Column";
import { Task } from "./components/Task";
import { getData } from "./lib/http.request";
import { reload } from "./lib/utils";

const tasks = [
  {
    id: 1,
    title: "Buy a car",
    description: "lorem ipsum",
    status: "0",
  },
  {
    id: 2,
    title: "Buy milk",
    description: "lorem ipsum dolor sir amet",
    status: "1",
  },
];

const columns = [
  {
    id: 1,
    status: 0,
    title: "Todo",
  },
  {
    id: 2,
    status: 1,
    title: "in Progress",
  },
  {
    id: 3,
    status: 2,
    title: "Done",
  },
];

const board_columns = document.querySelector(".board_columns");
reload(columns, Column, [board_columns], true);

const cols = document.querySelectorAll(".tasks");
reload(tasks, Task, cols);
