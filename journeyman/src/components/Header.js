import React, { Component } from 'react'
import '../styles/style.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
