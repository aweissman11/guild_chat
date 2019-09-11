import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { getMessages } from '../../Actions/Thunks/getMessages';

const useStyles = makeStyles(theme => ({
  thread: {
    height: '80%',
  },
  messageLine: {
    display: 'flex',
    alignItems: 'center'
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

let socket;

const MessageList = (props) => {
  const classes = useStyles();

  useEffect(() => {
    if (!socket) {
      socket = io(':3001')
    }

    socket.on('all messages', function (msgs) {
      props.getMessages(msgs);
    });
  }, [props.messages.length])

  return (
    <div className={classes.thread}>
      <Typography variant="h5" component="h3">
        Guilded Conversations
      </Typography>
      <Typography component="p">
        {props.currentTopic}
      </Typography>
      {
        props.messages && props.messages.filter(msg =>
          msg.topic === props.currentTopic
        )
          .map((msg, i) => (
            <div className={classes.messageLine} key={i}>
              <Chip color='primary' label={msg.from} className={classes.chip} />
              <Typography component='p'>{msg.text}</Typography>
            </div>
          ))
      }
    </div>
  );
}


export const mapStateToProps = ({ messages, currentTopic }) => ({ messages, currentTopic })


export const mapDispatchToProps = (dispatch) => ({
  getMessages: () => dispatch(getMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);