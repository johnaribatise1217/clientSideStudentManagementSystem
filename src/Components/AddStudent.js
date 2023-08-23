import React, { useEffect, useState } from 'react'
import StudentService from '../Services/StudentService'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { Link, useParams } from 'react-router-dom'

const AddStudent = () => {
  const [firstName, setFname] = useState('')
  const [lastName , setLname] = useState('')
  const [email, setEmail] = useState('')
  const [matricNo, setMatricNo] = useState('')

  const history = useHistory()
  const {id} = useParams()

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();
    const student = {firstName, lastName, email, matricNo}
        history.push("/students")
    if(id){
        StudentService.updateStudent(id, student).then((res) => {
            console.log("Student has been updated")
        }).catch(error => {
            console.log(error)
        })
    } else {
        StudentService.createStudent(student).then((res) => {
            console.log(res.data)
            history.push('/students')
        }).catch(error => {
            console.log(error)
        })
    }
  }

  useEffect(() => {
    StudentService.getStudentById(id).then((res) => {
        setFname(res.data.firstName)
        setLname(res.data.lastName)
        setEmail(res.data.email)
        setMatricNo(res.data.matricNo);
    }).catch(error => {
        console.log(error)
    })
  }, [])

  const title = () => {
    if (id){
        return <h2 className="text-center">Update Student</h2>
    } else {
        return <h2 className="text-center">Add Student</h2>
    }
  }

  return (
    <div>
      <div style={{marginTop : "0.5rem"}} className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
            {
                title()
            }
            <div className="card-body">
                <form action="">
                    <div className="form-group mb-2">
                        <label className="form-label">
                            First Name:
                        </label>
                        <input type="text" name="firstName" placeholder='Enter first name'
                        className='form-control'
                        value={firstName}
                        onChange={(e) => setFname(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">
                            Last Name:
                        </label>
                        <input type="text" name="lastName" placeholder='Enter last name'
                        className='form-control'
                        value={lastName}
                        onChange={(e) => setLname(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">
                            Matric Number:
                        </label>
                        <input type="text" name="matricNo" placeholder='Enter Matric No'
                        className='form-control'
                        value={matricNo}
                        onChange={(e) => setMatricNo(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label">
                            Email:
                        </label>
                        <input type="email" name="email" placeholder='Enter Email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success' onClick={(e) => saveOrUpdateStudent(e)}>Save</button>
                    <Link to="/students" className="btn btn-danger mx-2">Cancel</Link>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
