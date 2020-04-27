import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccountInfo = ({ title, data, editFunction }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [stateValue, setStateValue] = useState(data);

  const handleChange = (e) => {
    setStateValue(e.target.value);
  }

  return (
    <Info
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      <strong>{title}:</strong>
      {showEdit ? <Input onChange={handleChange} value={stateValue} /> : <span>{data}</span>}
      {showIcon && !showEdit && (
        <EditButton onClick={() => setShowEdit(!showEdit)}>
          <FontAwesomeIcon icon='pencil-alt' />
        </EditButton>
      )}
      {showEdit && (
        <EditButton onClick={() => {
          setShowEdit(!showEdit);
          editFunction(stateValue);
        }}>
          <FontAwesomeIcon icon='check' />
        </EditButton>
      )}
    </Info>
  );
};

const Info = styled.div`
  padding: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  strong {
    margin-right: 8px;
  }
  height: 40px;
`;

const Input = styled.input`
  border: none;
  background: #f7f7f7;
  padding: 8px 12px;
  width: 100%;
  transition: .2s all ease-out;
`;

const EditButton = styled.div`
  margin-left: auto;
  margin-top: 2px;
  cursor: pointer;
  padding-left: 12px;
`;

export default AccountInfo;
