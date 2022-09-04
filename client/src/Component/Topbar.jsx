import { LocalCafeOutlined } from '@material-ui/icons';

const Topbar = () => {
	return (
		<div className=''>
			<div
				className='
								hidden
                               
                                m-auto 
                                md:justify-around 
                                md:flex flex-row 
                                p-5 
                                mt-7 border-4 border-y-black
                                border-x-0'
			>
				<ul
					className='flex flex-row 
                                                        w-full
                                                        md:w-5/6 text-md  
                                                        text-center justify-between  '
				>
					<li>
						<a
							href='/home'
							className='font-serif cursor-pointer md:text-md
                                                font-semibold
                                                
                                                hover:text-veryLightBrown'
							rel='noreferrer'
						>
							{' '}
							Home{' '}
						</a>
					</li>

					<li>
						<a
							href='/posts'
							className='font-serif cursor-pointer md:text-md
                                                font-semibold
                                                hover:text-veryLightBrown'
							rel='noreferrer'
						>
							{' '}
							Write ups
						</a>
					</li>

					<li>
						<a
							href='/archives'
							className='font-serif cursor-pointer md:text-md
                                                font-semibold
                                                hover:text-veryLightBrown'
							rel='noreferrer'
						>
							Archives
						</a>
					</li>
					<li>
						<a
							href='/services'
							className='font-serif cursor-pointer md:text-md
                                                font-semibold
                                                hover:text-veryLightBrown'
							rel='noreferrer'
						>
							{' '}
							Services{' '}
						</a>
					</li>

					<li>
						<a
							href='https://www.buymeacoffee.com/olatisun'
							target='_blank'
							rel='noreferrer'
							className='font-serif cursor-pointer md:text-md
                                          font-bold
                                          text-brightRed'
						>
							{' '}
							Buy ME Coffee <LocalCafeOutlined />{' '}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Topbar;
