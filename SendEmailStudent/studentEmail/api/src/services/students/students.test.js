import {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
} from './students'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('students', () => {
  scenario('returns all students', async (scenario) => {
    const result = await students()

    expect(result.length).toEqual(Object.keys(scenario.student).length)
  })

  scenario('returns a single student', async (scenario) => {
    const result = await student({ id: scenario.student.one.id })

    expect(result).toEqual(scenario.student.one)
  })

  scenario('creates a student', async () => {
    const result = await createStudent({
      input: { email: 'String341484', name: 'String', course: 'String' },
    })

    expect(result.email).toEqual('String341484')
    expect(result.name).toEqual('String')
    expect(result.course).toEqual('String')
  })

  scenario('updates a student', async (scenario) => {
    const original = await student({ id: scenario.student.one.id })
    const result = await updateStudent({
      id: original.id,
      input: { email: 'String85533712' },
    })

    expect(result.email).toEqual('String85533712')
  })

  scenario('deletes a student', async (scenario) => {
    const original = await deleteStudent({
      id: scenario.student.one.id,
    })
    const result = await student({ id: original.id })

    expect(result).toEqual(null)
  })
})
