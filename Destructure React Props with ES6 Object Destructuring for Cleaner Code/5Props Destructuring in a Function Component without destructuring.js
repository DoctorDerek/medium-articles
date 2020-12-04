import React from "react"
const EmojifyComponent = (props) => {
  return (
    <h1>
      {props.emoji} {props.name} {props.emoji}
    </h1>
  )
}
export default EmojifyComponent
