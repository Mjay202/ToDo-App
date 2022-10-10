import React from 'react'
import { useState } from 'react'

const DisplayToDo = ({allToDo, setallToDo}) => {
const newall =[...allToDo]
const [superToDo, setsuperToDo] = useState({allToDo})
const deleteToDo = (index) => {
  if (index !== -1) {
    newall.splice(index, 1)
    setallToDo(newall)
  }
  console.log(index)
  
}

  return (
    
    <>
          
              <div className="container shadow col-lg-6 my-2 mt-6">
                <h1 className='text-center mt-2'>My To Do List</h1>
                <div className="">
                  <table className='table table-striped table-hover'>
                    <thead>
                      <tr>
                        <td>To Do List</td>
                        <td>Time</td>
                        <td>Date</td>
                        <td>Edit</td>
                        <td>Delete</td>
                      </tr>
                    </thead>
                    <tbody>
                      {allToDo.map((toDo, index)=>(
                        <tr  key={index}>
                      
                        <td>{toDo.todo}</td>
                        <td>{toDo.time}</td>
                        <td>{toDo.date}</td>
                        <td> <button  className='btn btn-warning'>Edit</button></td>
                        <td> <button onClick={()=>deleteToDo(index)} className='btn btn-danger'>Delete</button></td>
                      
                        </tr>
                      ))}
                    </tbody>
                  </table>
                

                </div>
</div>
    
    </>
  )
}

export default DisplayToDo