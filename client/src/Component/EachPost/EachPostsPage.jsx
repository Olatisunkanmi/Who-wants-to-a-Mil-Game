import { Topbar, Header, Footer,  AllPostsCard} from "../Index";
import axios from "axios"
import { useEffect, useState, useContext } from "react";
import {Context } from '../context/Context'





const Posts = () => {
  const { Allpost}  = useContext(Context)

  return (
    <div  >
        <Header />
        <Topbar  /> 

          <div className="w-1/2 flex flex-row m-auto " >
          {Allpost.map((cur ) => ( 
            <AllPostsCard key={cur._id}
            post={cur} />
          ))}

         </div>
        
      
        <Footer /> 
    </div>
  )
}

export default Posts