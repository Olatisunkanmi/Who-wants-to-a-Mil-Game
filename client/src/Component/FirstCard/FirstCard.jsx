import { Link } from 'react-router-dom';
import { CalendarTodayRounded } from '@material-ui/icons';
import './FirstCard.css';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';

const FirstCard = ({}) => {
	const { mainPosts } = useContext(Context);
	const PF = 'https://cracked-ink-cv.herokuapp.com/images/';
	// Send only last item to array to first card.

	// console.log(mainPosts);
	return (
		<div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
			<div className='text-xl font-bold text-center flex flex-col  items-center p-6 m-10 -mt-9 -mb-2'>
				<img
					src={PF + mainPosts.photo}
					alt='image'
					className='rounded'
					width='850px'
				/>
			</div>

			<div className='flex flex-col items-center'>
				<div className='flex items-center font-bold mb-10'>
					<CalendarTodayRounded />
					<span className=''>{`${new Date(
						mainPosts.createdAt,
					).toDateString()}.`}</span>
				</div>

				<span className='FirstCard--title'>{mainPosts.title}</span>

				<span className='FirstCard--desc'>{mainPosts.desc}</span>
				<button className='m-5 p-3 font-bold bg-black text-white hover:bg-veryLightBrown hover:text-black'>
					<Link to={`/posts/${mainPosts._id}`}>Read More</Link>
				</button>
			</div>
		</div>
	);
};

export default FirstCard;
