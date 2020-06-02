import React from "react"
import { Main } from "./features/page/organism/main"
import { AddForm } from "./features/page/molecules/add-form"
import { EditForm } from "./features/page/molecules/edit-form"

function App() {
  return (
    <>
      <Main />
      <AddForm />
      <EditForm />
    </>
  )
}

export default App
