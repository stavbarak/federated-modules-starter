import * as React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: palevioletred;
  color: white;
  font-size: 1rem;
  font-family: sans-serif;
`;




const StyledButton = () => <Button data-name="testable-button">Just a BUTTON</Button>;

export default StyledButton;
