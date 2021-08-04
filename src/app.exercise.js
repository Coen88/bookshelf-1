/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
// 🐨 you're going to need this:
import * as auth from 'auth-provider'
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'

function App() {
  // 🐨 useState for the user
  const [user, setUser] = React.useState(false)

  // 🐨 create a login function that calls auth.login then sets the user
  const login = form => auth.login(form).then(u => setUser(u))
  // 💰 const login = form => auth.login(form).then(u => setUser(u))
  // 🐨 create a registration function that does the same as login except for register
  const register = form => auth.register(form).then(u => setUser(u))

  // 🐨 create a logout function that calls auth.logout() and sets the user to null
  const logout = () => auth.logout().then(() => setUser(null))

  // 🐨 if there's a user, then render the AuthenticatedApp with the user and logout


  // 🐨 if there's not a user, then render the UnauthenticatedApp with login and register

  return user ? <AuthenticatedApp user={user} logout={logout} /> : <UnauthenticatedApp login={login} register={register} />
}

export {App}

/*
eslint
  no-unused-vars: "off",
*/
