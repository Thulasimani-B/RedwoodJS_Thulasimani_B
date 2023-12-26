import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp, logIn, logOut, currentUser } = useAuth()

  return (
    <>
      <h1>HomePage</h1>
      {!isAuthenticated ? (
        <>
          <button onClick={signUp}>sign up</button>
          <button onClick={logIn}>Login</button>
        </>
      ) : (
        <>
          {console.log(currentUser)}
          {/* <h2>Logged in as {currentUser.email}</h2> */}
          <button onClick={logOut}>logOut</button>
        </>
      )}
    </>
  )
}

export default HomePage
