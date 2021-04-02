// 🐨 you'll need to import React and ReactDOM up here
import * as React from 'react'
import ReactDOM from 'react-dom'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    // const username = event.target.elements.username
    // const password = event.target.elements.password
    // onSubmit({
      //   username: username.value,
      //   password: password.value
      // })
      
      const {usernames, password} = event.target.elements
      console.log(password, usernames)

    onSubmit({
      username: usernames.value,
      password: password.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" />
      <label htmlFor="password">password</label>
      <input id="password" />
      <button>{buttonText}</button>
    </form>
  )
}
function App() {
  const [showDialog, setShowDialog] = React.useState('none')
  const openLogin = () => setShowDialog('login')
  const openRegister = () => setShowDialog('register')
  const close = () => setShowDialog('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }
  return (
    <>
      <Logo width={80} height={80}></Logo>
      <h1>Bookshelf</h1>
      <button onClick={openLogin}>Login</button>
      <button onClick={openRegister}>Register</button>

      <Dialog
        aria-label={'modal'}
        isOpen={showDialog === 'login' || showDialog === 'register'}
        onDismiss={close}
      >
        {showDialog === 'login' ? (
          <LoginForm onSubmit={login} buttonText="Login" />
        ) : showDialog === 'register' ? (
          <LoginForm onSubmit={register} buttonText="register" />
        ) : null}
        <button onClick={close}>close</button>
      </Dialog>
    </>
  )
}

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
