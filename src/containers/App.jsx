import React, { Suspense } from 'react'
import {Route, Routes} from "react-router-dom"
import {HomeScreen, Authentication} from "../pages"

//there are tow routes home, and auth route for user loin in Gmail, Github etc.

const App = () => {
  return <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path="/*" element={<HomeScreen />} />
      <Route path="/auth" element={<Authentication />} />

    </Routes>
  </Suspense>
}


export default App