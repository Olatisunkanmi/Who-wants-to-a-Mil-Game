import { useLocation, useNavigate } from 'react-router-dom';
import upload from '../../Assests/upload.svg';
import './Write.css';
import { useAuth } from '../../Hooks/useAuth';
import axios from 'axios';
import { useState } from 'react';

export default function Write() {
	let navigate = useNavigate();
	const { user } = useAuth();
	const [title, setTitle] = useState(' ');
	const [desc, setDesc] = useState(' ');
	const [file, setFile] = useState(null);

	const HandleSubmit = async (e) => {
		e.preventDefault();

		const newPost = {
			title: title,
			desc: desc,
		};

		if (file) {
			const data = new FormData();

			// prevent user from uploading diffrent images with same name
			const filename = Date.now() + file.name;
			console.log(filename);
			data.append('name', filename);
			data.append('file', file);
			newPost.photo = filename;

			console.log(typeof data);
			console.log(data);

			try {
				// upload Image
				const res = await axios.post(
					'http://localhost:3500/api/v2/upload',
				);
				console.log(res);
			} catch (error) {
				console.log(error);
			}
		} else {
			alert('Insert Umage ');
		}

		try {
			const res = await axios.post(
				'http://localhost:3500/api/v2/posts/',
				newPost,
			);

			// navigate(
			// 	`https://crackedinkv2.herokuapp.com/api/v2/posts/${res.data._id}`,
			// );
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='write'>
			{file ? (
				<img
					className='writeImg'
					src={URL.createObjectURL(file)}
					alt=''
				/>
			) : (
				<img src={upload} className='writeImg' alt='' />
			)}

			<form className='writeForm' onSubmit={HandleSubmit}>
				<div className='writeFormGroup'>
					<label htmlFor='fileInput'>
						<i className='writeIcon fas fa-plus'></i>
					</label>

					<input
						id='fileInput'
						type='file'
						style={{ display: 'none' }}
						onChange={(e) => setFile(e.target.files[0])}
					/>

					<input
						className='writeInput'
						placeholder='Title'
						type='text'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='writeFormGroup'>
					<textarea
						className='writeInput writeText'
						placeholder='Tell your story...'
						type='text'
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>

				<button className='writeSubmit' type='submit'>
					Publish
				</button>
			</form>
		</div>
	);
}
