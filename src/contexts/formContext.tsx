import { Form, Formik, FormikHelpers, useFormik } from "formik"
import React, { ReactNode, createContext, useState } from "react"
import * as yup from "yup"

export enum Steps {
  PersonalInfo,
  SelectPlan,
  PickAddOns,
  FinishingUp,
  Finished,
}

type Plan = "arcade" | "advanced" | "pro"

type Billing = "monthly" | "yearly"

interface AddOns {
  onlineService: boolean
  largerStorage: boolean
  customizableProfile: boolean
}

interface FormValues {
  name?: string
  email?: string
  phone?: string
  plan: Plan
  billed: Billing
  addOns: AddOns
}

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Too short!")
    .max(100, "Too long")
    .required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
})

const initialValues: FormValues = {
  plan: "arcade",
  billed: "monthly",
  addOns: {
    largerStorage: true,
    onlineService: true,
    customizableProfile: false,
  },
}

interface Nav {
  id: string
  step: Steps | Steps[]
}

const navs = [
  {
    id: "personalInfo",
    step: Steps.PersonalInfo,
  },
  { id: "selectPlan", step: Steps.SelectPlan },
  { id: "addOns", step: Steps.PickAddOns },
  { id: "", step: [Steps.FinishingUp, Steps.Finished] },
]

interface FormContextValues {
  step?: Steps
  navs?: Nav[]
}

const FormContext = createContext<FormContextValues>({})

const { Provider } = FormContext

const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(Steps.PersonalInfo)

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {}

  return (
    <Provider value={{ step, navs }}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        <Form>{children}</Form>
      </Formik>
    </Provider>
  )
}

export { FormContext, FormProvider }
