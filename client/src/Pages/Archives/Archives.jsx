import React from 'react';
import { Context } from '../../Component/context/Context';
import { useContext } from 'react';
import { ArchivesCard } from '../../Component/Index';

const Archives = () => {
	const { junkPosts } = useContext(Context);
	// console.log(junkPosts);

	let queryObj = { ...junkPosts };

	return (
		<div>
			<p className='tracking-widest text-3xl font-thin'>Archives </p>
			<div>
				<div className=' lg:w-4/6 m-auto mt-20 space-y-3 flex justify-center text-center'>
					<p className='font-thin text-3xl  tracking-widest'> 2022</p>
				</div>
				<div className=' lg:w-4/6 m-auto mt-20 space-y-3 flex justify-center text-center'>
					<div>
						{junkPosts.map((cur) => (
							<ArchivesCard key={cur._id} post={cur} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Archives;
