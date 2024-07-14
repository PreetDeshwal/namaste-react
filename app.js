const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey I Am H1 Tag"),
    React.createElement("h2", {}, "Hey I Am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hey I Am H1 Tag"),
    React.createElement("h2", {}, "Hey I Am H2 Tag"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hey I am H1 Tag"),
//     React.createElement("h2", {}, "Hey I am H2 Tag"),
//   ])
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
