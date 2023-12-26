import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated, signUp, logIn, logOut } = useAuth()
  return (
    <>
      <h1>HomePage</h1>
      {!isAuthenticated ? (
        <>
          <button onClick={signUp}>Sign Up</button>
          <button onClick={logIn}>Login</button>
        </>
      ) : (
        <>
          <button onClick={logOut}>Logout</button>
        </>
      )}
    </>
  )
}

export default HomePage
