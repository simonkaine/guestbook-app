import { Redirect, Route } from "react-router-dom";
import { useAuth } from '../../Hooks/useAuth.js';

export function PrivateRoute({ children, ...rest }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let auth = useAuth();

    return (
        <Route {...rest}
        render={({ location }) => auth.user ? (
            children
        ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: location },
            }} 
        />
        )
      }
    />
  );
}