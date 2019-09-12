import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import { addNewMessage } from '../../Actions/Thunks/addNewMessage';
import { getTopics } from '../../Actions/Thunks/getTopics';
import InputModal from '../InputModal';
import { setUsername } from '../../Actions'

const useStyles = makeStyles(theme => ({
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
    height: '65px',
    width: '150px'
  },
}));

export const InputBox = (props) => {
  const classes = useStyles();
  const [inputText, setInputText] = React.useState('');

  useEffect(() => {
    if (props.getTopics) {
      props.getTopics();
    }
  }, []);

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const submitText = (e) => {
    e.preventDefault();
    let newMessage = {
      text: inputText,
      from: props.username,
      topic: props.currentTopic
    }
    props.addNewMessage(newMessage);
    setInputText('');
  }

  const keyDown = (e) => {
    if (e.keyCode === 13) {
      submitText(e);
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<>
    {!props.username ? <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleOpen}
      >
        Enter Username
        </Button>
      <Modal
        aria-labelledby="username-entry-modal"
        aria-describedby="enter-username-here"
        open={open}
        onClose={handleClose}
      >
        <InputModal
          closeModal={handleClose}
          inputLabel='Add Username'
          submitModalInput={(username) => {
            props.setUsername(username)
          }}
        />
      </Modal>
    </>
      :
      <>
        {props.currentTopic.length ?
          <form className={classes.inputBox} onSubmit={submitText}>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel htmlFor="component-outlined">
                Type Here
              </InputLabel>
              <OutlinedInput
                id="component-outlined"
                className={classes.outlinedInput}
                value={inputText}
                onChange={handleChange}
                labelWidth={0}
                multiline
                onKeyDown={keyDown}
              />
            </FormControl>
            <div className={classes.buttonBox}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Send
              </Button>
            </div>
          </form>
          :
          <div>NO TOPIC</div>
        }
      </>}
  </>);
}


export const mapStateToProps = ({
  messages,
  topics,
  currentTopic,
  username
}) => ({
  messages,
  topics,
  currentTopic,
  username
});

export const mapDispatchToProps = (dispatch) => ({
  addNewMessage: (message) => dispatch(addNewMessage(message)),
  getTopics: (topics) => dispatch(getTopics(topics)),
  setUsername: (user) => dispatch(setUsername(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputBox);