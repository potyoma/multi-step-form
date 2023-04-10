import React, { ReactNode, createContext } from "react"

const FormContext = createContext(null)

const { Provider } = FormContext

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider value={null}>{children}</Provider>
}

export { FormContext, FormProvider }
