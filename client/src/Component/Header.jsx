import '../App.css';
import { MenuOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

const Header = () => {
	const { sideBar, setSideBar } = useContext(Context);
	return (
		<div className='flex flex-row  '>
			<div className=' ]container max-w-6xl  px-5 p-3 mx-auto text-center '>
				<a
					href='./home'
					className='text-5xl font-bold md:text-center text-stone-800'
				>
					Cracked Ink
				</a>

				<p className='italic text-sm md:text-xl font-bold mt-2'>
					...Read, Write
					<span className='text-veryLightBrown '>
						{' '}
						and Read a little{' '}
					</span>
					bit More !
				</p>
			</div>

			<div
				className='w-1/12 md:hidden relative top-4 '
				onClick={() => setSideBar((prevsideBar) => !prevsideBar)}
			>
				<MenuOutlined className='ment' />
			</div>
		</div>
	);
};

export default Header;
