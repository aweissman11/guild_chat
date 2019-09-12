import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { addNewTopic } from '../../Actions/Thunks/addNewTopic';
import { getTopics } from '../../Actions/Thunks/getTopics';
import { setCurrentTopic } from '../../Actions'
import InputModal from '../InputModal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  topicHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 16px 0',
    fontSize: '20px',
    fontWeight: 'bold'
  }
}));

export const TopicList = (props) => {
  const classes = useStyles();

  useEffect(() => {
    if (props.getTopics) {
      props.getTopics();
    }
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper>
      <Typography className={classes.topicHeader}>
        TOPICS
        <Fab color="primary" aria-label="add" onClick={handleOpen} >
          <AddIcon />
        </Fab>
      </Typography>
      <List component="nav" aria-label="chat topics">
        {
          props.topics ? props.topics.map(topic => (
            <ListItem selected={topic === props.currentTopic} onClick={() => props.setCurrentTopic(topic)} button key={topic}>
              <ListItemText primary={topic} />
            </ListItem>
          ))
            : null
        }
      </List>
      <Modal
        aria-labelledby="topic-entry-modal"
        aria-describedby="enter-topic-here"
        open={open}
        onClose={handleClose}
      >
        <InputModal
          closeModal={handleClose}
          inputLabel='Add Topic'
          submitModalInput={(inputText) => {
            props.addNewTopic(inputText);
            props.setCurrentTopic(inputText);
          }}
        />
      </Modal>
    </Paper>
  );
}

export const mapStateToProps = ({ topics, currentTopic }) => ({ topics, currentTopic })


export const mapDispatchToProps = (dispatch) => ({
  getTopics: () => dispatch(getTopics()),
  addNewTopic: (newTopic) => dispatch(addNewTopic(newTopic)),
  setCurrentTopic: (topic) => dispatch(setCurrentTopic(topic))
})


export default connect(mapStateToProps, mapDispatchToProps)(TopicList);