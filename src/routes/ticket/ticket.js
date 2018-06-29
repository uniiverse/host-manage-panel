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
// import FormHelperText from '@material-ui/core/FormHelperText';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CircularProgress from '@material-ui/core/CircularProgress';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import './ticket.css';

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



class Ticket extends React.Component {
  state = {
    ticketStatus: 'active',
    ticketAvailability: 'everywhere',
    eventTitle: '',
    description: ''
  };

  componentDidMount() {
    this.setState({
      eventTitle: this.props.event.title,
      description: this.props.event.description
    });
  }

  handleSaveEvent = event => {
    this.setState({ eventTitle: event.title, description: event.description });
  };

  handleTicketStatus = event => {
    this.setState({ ticketStatus: event.target.value });
  };

  handleTicketAvailability = event => {
    this.setState({ ticketAvailability: event.target.value });
  };
  
  handleEventNameChange = event => {
    this.setState({ eventTitle: event.target.value});
  };

  render() {
    const { classes, state } = this.props;

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
            <Typography >Description</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{this.state.description}</Typography>
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
