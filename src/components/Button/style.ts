import styled from 'styled-components'

export const ButtonPrimary = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${({ isDisabled }) => {
    if (isDisabled) {
      return 'gray'
    }
    return '#5f01ba'
  }};
  color: ${({ isDisabled }) => {
    if (isDisabled) {
      return 'black'
    }
    return 'white'
  }};

  opacity: ${({ isDisabled }) => {
    if (isDisabled) {
      return '0.4'
    }
    return '1'
  }};

  border: none;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    opacity: ${({ isDisabled }) => (isDisabled ? '0.2' : '0.8')}; /* Diminui a opacidade no hover */
  }

`
