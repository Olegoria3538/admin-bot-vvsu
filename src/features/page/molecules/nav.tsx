import React from "react"
import { Container } from "react-grid-system"
import styled from "styled-components"

export const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <Menu>
          <MenuItem>ВОПРОСЫ-ОТВЕТЫ</MenuItem>
          <MenuItem>ВОПРОСЫ-ОТВЕТЫ</MenuItem>
          <MenuItem>ВОПРОСЫ-ОТВЕТЫ</MenuItem>
        </Menu>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #8e9277;
`

const Menu = styled.div`
  padding: 12px;
  display: flex;
`

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  text-transform: uppercase;
  margin-right: 10px;
  border-right: 1px solid black;
  padding-right: 10px;
  &:last-child {
    margin-right: 0;
    border-right: none;
    padding-right: 0;
  }
`
