import clsx from "clsx"
import React, { ReactNode } from "react"
import "./index.css"

interface Props {
  selected?: boolean
  children: ReactNode
}

const Badge: React.FC<Props> = ({ selected, children }) => {
  return <div className={clsx("badge", selected && "selected")}>{children}</div>
}

export default Badge
