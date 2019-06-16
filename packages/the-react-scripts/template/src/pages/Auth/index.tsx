import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import { Button, Inner, Page } from '@app/components';
import { H2 } from '@app/typography';
import { JWT_LOCAL_STORAGE_KEY } from '@app/constants';
import { useAuthentication } from '@app/hooks';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Auth');

interface IAuthProps extends RouteComponentProps {}

/**
 * @render react
 * @name Auth page
 * @description Auth page.
 */

const Auth = ({ location }: IAuthProps) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication();

  const handleAuth = () => {
    window.localStorage.setItem(JWT_LOCAL_STORAGE_KEY, 'abc:123');
    setIsAuthenticated(true);
  }

  return !isAuthenticated ? (
    <Page>
      <Helmet>
        <title>Auth</title>
        <meta name="description" content="The page authenticates a user" />
      </Helmet>
      <Inner p={2}>
        <H2 mb={0}>Authenticator</H2>
        <Button onClick={handleAuth} text="Authenticate" />
      </Inner>
    </Page>
  ) : <Redirect to={location && location.state && location.state.from ? location.state.from : '/'}/>;
}

export default Auth;