"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Greeting_1 = __importDefault(require("./Greeting"));
function App() {
    const onClick = ({ 월, 일 }) => `오늘은 ${월}월 ${일}일`;
    return (<div>
      <Greeting_1.default name='Seung Chan' goal='하루하루 나를 아껴주는 것' onClick={onClick}/>
    </div>);
}
exports.default = App;
