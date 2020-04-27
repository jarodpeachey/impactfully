import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FirebaseContext } from '../FirebaseProvider';
import AccountInfo from '../components/account/AccountInfo';

const Account = () => {
  const { firebase, user } = useContext(FirebaseContext);
  const [render, setRender] = useState(false);

  console.log(user);

  const updateName = newValue => {
    if (newValue !== user.displayName) {
      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: newValue
        })
        .then(res => setRender(true))
        .catch(err => console.log(err));
    }
  };
  const updateEmail = newValue => {
    if (newValue !== user.email) {
      user
        .updateEmail(newValue)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
  return (
    <Wrapper>
      {user ? (
        <Card>
          <CardTitle>Account Info</CardTitle>
          <CardDescription>
            <AccountInfo
              title='Name'
              editFunction={updateName}
              data={user.displayName || 'Not set'}
            />
            <AccountInfo
              title='Email'
              data={user.email}
              editFunction={updateEmail}
            />
          </CardDescription>
        </Card>
      ) : (
        <Card>
          <CardTitle>Restricted</CardTitle>
          <CardDescription>
            This is a restricted page. Please sign in or create an account.
          </CardDescription>
        </Card>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Card = styled.div`
  padding: 16px;
  background: white;
  border-radius: 3px;
  box-shadow: 1px 1px 0px 0px #ddd, 2px 2px 5px 0px #eee;
  width: 100%;
`;

const CardTitle = styled.h1`
  width: fit-content;
  margin-bottom: 24px;
  margin-top: 0;
`;

const CardDescription = styled.p`
  font-size: 18px;
  color: #666;
`;

export default Account;
