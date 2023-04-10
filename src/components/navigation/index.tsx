import { useContext } from "react"
import "./index.css"
import { FormContext } from "../../contexts/formContext"
import Badge from "../core/badge"

const Navigation = () => {
  const { step, navs } = useContext(FormContext)

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navs?.map(({ id, step: cur }, i) => (
          <li key={id}>
            <Badge
              selected={
                Array.isArray(cur) ? cur.some(st => st === step) : cur === step
              }
            >
              {i + 1}
            </Badge>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
