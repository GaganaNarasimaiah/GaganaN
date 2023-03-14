import React, { Component } from 'react'
import JSON from './std.json'
import Studetails from './Studetails'

export default class App extends Component {
    constructor(){
        super()
        this.state={json:JSON}
    }
  render() {
    return (
      <Studetails data={this.state.json} />
    )
  }
}
