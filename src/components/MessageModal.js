import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {
  withStyles,
  IconButton,
  DialogTitle,
  LinearProgress
} from '@material-ui/core';

const MessageModal = ({ text, show, toggleFunction, classes, pathname }) => {
  // const [state, setState] = useState({});

  // const onNameInputChange = e => {
  //   setState({ nameValue: e.target.value, ...state });
  // };

  // const onEmailInputChange = e => {
  //   setState({ emailValue: e.target.value, ...state });
  // };

  // const onPasswordInputChange = e => {
  //   setState({ passwordValue: e.target.value, ...state });
  // };

  // const onConfirmInputChange = e => {
  //   setState({ confirmValue: e.target.value, ...state });
  // };

  const handleClose = () => {
    toggleFunction();
  };

  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={show}
      onClose={handleClose}
    >
      <DialogContent classes={{ root: classes.dialogContent }}>
        <>
          <RedirectText>{text}</RedirectText>
          <LinearProgress color='primary' />
        </>
      </DialogContent>
    </Dialog>
  );
};

const styles = () => ({
  dialog: {
    width: '90%',
    maxWidth: '350px',
    margin: '0 auto',
    '@media (min-width: 769px)': {
      maxWidth: '400px'
    },
    '@media (max-width: 456px)': {
      width: '100%',
      height: '100vh',
      maxWidth: '100%',
      maxHeight: '100vh',
      margin: 0
    },
    height: 'fit-content'
  },
  dialogContent: {
    background: 'white',
    padding: '32px 24px',
    overflowY: 'hidden'
    // flex: 'none !important',
  },
  closeButton: {
    margin: 0,
    display: 'block',
    position: 'absolute',
    top: 4,
    right: 4,
    height: 50,
    width: 50
  }
});

// const ModalTitleArea = styled.div`
//   width: 100%;
//   padding: 12px 12px 4px 12px;
//   z-index: 999;
//   @media (min-width: 769px) {
//     text-align: center;
//   }
// `;

const RedirectText = styled.h2`
  text-align: center;
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 24px;
`;

const Form = styled.form`
  margin: 0;
`;

const SubmitButton = styled(Button)``;

const Input = styled(TextField)`
  margin: 0 !important;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
`;

// const FormWrapper = styled.div`
//   width: 60%;
//   margin: 0 auto;
//   max-width: 540px;
// `;

// const Heading = styled.h1`
//   text-align: center;
// `;

export default withStyles(styles)(MessageModal);
