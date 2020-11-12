"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Greeting({ name, hobby, goal, onClick }) {
    const [today, setToday] = react_1.useState('');
    const [showDate, setShowDate] = react_1.useState(false);
    console.log('name:', name, 'hobby:', hobby, 'goal:', goal);
    const handleClick = () => {
        setShowDate(!showDate);
        setToday(onClick({ 월: new Date().getMonth() + 1, 일: new Date().getDate() }));
    };
    return (<div style={{ padding: '100px' }}>
            <p>Hello, 나는 {name}</p>
            <p>좋아한다 {hobby}</p>
            {goal && <p>{goal}이 나의 목표</p>}
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleClick}>눌러눌러!</button>
            </div>
            {showDate && <p>{today}</p>}
        </div>);
}
Greeting.defaultProps = {
    hobby: '누워서 멍때리기'
};
exports.default = Greeting;
