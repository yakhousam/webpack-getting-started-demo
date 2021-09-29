import printMe from "./print.js";

function getComponent() {
  return import("lodash")
    .then(({ defult: _ }) => {
      const element = document.createElement("div");
      const btn = document.createElement("button");

      element.innerHTML = _.join(["hello", "webpack"], " ");

      btn.innerHTML = "Click me and check the console";
      btn.onclick = printMe;

      element.appendChild(btn);

      return element;
    })
    .catch(() => "An error occured while loading the component");
}

getComponent().then((component) => {
  document.body.appendChild(component());
});
