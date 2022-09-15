import { useAuth } from '../Hooks/useAuth';
import '../App.css';
import {
	EditOutlined,
	Book,
	AccessTimeOutlined,
	Person,
	CommentOutlined,
} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CommentSection } from './Index';
// import { Comment, MenuBook, Person, Timer } from '@material-ui/icons';

const SinglePost = () => {
	const [SinglePost, setSinglePost] = useState('');
	const location = useLocation().pathname.split('/')[2];

	// getting the Id of the post
	//    so all post and open on a new page in repect to their ids
	useEffect(() => {
		const getSinglePost = async () => {
			const res = await axios.get(
				`https://cracked-ink-cv.herokuapp.com/api/posts/${location}`,
			);

			setSinglePost(res.data);
			console.log(res.data);
			// setComments(SinglePost.comments)
		};

		getSinglePost();
	});

	const { user } = useAuth();
	const PF = 'https://crackedinkv2.herokuapp.com/images/';
	const [updatemode, setUpdateMode] = useState(false);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const handleUpdate = async () => {
		try {
			await axios.put(`/posts/${SinglePost._id}`, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (error) {}
	};

	return (
		<div>
			{/**!	HEADER		 */}
			<div className='text-center flex flex-col  items-center p-6 m-10'>
				{updatemode ? (
					<input
						type='text'
						value={SinglePost.title}
						className=''
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<p className=' text-6xl text-black font-semibold tracking-wide Phil	'>
						{SinglePost.title}
					</p>
				)}

				<div className='mt-7 flex flex-col items-center w-full'>
					<div className='flex flex-row mt-10 items-center w-full  justify-center space-x-1'>
						<Book className='writer-icon' />
						<p className='uppercase colour writer'> lifeStyle </p>
					</div>
					<div className='flex flex-row mt-5 items-center w-full right-10 justify-center space-x-5'>
						<Link
							to='/services'
							className='flex flex-row  items-center space-x-1'
						>
							<Person className='writer-icon' />

							<p className='writer colour'>Igbasan Olasunkanmi</p>
						</Link>

						<div className='hidden md:flex flex-row  items-center space-x-1'>
							<AccessTimeOutlined className='writer-icon' />
							<p className=' writer colour'>
								{new Date(SinglePost.createdAt).toDateString()}
							</p>
						</div>

						<div className='hidden md:flex flex-row items-center space-x-1'>
							<CommentOutlined className='writer-icon' />
							<p className='writer colour'> 99 Comments</p>
						</div>
					</div>

					{user && (
						<button
							className='widgetSmButton'
							onClick={() => setUpdateMode(true)}
						>
							<EditOutlined />
						</button>
					)}
				</div>

				<div className='m-10'>
					<img
						src={PF + SinglePost.photo}
						alt=''
						className='w-full md:w-2/4 
											text-center justify-center align-center object-cover'
					/>
				</div>
				<hr className='w-1/2  mt-10 border-2 border-veryLightBrown' />
			</div>

			<div className='text-left flex justify-center p-2 m-2 -mt-7'>
				<div className='w-full md:w-2/3 leading-9 text-1xl md:text-xl font-serif'>
					{updatemode ? (
						<textarea
							className='w-full h-full'
							value={SinglePost.desc}
							onChange={(e) => setDesc(e.target.value)}
						/>
					) : (
						<p className='first-letter:ml-6 first-letter:text-4xl leading-loose'>
							{SinglePost.desc}
						</p>
					)}

					{updatemode && (
						<button
							className='p-3 font-bold  bg-black text-brightRed  
                                                hover:bg-veryLightBrown hover:text-black'
							onClick={handleUpdate}
						>
							Update
						</button>
					)}
				</div>
			</div>

			<hr className='w-1/2  my-10 border-2 border-veryLightBrown m-auto' />
			<div className='w-3/5 m-auto'>
				<CommentSection />
			</div>
		</div>
	);
};

export default SinglePost;
