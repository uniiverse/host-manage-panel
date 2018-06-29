import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_EVENT = gql`
  {
    event(id: "8P10S3") {
      id
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

// TODO UI :)

const Ticket = () => {
  return (
    <div>
      <Query query={GET_EVENT}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          const { event } = data;
          console.log(event);

          return (
            <div>{'Hello world'}</div>
          );
        }}
      </Query>
    </div>
  );
};

export default Ticket;
