import React from 'react';
import { SinglePoem, AllPostsCard } from '../../Component/Index';
import { Context } from '../../Component/context/Context';
import { useContext } from 'react';
const Poems = () => {
	const { poemPosts } = useContext(Context);
	console.log(poemPosts);

	return (
		<div className='  lg:w-3/5 m-auto mt-10 space-y-8'>
			{poemPosts.map((cur) => (
				<AllPostsCard key={cur._id} post={cur} />
			))}
		</div>
	);
};

export default Poems;
