import { Topbar, Header, Footer,  AllPostsCard} from "../Index";
import axios from "axios"
import { useEffect, useState } from "react";



const Posts = () => {
  const [posts, setPosts ] = useState([]);
    (async () => {
       const res = await axios.get("/posts" );
       setPosts(res.data);
       console.log(res.data)
      })     ();

      
useEffect(() => {
  
}, [posts])

  
  return (
    <div  >
        <Header />
        <Topbar  /> 

        
        
      
        <Footer /> 
    </div>
  )
}

export default Posts