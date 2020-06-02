import React from "react"
import { Row, Container } from "react-grid-system"
import styled from "styled-components"

export const Manipulate = () => {
  return (
    <Container>
      <Wrapper>
        <Table>
          <Row style={{ background: "#E5E5E5" }}>
            <RowItem>
              <TitleTable>Вопросы</TitleTable>
            </RowItem>
            <RowItem>
              <TitleTable>Ответы</TitleTable>
            </RowItem>
          </Row>
          <Row>
            <RowItem>
              Вопрос1...Вопрос1...Вопрос1...Вопрос1...Вопрос1...Вопрос1...
            </RowItem>
            <RowItem>Ответ1...</RowItem>
          </Row>
        </Table>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  margin-top: 100px;
`

const Table = styled.div`
  margin: auto;
  border-radius: 5px;
  border: 1px solid #828282;
  max-width: 640px;
  & > div {
    margin: 0 !important;
    border-bottom: 1px solid #828282;
    &:last-child {
      border-bottom: none;
    }
    transition: background-color 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #f6f8fa;
    }
  }
`

const RowItem = styled.div`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:first-child {
    border-right: 1px solid #828282;
  }
`

const TitleTable = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`
