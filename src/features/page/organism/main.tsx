import React from "react"
import { Manipulate } from "./manipulate"
import { Menu } from "./menu"
import { $Store } from "../model/get-data"
import { useStore } from "effector-react"
import { $napravlenie } from "../model/select-napravlenie"

export const Main = () => {
  const data = useStore($Store)
  console.log(data)
  return (
    <>
      <Menu {...data} />
      <Manipulate activeMainTab={data.activeMainTab} />
    </>
  )
}
