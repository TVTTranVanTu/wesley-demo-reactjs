import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './routerConfix';
import { user } from '../App';

const RouteWithSubRoutes: React.FC<IRoute> = (route: IRoute) => {
  const authenticated: boolean = user.authenticated;

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : route.private ? (
            authenticated ? (
              route.component && <route.component {...props} routes={route.routes} />
            ) : (
              <Redirect to="/home/login" />
            )
          ) : (
            route.component && <route.component {...props} routes={route.routes} />
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
