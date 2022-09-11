import { Person } from '@material-ui/icons';
import React from 'react';
import '../App.css';

import { CommentSection } from './Index';

const SinglePoem = () => {
	return (
		<div className=' m-auto  md:mt-20'>
			<div className='mt-10 px-4 '>
				<p className=' text-left text-5xl Theme '> Welcome Home</p>
				<div className='my-5 '>
					<p className='text-xs ml-5 font-thin'>
						<Person className='writer-icon' />
						<span className='writer text-veryLightBrown'>
							{' '}
							Igbasan Olasunkanmi
						</span>
					</p>
				</div>
				<div className='mt-20 lg:w-1/2 text-left'>
					<p
						className=' 
                    text-lg
                    leading-loose  first-letter:text-xl '
					>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Veritatis maxime sed, dolorem repellendus exercitationem
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Veritatis maxime sed, dolorem repellendus
						<br />
						<br />
						exercitationemLorem ipsum dolor sit amet consectetur
						adipisicing elit. Veritatis maxime sed, dolorem
						repellendus exercitationemLorem ipsum dolor sit amet
						consectetur adipisicing elit. Veritatis maxime sed,
						dolorem repellendus
						<br />
						<br />
						exercitationemLorem ipsum dolor sit amet consectetur
						adipisicing elit. Veritatis maxime sed, dolorem
						repellendus exercitationem doloremque possimus impedit
						veniam libero hic similique cumque reiciendis voluptates
						ullam atque pariatur harum illo minima?
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
