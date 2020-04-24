import React from 'react';
import styled from 'styled-components';

const Account = () => {
  return (
    <Wrapper>
      <Card>
        <CardTitle>Account Info</CardTitle>
        <CardDescription>
          This is some dummy content. Fill this in with user info.
        </CardDescription>
      </Card>
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
