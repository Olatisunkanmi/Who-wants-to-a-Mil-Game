import './CardList.css';
import {Link } from "react-router-dom"

 

const CardList = ({post} ) => {
  const PF =  "https://cracked-ink-cv.herokuapp.com/images/"    
  

  return (
      <>
      
    <div className='CardList bg-gray-100'>
            <img 
                src={PF + post.photo} 
                alt=""  
                className='CardImg'
                
              />

                    <div className="mt-5 flex-col flex">
                                <div className='text-center'>
                                      <span 
                                      className="items-center font-bold text-xl p-3">
                                              <Link to={`/posts/${post._id}`}>
                                                      {post.title}
                                              </Link>
                                      </span>
                                </div>
                                
                        <div className='m-2 text-center text-veryLightBrown'>
                                  <span 
                                  className="">{`${new Date(post.createdAt).toDateString() }.`}
                                  </span>

                                  <div 
                                  className="CardCat">
                                        
                                  </div>
                        </div>
                  

                                  <span 
                                        className="CardDesc font-bold px-5">
                                      {post.desc}
                                  </span>

                                <button 
                                      className='mt-5 p-2 text-black bg-veryLightBrown font-bold  
                                        hover:text-white' > 
                                            <Link 
                                                  to={`/posts/${post._id}`}>
                                                  Read More 
                                              </Link>
                                </button>

                    </div>
    </div>


    </>

  )
}

export default CardList