import { useCallback, useEffect, useState } from 'react'
import { LoadingDots } from '@island.is/island-ui/core'
import { Login } from '../screens'

interface AuthenticatorProps {
  children: React.ReactNode
}

const Authenticator = ({ children }: AuthenticatorProps) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loginExpiration = localStorage.getItem('loginExpiration')
    let isLoginExpired = true
    try {
      isLoginExpired = loginExpiration
        ? new Date(String(loginExpiration)) < new Date()
        : true
    } catch (e) {
      console.error(e)
    }
    setLoggedIn(!isLoginExpired)
    setLoading(false)
  }, [])

  const loginCallback = useCallback(() => {
    setLoggedIn(true)
  }, [])

  if (loading) {
    return <LoadingDots />
  }

  if (!loggedIn) {
    return <Login loginCallback={loginCallback} />
  }

  return children
}

export default Authenticator
