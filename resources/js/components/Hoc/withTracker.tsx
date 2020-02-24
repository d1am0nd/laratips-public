import * as React from 'react';
import * as ReactGA from 'react-ga';
import {RouteComponentProps} from 'react-router-dom';

export const withTracker = <P extends RouteComponentProps>(
  WrappedComponent: React.ComponentType<P>,
  options: ReactGA.FieldsObject = {},
) => {
  const trackPage = (page: string) => {
    ReactGA.set({page, ...options});
    ReactGA.pageview(page);
  };

  const WithTracker = (props: P) => {
    React.useEffect(() => {
      trackPage(props.location.pathname);
    }, [props.location.pathname]);

    return <WrappedComponent {...props} />;
  };

  return WithTracker;
};
