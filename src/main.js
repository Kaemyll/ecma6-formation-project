import "./style.css";
import { Menu } from "./Menu";
import { DrawingBoard, STATE } from "./DrawingBoard";

const board = new DrawingBoard();
const menu = new Menu();

menu.add("button.addLine", () => {
  console.log("about to add a line");
  board.state = STATE.INSERTION;
});
menu.add("button.addCircle", () => {
  console.log("about to add a circle");
  board.state = STATE.SELECTION;
});
menu.add("button.eraseObject", () => {
  console.log("about to erase the selected object");
  board.state = STATE.DEFAULT;
});
