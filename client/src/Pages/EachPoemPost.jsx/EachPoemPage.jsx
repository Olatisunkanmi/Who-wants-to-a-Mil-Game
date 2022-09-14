import React from 'react';
import { AllPoemsCard } from '../../Component/Index';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Poems = () => {
	const [poemPosts, setPoemPosts] = useState([]);

	useEffect(() => {
		const poemPosts = async () => {
			const poemPosts = await axios.get(
				'https://crackedinkv2.herokuapp.com/api/v2/posts/poems/',
			);

			setPoemPosts(poemPosts.data.data);
		};
		poemPosts();
	});

	return (
		<div className='  lg:w-3/5 m-auto mt-10 space-y-8'>
			{poemPosts.map((cur) => (
				<AllPoemsCard key={cur._id} post={cur} />
			))}
		</div>
	);
};

export default Poems;
