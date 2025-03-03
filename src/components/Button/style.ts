import styled from 'styled-components'

export const ButtonPrimary = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  height: 40px;
  background-color: ${({ isDisabled }) => {
    if (isDisabled) {
      return 'gray'
    }
    return '#993399'
  }};
  color: ${({ isDisabled }) => {
    if (isDisabled) {
      return 'black'
    }
    return 'white'
  }};

  opacity: ${({ isDisabled }) => {
    if (isDisabled) {
      return '0.6'
    }
    return '1'
  }};

  border: none;

`
