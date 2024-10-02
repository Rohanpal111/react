const r='rohan';
const heading =React.createElement("h1",{id:"heading"},"hello world from react!");//object
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //render method render and create the element inside the root element

const heading1 =React.createElement("h2",{id:"heading1"},"hello world from react1!");//object


const parent=React.createElement("div",{id:"parent"},React.createElement("div",{},[heading,heading1]));
console.log(parent);
root.render(parent);