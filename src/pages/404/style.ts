import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 42px;
  max-width: 95vw;
  font-weight: bold;
`

export const Link = styled.a`
  font-size: 20px;
  max-width: 90vw;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`

export const MainContent = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:rgb(254, 254, 254);
`
