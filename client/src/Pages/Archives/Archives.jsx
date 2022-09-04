import React from 'react';
import { Link } from 'react-router-dom';

const Archives = () => {
	return (
		<div>
			<div className=' lg:w-4/6 m-auto mt-20 space-y-3 md:flex md:justify-center md:text-center'>
				<div className='flex flex-col '>
					<p className='tracking-widest text-3xl font-thin'>
						Archives{' '}
					</p>
					<p className='font-thin text-3xl  tracking-widest'> 2022</p>
					<Link
						to='/posts'
						className=' text-center flex md:flex-row space-x-7 mt-10 font-thin Phil text-xl border-b-2 border-stone-600 p-2'
					>
						<p className=''>
							{' '}
							day <span> 199</span> :
						</p>
						<p className=''>What to Do When You’re Feeling Drained</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Archives;
