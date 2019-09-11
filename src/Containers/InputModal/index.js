import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { InputLabel, OutlinedInput, FormControl } from '@material-ui/core';

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(theme => ({
  formControl: {
    position: 'absolute',
    width: '400px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    justifyContent: 'center'
  },
  outlinedInput: {
    width: '100%',
    height: '100%',
    margin: '10px'
  },
  addButton: {
    alignSelf: 'center'
  }
}));

export const InputModal = (props) => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [inputText, setInputText] = React.useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const keyDown = (e) => {
    if (e.keyCode === 13) {
      submitText(e);
    }
  }

  const submitText = (e) => {
    e.preventDefault();

    props.submitModalInput(inputText);

    setInputText('');
    props.closeModal();
  }

  return (
    <FormControl className={classes.formControl} style={modalStyle}>
      <InputLabel htmlFor='topic-input'>
        {props.inputLabel}
      </InputLabel>
      <OutlinedInput
        id="topic-input"
        className={classes.outlinedInput}
        value={inputText}
        onChange={handleChange}
        labelWidth={0}
        onKeyDown={keyDown}
      />
      <Fab color="primary" className={classes.addButton} aria-label="add" onClick={submitText} >
        <AddIcon />
      </Fab>
    </FormControl>
  );
}

export default InputModal;