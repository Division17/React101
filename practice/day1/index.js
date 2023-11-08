let divUsingJs = document.getElementById("js-container");

let h1tag = document.createElement("h1");

let h2tag = document.createElement("h2");

let h1Text = document.createTextNode("H1 Created using js ");

let h2Text = document.createTextNode("H2 Created using js ");

 h1tag.append(h1Text)
 h2tag.append(h2Text)
 divUsingJs.append(h1tag,h2tag)

const heading1 = React.createElement(
    "h1",{key:"1",},"Hi, i am created using React"
)

const heading2 = React.createElement(
    "h2",{ key:"2",},"Hi, i am created using React"
)

const container = React.createElement(
    "div",{
        id:"title",
    },[heading1, heading2]
)

ReactDOM.createRoot(document.getElementById("root")).render(container)