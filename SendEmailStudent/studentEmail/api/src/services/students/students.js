import { db } from 'src/lib/db'
import { sendEmail } from 'src/lib/email'

export const students = () => {
  return db.student.findMany()
}

export const student = ({ id }) => {
  return db.student.findUnique({
    where: { id },
  })
}

export const createStudent = ({ input }) => {
  return db.student.create({
    data: input,
  })
}

export const updateStudent = ({ id, input }) => {
  return db.student.update({
    data: input,
    where: { id },
  })
}

export const deleteStudent = ({ id }) => {
  return db.student.delete({
    where: { id },
  })
}

export const sendStudentEmail = async ({ id }) => {
  const student = await db.student.findUnique({
    where: { id },
  })

  await sendTestEmail(student.email)
  return student
}

function sendTestEmail(emailAddress) {
  const subject = 'Student Registration Successfull'
  const text = 'This is a confirmation mail for course Registration'
  const body =
    'This mail is sent autonomously. Please do not respond to this email'

  return sendEmail({ to: emailAddress, subject, text, body })
}
