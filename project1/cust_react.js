function customeRendor(reactElement, container) {
  // const domeElement = document.createElement(reactElement.type)
  // domeElement.innerHTML = reactElement.children
  // domeElement.setAttribute('href' , reactElement.props.herf)
  // domeElement.setAttribute('target' , reactElement.props.target)

  // container.appendChild(domeElement)

  const domeElement = document.createElement(reactElement.type);
  domeElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") {
      continue;
    }
    domeElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domeElement);
}

const reactElement = {      // tags are converted to like this
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: 'click me to open google || created fake react.jsx and then pushed the new html tag in our index.html file using append.child '
};

const mainContainer = document.querySelector("#root");

customeRendor(reactElement, mainContainer);