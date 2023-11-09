i;
const heading1 = React.createElement("h1", {
    key: "1"
}, "Hi, i am created using React");
const heading2 = React.createElement("h2", {
    key: "2"
}, "Hi, i am created using React");
const container = React.createElement("div", {
    id: "title"
}, [
    heading1,
    heading2
]);
ReactDOM.createRoot(document.getElementById("root")).render(container);

//# sourceMappingURL=index.c36f364e.js.map
