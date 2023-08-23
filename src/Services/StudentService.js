import axios from 'axios'

const STUDENT_BASE_REST_API_URL = "http://localhost:8082/api/v1/students"

class StudentService {
    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL, student)
    }

    getStudentById(studentId){
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + studentId)
    }

    updateStudent(id, student){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' + id, student)
    }

    deleteStudentById(id){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + id)
    }
}

export default new StudentService()