import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudentForm from 'src/components/Student/StudentForm'

export const QUERY = gql`
  query EditStudentById($id: String!) {
    student: student(id: $id) {
      id
      email
      name
      course
    }
  }
`
const UPDATE_STUDENT_MUTATION = gql`
  mutation UpdateStudentMutation($id: String!, $input: UpdateStudentInput!) {
    updateStudent(id: $id, input: $input) {
      id
      email
      name
      course
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ student }) => {
  const [updateStudent, { loading, error }] = useMutation(
    UPDATE_STUDENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Student updated')
        navigate(routes.students())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateStudent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Student {student?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudentForm
          student={student}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
