import React from 'react';
import { connect } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { getSessionCSRFToken } from '../selectors/raw-selectors';

import Ticket from './ticket';
import NotFound from './not-found';

class Router extends React.Component {
  render() {
    if (!this.props.csrfToken) {
      return <div />;
    }

    const client = new ApolloClient({
      uri: 'http://uvrs.tech:8080/graphql',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.props.csrfToken
      }
    });

    return (
      <ApolloProvider client={client}>
        <BrowserRouter basename="host/manage">
          <div>
            <Switch>
              <Route exact path="/ticket" component={Ticket} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

const mapStateToProps = state => ({ csrfToken: getSessionCSRFToken(state) });

export default connect(mapStateToProps)(Router);
