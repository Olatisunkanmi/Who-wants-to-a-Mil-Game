import { LocalCafeOutlined, Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../App.css';
import { useContext, useState } from 'react';
import { Context } from './context/Context';

const SideBar = () => {
	const { sideBar, setSideBar } = useContext(Context);
	return (
		<div
			className={`fixed md:hidden w-full bg-white h-screen z-50 transition-all duration-500
        ${sideBar ? 'block right-0' : '-right-full'}  `}
		>
			{/**   Side Bar */}
			<div className='flex flex-col p-5'>
				<div
					className=' w-full justify-between flex flex-row cursor-pointer'
					onClick={() => setSideBar((prevsideBar) => !prevsideBar)}
				>
					<h2 className='text-5xl Phil font-bold md:text-center text-veryLightBrown'>
						Cracked Ink
					</h2>

					<div>
						<Close />
					</div>
				</div>

				<ul className='w-full justify-between space-y-5 mt-5'>
					<li className='w-full p-2 text-black'>
						<a
							href='/home'
							className='font-serif cursor-pointer md:text-md
                                        font-semibold
                                        
                                        hover:text-veryLightBrown'
							rel='noreferrer'
						>
							{' '}
							Home{' '}
						</a>
					</li>

					<li className='w-full p-2 text-black'>
						<a
							href='/posts'
							className='font-serif cursor-pointer md:text-md
                                    font-semibold
                                    hover:text-veryLightBrown'
							rel='noreferrer'
						>
							{' '}
							Write ups
						</a>
					</li>

					<li className='w-full p-2 text-black'>
						<a
							href='/posts'
							className='font-serif cursor-pointer md:text-md
                                            font-semibold
                                            hover:text-veryLightBrown'
							rel='noreferrer'
						>
							{' '}
							mail junks{' '}
						</a>
					</li>

					<li className='w-full p-2 text-black'>
						<a
							href='/services'
							className='font-serif cursor-pointer md:text-md
                                                font-semibold
                                                hover:text-veryLightBrown'
							rel='noreferrer'
						>
							{' '}
							Services{' '}
						</a>
					</li>

					<li className='w-full p-2 text-black'>
						<a
							href='https://www.buymeacoffee.com/olatisun'
							target='_blank'
							rel='noreferrer'
							className='font-serif cursor-pointer md:text-md
                                          font-bold
                                          text-brightRed'
						>
							{' '}
							Buy ME Coffee <LocalCafeOutlined />{' '}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
