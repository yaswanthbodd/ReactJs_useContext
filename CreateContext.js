import React, { createContext, useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Pages/Home'
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Navbar from "./Navbar";
import Profile from "./Pages/Profile";
export const AppContext = createContext()
const CreateContext = ()=>{
    
    const [username,setUserName] = useState("yaswanth")
    return(
        <div>
            <AppContext.Provider value={{username,setUserName}}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Menu' element={<Menu />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </Router>
            </AppContext.Provider>
        </div>
    )
}

export default CreateContext