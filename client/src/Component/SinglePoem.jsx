import { Person } from '@material-ui/icons';
import React from 'react';
import '../App.css';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Context } from './context/Context';
import { CommentSection } from './Index';

const SinglePoem = () => {
	const { poemPosts } = useContext(Context);
	const [updatemode, setUpdateMode] = useState(false);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [SinglePoem, setSinglePoem] = useState('');
	const [comments, setComments] = useState([]);

	let location = useLocation().pathname.split('/')[2];
	useEffect(() => {
		const PoemPosts = async () => {
			const poemPosts = await axios.get(
				`https://cracked-ink-cv.herokuapp.com/api/posts/${location}`,
			);
			// console.log(poemPosts.data);
			setSinglePoem(poemPosts.data);
		};
		PoemPosts();
	});

	return (
		<div className=' m-auto  md:mt-20'>
			<div className='mt-10 px-4 '>
				<div className='mb-10'>
					<p className=' text-left text-5xl Theme '>
						{' '}
						{SinglePoem.title}
					</p>
				</div>

				<Link to='/services' className=''>
					<Person className='writer-icon' />
					<p className='writer text-veryLightBrown'>
						{' '}
						Igbasan Olasunkanmi
					</p>
				</Link>

				<div className='mt-10 lg:w-1/2 text-left'>
					<p
						className=' 
                    text-lg
                    leading-loose  first-letter:text-xl '
					>
						{SinglePoem.desc}
					</p>
				</div>
			</div>
			<div className='mt-4 0'>
				<CommentSection />
			</div>
		</div>
	);
};

export default SinglePoem;
