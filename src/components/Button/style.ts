import styled from 'styled-components'

export const ButtonPrimary = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${({ isDisabled }) =>  isDisabled ? 'gray' :  '#5f01ba'};
  color: ${({ isDisabled }) => isDisabled ? 'black' : 'white'};

  opacity: ${({ isDisabled }) =>  isDisabled ? '0.4' : '1'};
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: ${({ isDisabled }) => (isDisabled ? '0.2' : '0.8')};
  }
`
