import styled from 'styled-components'

export const CardForm = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px;

  background-color: white;

  box-shadow: -1px 6px 7px -1px rgba(0,0,0,0.42);
-webkit-box-shadow: -1px 6px 7px -1px rgba(0,0,0,0.42);
-moz-box-shadow: -1px 6px 7px -1px rgba(0,0,0,0.42);

  @media (max-width: 500px) {
    width: 92%;
  }
`
