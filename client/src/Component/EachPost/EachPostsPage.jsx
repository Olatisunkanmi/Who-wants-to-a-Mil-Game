import { AllPostsCard } from '../Index';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
	const [mainPosts, setMainPosts] = useState([]);

	useEffect(() => {
		const mainPosts = async () => {
			const mainPosts = await axios.get(
				'https://crackedinkv2.herokuapp.com/api/v2/posts/main/',
			);
			setMainPosts(mainPosts.data.data);
		};
		mainPosts();
	});

	return (
		<div>
			<div className='w-11/12 flex flex-col items-center lg:flex-row m-auto md:flex-wrap lg:w-4/6'>
				{mainPosts.map((cur) => (
					<AllPostsCard key={cur._id} post={cur} />
				))}
			</div>
		</div>
	);
};

export default Posts;
