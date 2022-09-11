import React from 'react';
import { Share } from '@material-ui/icons';

const CommentSection = () => {
	return (
		<div>
			{/**Comment section */}

			<div className='flex flex-col md:flex-row text-left  mb-5 max-h-96'>
				<div className='bg-stone-500 p-5 flex-wrap w-full md:w-2/6 space-y-2'>
					<h3 className='post--comment--header text-white font-bold'>
						Leave a Reply
					</h3>

					<form className='flex flex-col space-y-10 '>
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
							>
								Post Comment
							</button>
							<Share />
						</div>
					</form>
				</div>

				<div className='bg-stone-300 w-full p-5 md:w-4/6 '>
					<h3 className='text-brightRed font-bold text-xl font-mono'>
						Comments Sections
					</h3>

					<div className='mt-4 overflow-y-auto space-y-3 h-4/5'>
						<div>
							<p className='text-lg font-bold'> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentSection;
