import { useAuth } from '../Hooks/useAuth';
import '../App.css';
import { EditOutlined } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
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
			console.log(res);
		};
		getSinglePost();
	});

	const { user } = useAuth();
	const PF = 'https://cracked-ink-cv.herokuapp.com/images/';
	const [cat, setCats] = useState([]);
	const [updatemode, setUpdateMode] = useState(false);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [comments, setComments] = useState([]);

	// console.log(comments)
	let COMMENTERROR = false;
	const getCats = async () => {
		// const res = await axios .get(`/posts`);
	};
	getCats();

	const handleUpdate = async () => {
		try {
			const res = await axios.put(`/posts/${SinglePost._id}`, {
				username: user.username,
				title,
				desc,
			});
			setUpdateMode(false);
		} catch (error) {}
	};

	const postComment = async () => {
		const username = document.querySelector('#username');
		const comment = document.querySelector('#comment');

		if (username.value === '' || comment.value === '')
			COMMENTERROR = true;

		try {
			const res = await axios.put(`/comment/${location}`, {
				username: username.value,
				comment: comment.value,
			});
			setComments(res.data.comments);

			try {
				username.value = ' ';
				comment.value = '';
			} catch (error) {}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<div className='text-center flex flex-col  items-center p-6 m-10'>
				<img
					src={PF + SinglePost.photo}
					alt=''
					className='w-full md:w-2/4 
                                        text-center justify-center align-center object-cover'
				/>
				'
				{updatemode ? (
					<input
						type='text'
						value={SinglePost.title}
						className=''
						onChange={(e) => setTitle(e.target.value)}
					/>
				) : (
					<p className='Phil mt-1 p-3 text-3xl md:text-5xl font-bold text-brightRed '>
						{' '}
						{SinglePost.title}{' '}
					</p>
				)}
				<div className='mt-1 flex flex-row space-x-3 items-center font-bold text-veryLightBrown  sp'>
					<p className='capitalize text-black text-lg'>
						{' '}
						{SinglePost.username}
					</p>
					<p className=''>
						{new Date(SinglePost.createdAt).toDateString()}
					</p>

					{user && (
						<button
							className='widgetSmButton'
							onClick={() => setUpdateMode(true)}
						>
							<EditOutlined />
						</button>
					)}
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
							{' '}
							{SinglePost.desc}{' '}
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
