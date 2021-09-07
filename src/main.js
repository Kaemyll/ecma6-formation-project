import "./style.css";

import { Menu } from "./Menu";
import { DrawingBoard, STATE } from "./DrawingBoard";
import { Line } from "./widgets/line";
import { Circle } from "./widgets/circle";

const board = new DrawingBoard();
const menu = new Menu();

menu.add("button.addLine", () => {
  console.log("about to add a line");
  board.StartInsertion(new Line());
});
menu.add("button.addCircle", () => {
  console.log("about to add a circle");
  board.StartInsertion(new Circle());
});
menu.add("button.eraseObject", () => {
  console.log("about to erase the selected object");
  board.state = STATE.DEFAULT;
});
