import { LocalCafeOutlined } from '@material-ui/icons';
import {Link } from 'react-router-dom'

const Topbar = () => {
  return (

        <div 
                className=''>
                        <div 
                                className='
                                lg:w-4/6
                                m-auto 
                                md:justify-around 
                                flex flex-row 
                                p-5 
                                mt-7 border-4 border-y-black
                                border-x-0'>
                                <ul 
                                        className='flex flex-row 
                                                        w-full
                                                        md:w-5/6 text-md  
                                                        text-center justify-between  '>
                                        <li  > 
                                                 <a href='/home' className='font-serif cursor-pointer md:text-xl
                                                font-semibold
                                                
                                                hover:text-veryLightBrown' > Home </a>
                                        </li>

                                        <li> 
                                                        <a href='/posts' className='font-serif cursor-pointer md:text-xl
                                                font-semibold
                                                hover:text-veryLightBrown' > Write ups</a>
                                        </li>
                                        <li> 
                                               
                                                        <a href='' className='font-serif cursor-pointer md:text-xl
                                                font-semibold
                                                hover:text-veryLightBrown' > Services </a>
                                        </li>
                                        <li> 
                                             
                                                        <a href='/'  className='font-serif cursor-pointer md:text-xl
                                                font-semibold
                                                hover:text-veryLightBrown'> About Me </a>
                                        </li>
                                      
                                        <li >
                                        <a
                                        href='https://www.buymeacoffee.com/olatisun'
                                        target='_blank'
                                          className='font-serif cursor-pointer md:text-xl
                                          font-bold
                                          text-brightRed'> Buy ME Coffee <LocalCafeOutlined /> </a>
                                        </li>
                                       
                                </ul>


                             
                        </div>
        </div>
        
        
  )
}

export default Topbar;