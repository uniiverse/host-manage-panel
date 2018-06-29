import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Create';
import CircularProgress from '@material-ui/core/CircularProgress';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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

const styles = theme => ({
  TicketTypeContainer: {
    display: 'block'
  },
  formControl: {
    display: 'block'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  icon: {
    margin: theme.spacing.unit,
  },
});

const FAKE_DATA = {
  id: '5b30ee9b5c3e935a58b34a89',
  title: 'My fine event',
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

class Ticket extends React.Component {
  state = {
    ticketStatus: 'active',
    ticketAvailability: 'everywhere',
    eventTitle: 'My fine event'
  };

  handleTicketStatus = event => {
    this.setState({ ticketStatus: event.target.value });
  };

  handleTicketAvailability = event => {
    this.setState({ ticketAvailability: event.target.value });
  };
  
  handleEventNameChange = event => {
    this.setState({ eventTitle: event.target.value});
  }
  render() {
    console.log(FAKE_DATA);
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              { this.state.eventTitle }
            </Typography>
            </Toolbar>
            </AppBar>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Basic Info</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Input
                  id="error"
                  label="Title"
                  value={this.state.eventTitle}
                  onChange={this.handleEventNameChange}
                  endAdornment={
                    <CircularProgress className={classes.progress} />
                  }
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Where and when</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Ticket Types</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.TicketTypeContainer}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >GA</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.TicketTypeContainer}>
                    <FormControl component="fieldset" required className={classes.formControl}>
                      <FormLabel component="legend">Max Quantity</FormLabel>
                        <TextField
                          id="maxQuantity"
                          defaultValue="10"
                          margin="normal"
                        />
                    Sold: 9
                    </FormControl>
                    <FormControl component="fieldset" required className={classes.formControl}>
                      <FormLabel component="legend">Ticket Status</FormLabel>
                      <RadioGroup
                        aria-label="ticket-status"
                        name="ticket-status"
                        className={classes.group}
                        value={this.state.ticketStatus}
                        onChange={this.handleTicketStatus}
                      >
                        <FormControlLabel value="active" control={<Radio />} label="Active" />
                        <FormControlLabel value="hidden" control={<Radio />} label="Hidden" />
                        <FormControlLabel value="locked" control={<Radio />} label="Locked" />
                      </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" required className={classes.formControl}>
                      <FormLabel component="legend">Availability</FormLabel>
                      <RadioGroup
                        aria-label="ticket-status"
                        name="ticket-status"
                        className={classes.group}
                        value={this.state.ticketAvailability}
                        onChange={this.handleTicketAvailability}
                      >
                        <FormControlLabel value="everywhere" control={<Radio />} label="Everywhere" />
                        <FormControlLabel value="online" control={<Radio />} label="Online" />
                        <FormControlLabel value="atdoor" control={<Radio />} label="At the door" />
                      </RadioGroup>
                    </FormControl>
                  </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >GA 2</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </ExpansionPanelDetails>
            </ExpansionPanel>

          
        
      </div>
      );
  }
};


export default withStyles(styles)(Ticket);
