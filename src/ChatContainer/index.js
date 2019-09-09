import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '30px',
    height: 'calc(100vh - 60px)',
    padding: theme.spacing(3, 2),
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridGap: '5px'
  },
  thread: {
    height: '80%',
  },
  formControl: {
    width: '70%',
    height: '100%'
  },
  inputBox: {
    display: 'flex',
    height: '20%'
  },
  outlinedInput: {
    width: '100%',
    height: '100%',
    margin: '10px'
  },
  buttonBox: {
    height: '100%',
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: theme.spacing(1),
    height: '40px',
    width: '90px'
  },
  messageLine: {
    display: 'flex',
    alignItems: 'center'
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const chats = [
  'Aaron',
  'Joe',
  'Di',
  'Chels'
];

const messages = [
  {
    from: 'Aaron',
    text: 'Hello There'
  },
  {
    from: 'Aaron',
    text: 'Hi guy'
  },
  {
    from: 'Joe',
    text: 'Woah now'
  },
]

const ChatContainer = () => {
  const classes = useStyles();
  const [name, setName] = React.useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Paper>
          Chat List
          <List component="nav" aria-label="secondary mailbox folders">
            {
              chats.map(chat => (
                <ListItem button key={chat}>
                  <ListItemText primary={chat} />
                </ListItem>
              ))
            }
          </List>
        </Paper>
        <Paper>
          <div className={classes.thread}>
            <Typography variant="h5" component="h3">
              Guilded Conversations
          </Typography>
            <Typography component="p">
              Chatting with <Typography variant="span" component="span">PERSON</Typography>
            </Typography>
            {
              messages.map((msg, i) => (
                <div className={classes.messageLine} key={i}>
                  <Chip color='primary' label={msg.from} className={classes.chip} />
                  <Typography component='p'>{msg.text}</Typography>
                </div>
              ))
            }
          </div>
          <div className={classes.inputBox}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="component-outlined">
                Type Here
                </InputLabel>
              <OutlinedInput
                id="component-outlined"
                className={classes.outlinedInput}
                value={name}
                onChange={handleChange}
                labelWidth={0}
                multiline
              />
            </FormControl>
            <div className={classes.buttonBox}>
              <Button variant="contained" color="primary" className={classes.button}>
                Send
              </Button>
            </div>
          </div>
        </Paper>
      </Paper>
    </div>
  );
}

export default ChatContainer;