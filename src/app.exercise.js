/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
import * as auth from 'auth-provider'
import {client} from './utils/api-client.exercise'
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'

const getUser = async () => {
  let user = null
  const token = await auth.getToken()
  
  if (token) {
    user = await client('me', {token})
  }
}

function App() {
  const [user, setUser] = React.useState(null)

  
  // React.useEffect(() => {
  //   const fetchData = async () => {

  //     const token = await auth.getToken()
      
  //     if (token) {
  //       // we're logged in! Let's go get the user's data:
  //       auth.client('me', {token}).then(data => {
  //         console.log(data.user)
  //       })
  //     } else {
  //       // we're not logged in. Show the login screen
  //     }
  //   }
  // })
    
  const login = form => auth.login(form).then(u => setUser(u))
  const register = form => auth.register(form).then(u => setUser(u))

  const logout = () => {
    auth.logout()
    setUser(null)
  }

  return user ? <AuthenticatedApp user={user} logout={logout} /> : <UnauthenticatedApp login={login} register={register} />
}

export {App}

/*
eslint
  no-unused-vars: "off",
*/
