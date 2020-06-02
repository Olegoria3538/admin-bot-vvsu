import React from "react"
import { Container } from "react-grid-system"
import styled from "styled-components"
import Add from "../../statick/img/add.svg"
import Edit from "../../statick/img/edit.svg"
import Remove from "../../statick/img/remove.svg"

export const Instrument = () => {
  return (
    <Wrapper>
      <Container>
        <Menu>
          <img src={Add} alt={"добавить"} />
          <img src={Edit} alt={"изменить"} />
          <img src={Remove} alt={"удалить"} />
        </Menu>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #716868;
`

const Menu = styled.div`
  padding: 12px;
  display: flex;
  & > img {
    margin-right: 20px;
  }
`
