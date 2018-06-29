import React from 'react';

import './ticket.css';
/*
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
*/

// TODO UI :)

const FAKE_DATA = {
  id: '5b30ee9b5c3e935a58b34a89',
  rates: {
    nodes: [{
      clientGroup: "EVERYWHERE",
      displayPrice :100,
      id: "5b30ee9b5c3e935a58b34a96",
      name: "ticket type one",
      price: 100,
      salesAmount: 257,
      state: "ACTIVE"
    }, {
      clientGroup: "EVERYWHERE",
      displayPrice: 25,
      id: "5b365fbb5c3e9330fe024a79",
      name: "ticket type two",
      price: 25,
      salesAmount: 0,
      state: "ACTIVE"
    }, {
      clientGroup: "EVERYWHERE",
      displayPrice: 50,
      id: "5b365fbb5c3e9330fe024a7a",
      name: "ticket type three",
      price: 50,
      salesAmount: 0,
      state: "ACTIVE"
    }],
    totalCount: 3
  }
}

const Ticket = () => {
  console.log(FAKE_DATA);
  return (
    <div className="wrapper">
      {'hello world'}
    </div>
  );
};


export default Ticket;
