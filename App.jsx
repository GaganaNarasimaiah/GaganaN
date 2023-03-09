import React from 'react'
import Nav from './component/Nav'
// import './global.css'
import Navbars from './Navbars';
// import './navbars.css'
import Netflix from './Netflix';
// import './netflix.css'
import Propsfun from './Propsfun';
import photo from './picture.jpg';
import JSON from './moviesdata.json';
import Details from './Details';
import './details.css'


const App =()=> {
    return (
        <>
        {/* <Nav/>
       <Navbars/>
      <Netflix/>  */}
     {/* <Propsfun data="priya"/>
       <Propsfun data1="priya"/>
       <Propsfun data2={photo}/>
       <Propsfun data={"https://nationaltoday.com/wp-content/uploads/2021/08/Teddy-Bear-Day.jpg"}/>  */}
       {/* <Propsfun data5={{
        name:"gagana", password:"1234"
       }}/> */}
       <Details payload={JSON} />
       </>
    )
}
export default App;