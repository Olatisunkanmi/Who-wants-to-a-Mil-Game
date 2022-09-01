import {
	ArrowBack,
	ArrowRight,
	ArrowRightAlt,
	GitHub,
	Instagram,
	LinkedIn,
	MailOutline,
	Twitter,
	Mail,
	Edit,
} from '@material-ui/icons';
import img1 from '../../Assests/ser.jpeg';
import dev from '../../Assests/dev.png';
import React from 'react';
import '../../App.css';
import { Header, Topbar, Footer } from '../../Component/Index';

const Services = () => {
	return (
		<div>
			<Header />
			<Topbar />
			<div
				className='
                                flex flex-col
                                lg:w-4/6
                                m-auto'
			>
				{/** SErvices * */}

				<div className=' justify-center w-full text-center mt-20'>
					<p className='text-5xl font-semibold font-serif'>
						{' '}
						Services{' '}
					</p>
					<p className='services-tag'>
						{' '}
						Software Developer, Technical and Creative Writer.
					</p>
				</div>

				{/***  BIO    */}
				<div className='flex flex-col md:flex-row justify-around mt-10'>
					<div className='m-auto'>
						<img
							src={img1}
							alt=''
							className='rounded-full h-52 w-52 object-cover'
						/>
					</div>

					<div className='w-full p-5 text-lg md:w-3/6 flex flex-col mt-10 space-y-5'>
						<p className='Phil text-bold text-3xl '>
							{' '}
							<ArrowRight /> Me !{' '}
						</p>
						<p className=' leading-8'>
							Hi again, I am <strong>Olasukanmi,</strong> a JavaScript
							developer, intrested in building scalable and
							problem-solving webApps.
							<br />
							<br />
							In the fast evolving world we have found ourselves,
							writing hovever is my favourite thing to do. I enjoy
							writing articles because it allows me to learn, share my
							knowledge, and gain insights from my readers. I also
							enjoy writing articles that educate people, especially
							beginners, in my field of expertise and as I continue to
							learn. I enjoy writing articles because it allows me to
							learn, share my knowledge, and gain insights from my
							readers. I also enjoy writing articles that educate
							people, especially beginners, in my field of expertise
							and as I continue to learn.
						</p>

						{/**  SEND A MAIL  */}
						<div>
							<div className='p-5  xl:w-2/6  bg-veryLightBrown rounded-xl'>
								<button className='items-center text-md font-serif '>
									Send me a Mail. <Mail />
								</button>
							</div>
						</div>

						{/**  CONTACT LINKS  */}

						<div className='w-full text-left space-x-3 md:space-x-10 text-3xl'>
							<a
								href='https://github.com/Olatisunkanmi '
								target='_blank'
								rel='noreferrer'
							>
								<GitHub className='icons' />
							</a>

							<a
								href='https://instagram.com/olatisunkanmi__?igshid=YmMyMTA2M2Y='
								target='_blank'
								rel='noreferrer'
							>
								<Instagram className='icons' />
							</a>

							<a
								href='https://twitter.com/olatisunkanmi_ '
								target='_blank'
								rel='noreferrer'
							>
								<Twitter className='icons' />
							</a>

							<a
								href='https://www.linkedin.com/in/olasunkanmi-igbasan-591447223/ '
								target='_blank'
								rel='noreferrer'
							>
								<LinkedIn className='icons' />
							</a>

							<a
								href='https://www.linkedin.com/in/olasunkanmi-igbasan-591447223/ '
								target='_blank'
								rel='noreferrer'
							>
								<Edit className='icons' />
							</a>

							<MailOutline className='icons ' />
						</div>
					</div>

					{/** IMAGEE  */}

					<div className=' hidden md:w-2/6 md:flex flex-col mt-10 space-y-5'>
						<img src={img1} alt='' className='w-full object-cover' />
					</div>
				</div>
			</div>

			<div className='mt-20'>
				<Footer />
			</div>
		</div>
	);
};

export default Services;
