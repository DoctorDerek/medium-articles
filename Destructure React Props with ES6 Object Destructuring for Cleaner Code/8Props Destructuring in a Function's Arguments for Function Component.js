import React from "react"
const EmojifyComponent = ({ name, emoji }) => {
  return (
    <h1>
      {emoji} {name} {emoji}
    </h1>
  )
}
export default EmojifyComponent
