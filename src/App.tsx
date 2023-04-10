import "./App.css"
import Footer from "./components/footer"
import FormContainer from "./components/formContainer"
import Navigation from "./components/navigation"
import PersonalInfo from "./components/personalInfo"
import { FormProvider } from "./contexts/formContext"

function App() {
  return (
    <div className="app">
      <FormProvider>
        <Navigation />
        <FormContainer>
          <PersonalInfo />
        </FormContainer>
        <Footer />
      </FormProvider>
    </div>
  )
}

export default App
