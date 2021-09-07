import "./style.css";
import { Menu } from "./Menu";

const menu = new Menu();
menu.add("button.addLine", () => {
  console.log("about to add a line");
});
menu.add("button.addCircle", () => {
  console.log("about to add a circle");
});
menu.add("button.eraseObject", () => {
  console.log("about to erase the selected object");
});
