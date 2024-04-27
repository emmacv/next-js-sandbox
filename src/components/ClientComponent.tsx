"use client";

import { ReactNode } from "react";
import Title from "./Title"

const ClientComponent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Title />
      {children}
    </>
  )
}

export default ClientComponent
