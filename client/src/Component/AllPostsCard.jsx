import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {
	ArrowRightAlt,
	CommentOutlined,
	FavoriteBorderOutlined,
} from '@material-ui/icons';

const AllPostsCard = ({ post }) => {
	return (
		<div className='w-full'>
			<div className='flex flex-col md:flex-row justify-around text-center'>
				<div className='m-5 mb-2 '>
					<div className='bg-white p-5  relative text-left'>
						<h3 className='font-serif text-left  capitalize text-2xl tracking-wider font-semibold header'>
							<Link to={`/posts/${post._id}`}>{post.title}</Link>
						</h3>

						<div className='mb-7 h-1 bg-zinc-700 border-none w-8'></div>
						<p className='para'>{post.desc}</p>

						<div className='mt-5 Phil'>
							<Link to={`/posts/${post._id}`}>
								READ MORE
								<ArrowRightAlt className='' />
							</Link>

							<div className=' h-1 bg-zinc-700 border-none w-8'></div>

							<div className='space-x-5 mt-5'>
								<FavoriteBorderOutlined className='cursor-pointer' />
								<span>
									<CommentOutlined />{' '}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllPostsCard;
