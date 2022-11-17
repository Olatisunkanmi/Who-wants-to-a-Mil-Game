import '../../App.css';
import { Link } from 'react-router-dom';
import profileImage from '../../Assests/sk.jpg';

const About = () => {
	return (
		<div>
			<div>
				<div className='text-center my-5'>
					<h3 className='about'> About Me .</h3>
				</div>

				<div className='flex flex-col -mt-5 w-full md:flex-row m-auto items-center justify-around '>
					<div className='md:w-2/5 m-auto justify-end flex'>
						<img
							src={profileImage}
							alt=''
							className=' md:w-4/6 rounded-lg '
						/>
					</div>

					<div className=' w-full md:w-3/5 p-10 flex flex-col'>
						<div className='mt-5 max-w-2xl '>
							<p className='font-mono text-md xl:text-xl leading-normal'>
								Hello there and Welcome to my blog. <br />
								My name is{' '}
								<span className='font-bold text-black text-1xl'>
									Olasunkanmi.{' '}
								</span>
								I am a <strong>JavaScript Full-Stack </strong>{' '}
								Developer as well as a Creative Writer. Before I tell
								you about myself, something occurred to me recently
								and I would like to tell you about it
								<br />
								<br />
								It was past midnight, 1:30 AM to be exact. Sitting
								across from me on the glass-topped dining table was my
								brother-in-law. We'd been up all night while he tested
								a company's security system for vulnerabilities. I sat
								across from him, juggling between codes and coffee.
								Right there, I saw a reflection of myself !! . In a
								few years, that would still be me staying up all night
								again, A father and Husband (probably ) but older for
								sure.
								<br />
								We are frequently so fixated on who we want to be that
								we lose sight of practically everything else. Like
								people who would always admire us for who we are,those
								who would make sure we never have as much as a scowl
								on our face. It was then that I decided to start a
								blog. "My own corner," I murmured to myself. A place
								where I can simply appreciate and ponder on everything
								around me.
							</p>
						</div>

						<div>
							<Link
								to='/https://olatisun-1668675467323.hashnode.dev/'
								className='link'
							>
								<button className='mt-10 border-4 p-3 bg-veryLightBrown rounded-lg font-bold'>
									Go To Blog{' '}
								</button>
							</Link>

							<p className='font-mono text-xl leading-relaxed'>
								Enough With the boring stuffs, I promise you are going
								to love it there.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
