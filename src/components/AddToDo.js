import React from 'react'
import { useState, useEffect} from 'react';

const AddToDo = ({addToDo, check, setcheck, allToDo, setallToDo}) => {


  // const [newToDo, setnewToDo] = useState([]);
  const [date, setdate] = useState("")
  const [time, settime] = useState("")
  const [toDo, settoDo] = useState("")
  // setnewToDo([toDo, time, date])

  const checkme=()=>{
    alert(check)
  }
 
  const editToDo = (check) => {
    if (check !== -2) {
      const newall = [...allToDo]
      newall.splice(check, 1 , {toDo, time, date})
      setallToDo(newall)
      // setcheck(1)
    }
    console.log(check)
  }
  useEffect(() => {
      
    
    return () => {
      setcheck(-1)
    }
  }, [allToDo])

  return (
    
    <>
       
              
            <div className="container shadow col-lg-4">
                <h1 className='text-center my-3 mb-4'>Add To Do</h1>
                <button className="btn btn-mg" onClick={()=>checkme()}>check</button>
                { (check === -1) ? 
                <div className='mx-auto container-fluid p-3'>
                <input placeholder='To Do' name='toDo' type="text" onChange={(e)=>settoDo(e.target.value)} className='form-outline form-control mb-3'/>
                <input name='Time' type="time" placeholder='Time' onChange={(e)=>settime(e.target.value)} className='form-outline form-control mb-3'/>
                <input type="date" className='form-outline form-control mb-3' name="date" id="" onChange={(e)=>setdate(e.target.value)}/>
                <button type='' onClick={()=> addToDo({toDo, time, date})} className='btn btn-success btn-block'>Add</button>
                </div>
              :
              <div className='mx-auto container-fluid p-3'>
              <input name='toDo' type="text" value={allToDo[check].toDo} onChange={(e)=>settoDo(e.target.value)} className='form-outline form-control mb-3'/>
              <input name='Time' type="time"  onChange={(e)=>settime(e.target.value)} className='form-outline form-control mb-3'/>
              <input type="date"  className='form-outline form-control mb-3' name="date" id="" onChange={(e)=>setdate(e.target.value)}/>
              <button type='' onClick={()=>editToDo({toDo, time, date})} className='btn btn-success btn-block'>Add</button>
              </div>
              }
             
                
            </div>
                
    </>
  )
}

export default AddToDo