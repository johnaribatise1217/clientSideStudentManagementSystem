import React, { useEffect, useState } from 'react'
import StudentService from '../Services/StudentService'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const StudentList = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    getAllStudents()
  }, [])

  const getAllStudents = () => {
    StudentService.getAllStudents().then((response) => {
        setStudents(response.data)
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
  }

  const deleteStudentHandler = (id) => {
    StudentService.deleteStudentById(id).then((res) => {
        console.log(res.data)
        getAllStudents()
    }).catch(error => {
        console.log(error)
    })
  }

  return (
    <div className='container'>
      <h2 className='text-center'>List Of Students</h2>
      <Link to = "/add" className="btn btn-primary mb-2">Add Student</Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <th>Student ID</th>
            <th>Student First Name</th>
            <th>Student Last Name</th>
            <th>Student email</th>
            <th>Matric No</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {
                students.map(
                    student =>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.matricNo}</td>
                        <td>
                            <Link className="btn btn-info" to={`/edit-student/${student.id}`} >Update</Link>
                            <button className='btn btn-danger mx-2'
                            onClick={()=>deleteStudentHandler(student.id)}>Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
