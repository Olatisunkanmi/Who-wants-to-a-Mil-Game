import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FeaturedComments } from './Index';
import { Share } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';

const CommentSection = () => {
	const [comments, setComments] = useState([]);
	let location = useLocation();
	location = location.pathname.split('/')[2];
	// console.log(comments)
	let COMMENTERROR = false;

	useEffect(() => {
		const getComments = async () => {
			try {
				const res = await axios.get(
					`http://localhost:3500/api/v2/posts/${location}/comments/`,
				);
				console.log(res.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		getComments();
	});

	const postComment = async () => {
		const username = document.querySelector('#username');
		const comment = document.querySelector('#comment');

		if (username.value === '' || comment.value === '')
			COMMENTERROR = true;
		try {
			const res = await axios.post(
				`http://localhost:3500/api/v2/posts/${location}/comments/`,
				{
					username: username.value,
					comment: comment.value,
				},
			);
			console.log(res.data.data);
			setComments(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	// {comments.map((cur) => (
	// 	<FeaturedComments key={cur._id} post={cur} />
	// ))}

	return (
		<div>
			{/**Comment section */}

			<div className='flex flex-col md:flex-row text-left  mb-5 max-h-96'>
				<div className='bg-stone-500 p-5 flex-wrap w-full md:w-2/6 space-y-2'>
					<h3 className='post--comment--header text-white font-bold'>
						Leave a Reply
					</h3>

					<div className='flex flex-col space-y-10 '>
						<input
							type='text'
							id='username'
							required
							placeholder='Your Name'
							className='
                                                                   bg-black
                                                                   p-3
                                                                   text-white
                                                                   placeholder:text-brightRed'
						/>

						<textarea
							id='comment'
							className='bg-black p-2 
                                                                    text-white
                                                                    placeholder:text-brightRed'
							required
							name=''
							placeholder='Write A comment'
						></textarea>

						<div>
							<button
								className='p-3 font-bold  bg-black text-brightRed  
                                                    hover:bg-veryLightBrown hover:text-black'
								onClick={postComment}
							>
								Post Comment
							</button>
							<Share />
						</div>
					</div>
				</div>

				<div className='bg-stone-300 w-full p-5 md:w-4/6 '>
					<h3 className='text-brightRed font-bold text-xl font-mono'>
						Comments Sections
					</h3>

					<div className='mt-4 overflow-y-auto space-y-3 h-4/5'></div>
				</div>
			</div>
		</div>
	);
};

export default CommentSection;
