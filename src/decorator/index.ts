import BoxDecorator from "./BoxDecorator";
import LineNumberDecorator from "./LineNumberDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./Strings";

const strs = new Strings();

strs.add("Hello");
strs.add("My name is Kim Hyoung-Jun");
strs.add("I am a GIS Developer.");
strs.add("Design-Pattern is powerful tool.");

const domPre = document.querySelector("pre");
// strs.print(domPre as HTMLElement);

const d1 = new SideDecorator(strs, "*");
// d1.print(domPre as HTMLElement);

const d2 = new LineNumberDecorator(strs);
// d2.print(domPre as HTMLElement);

const d3 = new BoxDecorator(d2); // d2를 인자로 넣었으므로, LineNumber를 넣고, Box를 덧씌운다.
d3.print(domPre as HTMLElement);
