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
			username: user.username,
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
			navigate(
				`https://crackedinkv2.herokuapp.com/api/v2/posts/${res.data._id}`,
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className=' flex flex-row mt-10 justify-around m-auto'>
			<div className='w-2/6 border-4 border-stone-500 p-3 bg-white'>
				{file ? (
					<img className='' src={URL.createObjectURL(file)} alt='' />
				) : (
					<img src={upload} className=' ' alt='' />
				)}
			</div>

			<div className='w-3/6 p-5 bg-white '>
				<form className='space-y-20' onSubmit={HandleSubmit}>
					<div className=''>
						<label htmlFor='fileInput'>
							<i className=' bg-stone-500 writeIcon fas fa-plus'></i>
						</label>

						<input
							id='fileInput'
							type='file'
							style={{ display: 'none' }}
							onChange={(e) => setFile(e.target.files[0])}
						/>

						<input
							className='p-5 outline-none border-b-black border-b-2 placeholder:font-semibold placeholder:text-black'
							placeholder='Title'
							type='text'
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className=''>
						<textarea
							className='p-5 outline-none border-b-black border-b-2 placeholder:font-semibold placeholder:text-black'
							placeholder='Tell your story...'
							type='text'
							onChange={(e) => setDesc(e.target.value)}
						/>
					</div>

					<select className='p-3 text-black font-bold bg-veryLightBrown rounded '>
						<option selected> MAIN </option>
						<option> JUNK </option>
						<option> POEM </option>
					</select>

					<button
						className='p-3 ml-5 text-black font-bold bg-veryLightBrown rounded '
						type='submit'
					>
						Publish
					</button>
				</form>
			</div>
		</div>
	);
}
