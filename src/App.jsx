import { useState } from "react"
import publicRoutes from "./router/routes/publicRoutes"
import Router from "./router/Router"

export default function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  return <Router allRoutes={allRoutes}></Router>
}