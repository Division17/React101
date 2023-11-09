import React from "react";
import  ReactDOM  from "react-dom/client";

const Heading = <h1>Hi Using jsx</h1>
const Heading1 = () => {
    return(
        <h2>I am a child component h2</h2>
    )
}

const Heading2 =()=><h3>another component h3</h3>

const Container = ()=> (

    <div>
        {Heading}
        <Heading1/>
        <Heading2/>
      
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

   <>
  <Container/>
  {Heading}
  </>
)