import React from 'react';
import { Link } from 'react-router-dom';

const ArchivesCard = ({ post }) => {
	// console.log(post);
	console.log(post);

	return (
		<div className='flex flex-col '>
			<Link
				to='/posts'
				className=' text-center flex md:flex-row space-x-7 mt-10 font-thin Phil text-xl border-b-2 border-stone-600 p-3'
			>
				<p className=''>
					<span className='hidden md:block'> day</span>{' '}
					<span> {post._id}</span> :
				</p>
				<p className=''>{post.title}</p>
			</Link>
		</div>
	);
};

export default ArchivesCard;
