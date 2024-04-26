import { Route, Routes } from "react-router-dom"
import Home from "./RootLayout/Pages/Home"
import RootLayout from "./RootLayout/RootLayout"

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
