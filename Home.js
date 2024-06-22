import { useContext } from "react"
import { AppContext } from "../CreateContext"
const Home = (props)=>{
    const {username} = useContext(AppContext)
    return ( 
        <div>
        <h1>This is the Home Page and the user is {username}</h1>
        </div>
        )
}

export default Home