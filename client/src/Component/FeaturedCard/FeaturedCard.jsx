import { CardList } from '../Index';
import './FeaturedCard.css';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

const FeaturedCard = () => {
	const { mainPosts } = useContext(Context);

	return (
		<div className='justify-center mt-20 flex flex-col items-left max-w-5xl m-auto '>
			<h3 className='Featured--Articles font-bold text-brightRed'>
				{' '}
				Featured Articles{' '}
			</h3>

			<div className='flex flex-col md:flex md:flex-row space-x-10'>
				{mainPosts.map((cur) => (
					<CardList key={cur._id} post={cur} />
				))}
			</div>

			<div>
				<Link to='/posts'>
					<button className='m-5 p-3 font-bold bg-black text-white hover:bg-veryLightBrown hover:text-black'>
						View Older Posts
					</button>
				</Link>
			</div>
		</div>
	);
};

export default FeaturedCard;
