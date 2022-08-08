import { Topbar, Header, Footer,  AllPostsCard} from "../Index";
import {useContext } from "react";
import {Context } from '../context/Context'





const Posts = () => {
  const { Allpost}  = useContext(Context)

  return (
    <div  >
        <Header />
        <Topbar  /> 

          <div className="w-11/12 flex flex-col items-center lg:flex-row m-auto md:flex-wrap lg:w-4/6" >
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