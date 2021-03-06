import React from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"
import { useAuthContext } from "../providers/auth.provider"

const UserGuardedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  const { isUserLoggedIn, isAdminLoggedIn } = useAuthContext()
  if (isUserLoggedIn || isAdminLoggedIn) {
    return <Route {...props}>{children}</Route>
  }
  return (
    <Route {...props}>
      <Redirect to="/login" />
    </Route>
  )
}

export { UserGuardedRoute }
