import React from "react"

import "GrandChild" from "./GrandChild"

const ChildComponent = (props) => 
  <section>
    <h1>Hello {props.name}</h1>
    <GrandChild {...props}></GrandChild>
  </section>

export default ChildComponent
