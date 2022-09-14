import React from 'react';

const FeaturedComments = ({ post }) => {
	console.log(post);
	return (
		<div>
			<div className='p-5 bg-white'>{post}</div>
		</div>
	);
};

export default FeaturedComments;
