import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: String!) {
    deleteStudent(id: $id) {
      id
    }
  }
`
const Student = ({ student }) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
      navigate(routes.students())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  // Send Email code

  const SEND_EMAIL_MUTATION = gql`
    mutation SendEmailMutation($id: String!) {
      sendStudentEmail(id: $id) {
        id
      }
    }
  `

  const [sendStudentEmail] = useMutation(SEND_EMAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Mail Sent!')
    },
    onError: (e) => {
      toast.error(e.message)
    },
  })

  const onSendEmailClick = (student) => {
    if (confirm(`Are you sure you want to send email to ${student.name}?`)) {
      sendStudentEmail({ variables: { id: student.id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Student {student.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{student.name}</td>
            </tr>
            <tr>
              <th>Course</th>
              <td>{student.course}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ id: student.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className="rw-button rw-button-green"
          onClick={() => onSendEmailClick(student)}
        >
          Send Email
        </button>
      </nav>
    </>
  )
}

export default Student
