/* eslint-disable react/jsx-fragments */
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
import { Link } from 'gatsby';
import Row from '../grid/row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { AppContext } from '../../AppProvider';
import { FirebaseContext } from '../../FirebaseProvider';

const SignupModal = ({ show, toggleFunction, classes, pathname }) => {
  const { setShowLoginModal } = useContext(AppContext);
  const { firebase, signedIn } = useContext(FirebaseContext);

  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState('Processing...');
  const [error, setError] = useState(false);

  if (signedIn) {
    setMessage('Success. Redirecting to the homepage.');
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onNameInputChange = e => {
    setName(e.target.value);
  };

  const onPasswordInputChange = e => {
    setPassword(e.target.value);
  };

  const onConfirmInputChange = e => {
    setConfirm(e.target.value);
  };

  const onEmailInputChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      name
    };

    setLoading(true);
    setShowForm(false);
    setMessage('Processing...');

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);

        setTimeout(() => {
          setMessage(
            "We've sent a confirmation email to you. Please open it and click the link to verify your account."
          );
          setLoading(false);
        }, 1250);
      })
      .catch(err => {
        console.log('Error: ', err);
        setLoading(false);
        setShowForm(true);
        setError(true);
        setMessage(err.message);
      });

    // setTimeout(() => {
    //   window.location.pathname = '/';
    // }, 1500);
  };

  const handleClose = () => {
    toggleFunction();
  };

  const switchModal = () => {
    toggleFunction();
    setShowLoginModal(true);
  };

  return (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={show}
      onClose={handleClose}
    >
      <DialogTitle>
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={handleClose}
        >
          <FontAwesomeIcon icon='times' />
        </IconButton>
      </DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>
        {!showForm ? (
          <>
            <RedirectText>{message}</RedirectText>
            {loading && (
              <>
                {/* <span>{message}</span> */}
                <Loader color='primary' />
              </>
            )}
          </>
        ) : (
          <>
            {signedIn ? (
              <>
                <h2>You're already signed in! 🎉</h2>
                <p>Click the button to start exploring!</p>
                <Button variant='contained' color='primary'>
                  Let's Go
                </Button>
              </>
            ) : (
              <>
                <h1 className='mb-sm'>Sign Up</h1>

                {error && <ErrorText>{message}</ErrorText>}
                <Form onSubmit={onSubmit}>
                  <Row breakpoints={[769]} spacing={[12]}>
                    <div widths={[12]}>
                      <Input
                        id='name'
                        type='text'
                        fullWidth
                        placeholder='Name'
                        variant='outlined'
                        margin='dense'
                        label='Name'
                        onChange={onNameInputChange}
                      />
                    </div>
                    <div widths={[12]}>
                      {' '}
                      <Input
                        id='email'
                        type='text'
                        fullWidth
                        placeholder='Email'
                        variant='outlined'
                        margin='dense'
                        label='Email'
                        onChange={onEmailInputChange}
                      />
                    </div>
                    <div widths={[12]}>
                      {' '}
                      <Input
                        id='password'
                        type='password'
                        fullWidth
                        placeholder='Password'
                        variant='outlined'
                        margin='dense'
                        label='Password'
                        onChange={onPasswordInputChange}
                      />
                    </div>
                    <div widths={[12]}>
                      {' '}
                      <Input
                        id='password-reenter'
                        type='password'
                        fullWidth
                        placeholder='Verify Password'
                        variant='outlined'
                        margin='dense'
                        label='Verify Password'
                        onChange={onConfirmInputChange}
                      />
                    </div>
                    <div widths={[12]}>
                      {' '}
                      <SubmitButton
                        type='submit'
                        color='primary'
                        variant='contained'
                        fullWidth
                      >
                        Sign Up
                      </SubmitButton>
                    </div>
                  </Row>
                </Form>
                <Info>
                  Already have an account?
                  <Link onClick={switchModal}>Login</Link>
                </Info>
              </>
            )}
          </>
        )}
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

const Card = styled.div`
  padding: 24px;
  background: white;
  border-radius: 3px;
  box-shadow: 1px 1px 0px 0px #ddd, 2px 2px 5px 0px #eee;
`;

const RedirectText = styled.h2`
  text-align: center;
  margin: 0 auto;
  width: fit-content;
`;

const ErrorText = styled.p`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  background: tomato;
  color: white;
  font-weight: 500;
  font-size: 17px;
  margin: 12px 0;
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

const Loader = styled(LinearProgress)`
  margin-top: 24px;
`;

export default withStyles(styles)(SignupModal);
