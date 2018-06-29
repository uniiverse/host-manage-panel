import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Ticket from './ticket';

const GET_EVENT = gql`
  {
    event(id: "8P10S3") {
      id
      description
      title
      rates {
        totalCount
        nodes {
          id
          clientGroup
          name
          displayPrice,
          price,
          salesAmount,
          state
        }
      }
    }
  }
`;

class TicketQuery extends React.Component {
  render() {
    return (
      <Query query={GET_EVENT}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const { event } = data;
        return (<Ticket event={event} />);
      }}
      </Query>
    );
  }
}

export default TicketQuery;
