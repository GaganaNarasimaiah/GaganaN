// import React, { Component } from 'react'
// import JSON from './std.json'
// import Studetails from './Studetails'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={json:JSON}
//     }
//   render() {
//     return (
//       <Studetails data={this.state.json} />
//     )
//   }
// }

import React, { Component } from 'react'
import  './Counter.css'

export default class App extends Component {

  constructor(){
    super()
   this.state={count:0}
   }
handleIncremnt=()=>{
  this.setState({count:this.state.count+1})
}
handleDecremnt=()=>{
  this.setState({count:this.state.count-1})
}
handleReset=()=>{
  this.setState({count:0})
}
  render() {
    return (
      <div className='maindiv'>
        <h1><i>{this.state.count}</i></h1>
        <div className='buttondiv'>
        <button onClick={this.handleIncremnt}>INCREMENT</button>
        <button onClick={this.handleDecremnt}>DECREMENT</button>
        <button onClick={this.handleReset}>RESET</button>
        </div>
        </div>
    )
  }
}
