// import React from 'react'

// const Courses = (props) => {
//     console.log(props);
//     if(props.coursedata.courseAvail==true)
//     {
//         return(
//             <>
//             <h2>{props.coursedata.courseName}</h2>
//             <h2>{props.coursedata.courseDuration}</h2>
//             <button style={{backgroundColor:"green"}}>AVAILABLE</button>
//             </>
//         )
//     }
//     else{
//         return(
//             <>
//             <h2>{props.coursedata.courseName}</h2>
//             <h2>{props.coursedata.courseDuration}</h2>
//             <button style={{backgroundColor:"red"}}>NOT AVAILABLE</button>
//             </>
//         )
//     }
// }



import React, { Component } from 'react'
class Courses extends Component {
    // constructor(){
    // super()
    // this.state={username:"gagana",
    //             password:"123"}
    // }
    // state={username:"gagana",}
    state={subject:"REACT",
           skills:["html","css","js"]}
    render() {
    return (
      <>
      {/* <h1>{this.state.username}</h1>
      <h1>{this.state.password}</h1> */}
      <h1>{this.state.subject}</h1>
      <h1>{this.state.skills.map((x)=>{
        return <li>{x}</li>
      })}</h1>
      </>
    )
  }
}
 export default Courses;