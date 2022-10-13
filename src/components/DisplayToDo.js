import React from 'react'
// import { useState, useRef } from 'react'

const DisplayToDo = ({allToDo, setallToDo, checked}) => {
    const newall =[...allToDo]
    const deleteToDo = (index) => {
      if (index !== -1) {
        newall.splice(index, 1)
        setallToDo(newall)
      }
      console.log(index)
    }
    // const todo = useRef(todo)
    // const time = useRef(time)
    // const date = useRef(date)
    
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
                        <td> <button data-toggle="modal"  onClick={()=>checked(index)} className='btn btn-warning'>Edit</button></td>
                              {/* Modal  */}
                              {/* data-target="#editModal" */}
                          {/* <div class="modal fade" id="editModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <div class="form-group">   
                                      <input type="text" class="form-control" ref={todo} placeholder='To Do'/>
                                    </div>
                                    <div class="form-group">
                                    <input type="text" class="form-control" ref={time} placeholder='Time'/>
                                    </div>
                                    <div class="form-group">
                                    <input type="text" class="form-control" ref={date} placeholder='Date'/>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-rusticate" data-dismiss="modal">Cancel</button>
                                    <button type="button"  class="btn btn-success">Update</button>
                                  </div>
                                </div>
                              </div>
                          </div> */}
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