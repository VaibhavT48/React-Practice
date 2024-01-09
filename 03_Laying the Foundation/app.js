import React from "react";
import ReactDOM from "react-dom/client";

// React Element =>  ReactElement-Js Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React Application"
);
console.log(heading);

//JSX (transpiled before it reaches the JS ) -> PARCEL -> Babel

//JSX => Babel Transpiled it to React.cerateElement => ReactElement JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading"> React </h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

//React Component

//Functional Component - New
const HeadingComponent = () => {
  // way 1 -with return
  return <h1> React Functional Component</h1>;
};

const HeadingComponent2 = () => (
  // way 2 - without using return
  <h1 className="heading">React Functional Component using JSX</h1>
);

//React Element inside Element
const elem = <span> React Element</span>;

//Coponenet Composition - component inside component
const Title = () => (
  <h1 className="head" tabIndex={5}>
    {elem}
    React using JSX
  </h1>
);

const ComponentCoposition = () => (
  <div id="container">
    <Title />
    {Title()}
    <h1>React Functional Component</h1>
  </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<ComponentCoposition />);
