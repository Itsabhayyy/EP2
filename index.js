import React from "react"
import ReactDOM from "react-dom/client";
let parent= React.createElement("div",{id:"divout"},
    React.createElement("h1",{id:"heading"},"Hey welcome to ")
)
let root= ReactDOM.createRoot(document.querySelector("#outerdiv"))
root.render(parent)