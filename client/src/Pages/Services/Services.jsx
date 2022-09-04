import {
	ArrowRight,
	GitHub,
	Instagram,
	LinkedIn,
	MailOutline,
	Twitter,
	Mail,
	Edit,
} from '@material-ui/icons';
import img1 from '../../Assests/ser.jpeg';
import { useState } from 'react';
import React from 'react';
import '../../App.css';

const Services = () => {
	const [contactMe, setContactMe] = useState(true);
	console.log(contactMe);
	return (
		<div>
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
				<div className='flex flex-col lg:flex-row justify-around mt-10'>
					{/**  Upper imges */}
					<div className=' md:hidden m-auto '>
						<img
							src={img1}
							alt=''
							className='rounded-full h-52 w-52 object-cover'
						/>
					</div>
					{/**!//!  Upper imges  --- B */}
					<div className='p-10 hidden md:w-full lg:hidden md:flex flex-col mt-10 space-y-5'>
						<img src={img1} alt='' className='w-full object-cover' />
					</div>
					<div className='w-full p-5 text-lg lg:w-3/6 flex flex-col mt-10 space-y-5'>
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
						<div className='p-5  xl:w-2/6  bg-veryLightBrown rounded-xl'>
							<div
								className='flex flex-row justify-center items-center  text-md font-serif'
								onClick={() =>
									setContactMe((prevcontactMe) => !prevcontactMe)
								}
							>
								<button>Send me a Mail.</button>
								<Mail />
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
					{contactMe ? (
						<div
							className={` hidden lg:w-3/6  lg:flex flex-col mt-10 space-y-5 
                        `}
						>
							<img
								src={img1}
								alt=''
								className='w-full object-cover'
							/>
						</div>
					) : (
						<div className=' hidden lg:w-3/6  lg:flex flex-col mt-10 space-y-5'>
							<div className='flex flex-col'>
								<p className='Phil text-3xl text-black font-semibold'>
									{' '}
									Contact{' '}
								</p>

								<div className='mt-10 w-full space-y-5'>
									<input
										type='text'
										placeholder=' Enter First Name'
										className=' border-b-black border-b-2 outline-none w-full p-3 bg-inherit
                                        placeholder:text-md placeholder:text-slate-600 font-semibold'
									/>

									<input
										type='text'
										placeholder=' Enter Last Name'
										className=' border-b-black border-b-2 outline-none w-full p-3 bg-inherit
                                        placeholder:text-md placeholder:text-slate-600 font-semibold'
									/>

									<input
										type='text'
										placeholder=' Enter Email Add..'
										className=' border-b-black border-b-2 outline-none w-full p-3 bg-inherit
                                        placeholder:text-md placeholder:text-slate-600 font-semibold'
									/>

									<textarea
										name=''
										id=''
										placeholder='Leave a Message.'
										className=' border-b-black border-b-2 outline-none w-full p-3 bg-inherit
                                        placeholder:text-md placeholder:text-slate-600 font-semibold'
										rows='5'
									></textarea>

									<div className=''>
										<button className='p-5 bg-black text-white rounded-lg '>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Services;
