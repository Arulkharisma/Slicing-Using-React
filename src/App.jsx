import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import HomePage from "./pages/HomePage"
import FeaturePage from "./pages/FeaturePage"
import ServicePage from "./pages/ServicePage"
import ReviePage from "./pages/ReviePage"
import LocationPage from "./pages/LocationPage"
function App() {

  return (
    <>
      <NavbarComponent/>

      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/feature" Component={FeaturePage}/>
        <Route path="/service" Component={ServicePage}/>
        <Route path="/review" Component={ReviePage}/>
        <Route path="/location" Component={LocationPage}/>
      </Routes>
    </>
  )
}

export default App
