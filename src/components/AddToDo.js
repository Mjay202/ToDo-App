import React from 'react'
import { useState } from 'react';

const AddToDo = ({addToDo}) => {


  // const [newToDo, setnewToDo] = useState([]);
  const [date, setdate] = useState("")
  const [time, settime] = useState("")
  const [toDo, settoDo] = useState("")
  // setnewToDo([toDo, time, date])


  return (
    
    <>
       
              {/* <form action="" method='Post'> */}
            <div className="container shadow col-lg-4">
                <h1 className='text-center my-3 mb-4'>Add To Do</h1>
                <div className='mx-auto container-fluid p-3'>
                  <input name='toDo' type="text" placeholder='To Do' onChange={(e)=>settoDo(e.target.value)} className='form-outline form-control mb-3'/>
                  <input name='Time' type="time" placeholder='Time' onChange={(e)=>settime(e.target.value)} className='form-outline form-control mb-3'/>
                  <input type="date" className='form-outline form-control mb-3' name="date" id="" onChange={(e)=>setdate(e.target.value)}/>
                  <button type='' onClick={()=> addToDo({toDo, time, date})} className='btn btn-success btn-block'>Add</button>
                </div>
            </div>
                {/* </form> */}
    </>
  )
}

export default AddToDo