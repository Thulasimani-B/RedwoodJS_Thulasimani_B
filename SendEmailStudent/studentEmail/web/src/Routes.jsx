// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Students" titleTo="students" buttonLabel="New Student" buttonTo="newStudent">
        <Route path="/students/new" page={StudentNewStudentPage} name="newStudent" />
        <Route path="/students/{id}/edit" page={StudentEditStudentPage} name="editStudent" />
        <Route path="/students/{id}" page={StudentStudentPage} name="student" />
        <Route path="/students" page={StudentStudentsPage} name="students" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
