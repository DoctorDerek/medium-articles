import React from "react"
const EmojifyComponent = (props) => {
  const { name, emoji } = props
  return (
    <h1>
      {emoji} {name} {emoji}
    </h1>
  )
}
export default EmojifyComponent
