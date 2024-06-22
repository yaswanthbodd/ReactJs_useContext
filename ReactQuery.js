
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Pages/Home'
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Navbar from "./Navbar";
import Profile from "./Pages/Profile";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import QueryPage from "./QueryPage";
const ReactQuery = ()=>{
    const client=new QueryClient()
    return(
        <div>
            <QueryClientProvider client={client}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<QueryPage />}/>
                    <Route path='/Menu' element={<Menu />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </Router>
            </QueryClientProvider>
        </div>
    )
}

export default ReactQuery