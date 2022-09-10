import { AllPostsCard } from '../Index';
import { useContext } from 'react';
import { Context } from '../context/Context';

const Posts = () => {
	const { mainPosts } = useContext(Context);

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
