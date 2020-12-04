import React, { Component } from "react"
export default class EmojifyComponent extends Component {
  constructor(props) {
    super(props)
  }
  render({ name, emoji }) {
    return (
      <h1>
        {emoji} {name} {emoji}
      </h1>
    )
  }
}
