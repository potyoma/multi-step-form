import React, { ReactNode } from "react"
import "./index.css"

const FormContainer: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <>{children}</>
)

export default FormContainer
