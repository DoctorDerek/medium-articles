import React, { Component } from "react"

export default class EmojifyComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, emoji } = this.props
    return (
      <h1>
        {emoji} {name} {emoji}
      </h1>
    )
  }
}
