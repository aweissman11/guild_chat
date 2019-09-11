import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TopicList from '../../Containers/TopicList';
import MessageList from '../../Containers/MessageList';
import InputBox from '../../Containers/InputBox';

export const useStyles = makeStyles(theme => ({
  chatContainer: {
    margin: '30px',
    height: 'calc(100vh - 60px)',
    padding: theme.spacing(3, 2),
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridGap: '5px'
  }
}));

const ChatContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.chatContainer}>
      <TopicList />
      <Paper>
        <MessageList />
        <InputBox />
      </Paper>
    </div>
  );
}

export default ChatContainer;