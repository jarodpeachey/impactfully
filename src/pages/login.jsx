import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, LinearProgress } from '@material-ui/core';
import { Link } from 'gatsby';
import { PageLayout } from '../components/pageLayout';
import Row from '../components/grid/row';
import { AppContext } from '../components/AppProvider';

const Login = () => {
  const { signedIn, setSignedIn } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

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

  const onSubmit = e => {
    e.preventDefault();

    setSignedIn(true);

    setLoading(true);

    setTimeout(() => {
      window.location.pathname = '/';
    }, 1500);
  };

  return (
    <Wrapper className='container section'>
      {loading ? (
        <Card>
          <RedirectText>Logging in...</RedirectText>
          <LinearProgress color='primary' />
        </Card>
      ) : (
        <>
          {signedIn ? (
            <Card>
              <h2>You're already signed in! 🎉</h2>
              <p>Click the button to start shopping.</p>
              <Button variant='contained' color='primary'>
                Let's Go
              </Button>
            </Card>
          ) : (
            <>
              <h1 className='mb-sm'>Log In</h1>
              <Card>
                <Form onSubmit={onSubmit}>
                  <Row breakpoints={[769]} spacing={[12]}>
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
                        // onChange={() => onEmailInputChange()}
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
                        // onChange={() => onPasswordInputChange()}
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
                        Log In
                      </SubmitButton>
                    </div>
                  </Row>
                </Form>
              </Card>
              <Info>
                Don't have an account?
                <Link to='/signup'>Sign Up</Link>
              </Info>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 576px;
`;

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

export default Login;
