import React from 'react'

const Studetails = (props) => {
    let details=props.data
  return (
    <>
    <div>
        <table border="2px"  style={{textAlign:"center",fontWeight:'bolder'}}>
            <tr>
                <th>stu_Name</th>
                <th>stu_ID</th>
                <th>stu_Adress</th>
                <th>Course</th>
                <th>stu_photo</th>
                <th>Contact</th>
            </tr>
            {
                details.map((x)=>{
                             return <tr>
                                <th>{x.stuName}</th>
                                <th>{x.stuId}</th>
                                <th>{x.stuAdress}</th>
                                <th>{x.course}</th>
                                <th><img src={x.stuPhoto} alt="" style={{height:"70px",width:"70px"}} /></th>
                                <th><ol>{x.contact.map((x)=>{
                                    return <li>{x}</li> })}</ol></th>
                             </tr>
                })
            }
        </table>
    </div>
    </>
  )
}

export default Studetails