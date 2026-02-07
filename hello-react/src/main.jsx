import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from 'react';

function MyFun() {
  return <h1>Hello World</h1>;
}

const uname1 = "Tejani";
// this is not valid
// const reactElement = {      // tags are converted to like this
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: 'click me to open google || created fake react.jsx and then pushed the new html tag in our index.html file using append.child '
// };
const uname = "veer";

const ReactEle = React.createElement(
  // tags are converted to like this
  "a",
  {
    href: "https://www.google.com/",
    target: "_blank",
  },
  "click me to open google || created fake react.jsx and then pushed the new html tag in our index.html file using append.child ",
  uname
);

const React_obj = (<p> This is react element object {uname1}</p>);



createRoot(document.getElementById("root")).render(
  <>
    {ReactEle}
    <MyFun/>
    <App/>
    {React_obj}
    {MyFun()}
  </>
   
 
  // MyFun() is valid
  // reactElement this is not valid
);
