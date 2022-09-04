import { Header, Topbar, Footer } from '../../Component/Index';
const NotFound = () => {
	return (
		<div className=''>
			<Header />
			<Topbar />

			{/** 404 Page  */}

			<div className=' justify-center my-20 w-full text-center space-y-10 md:my-40'>
				<p className='text-6xl lg:text-8xl font-semibold font-serif'>
					404
				</p>
				<p className='Phil text-5xl font-semibold text-veryLightBrown'>
					Page Not Found
				</p>

				<div className='text-center space-y-10 p-5'>
					<p className='text-xl font-serif '>
						The page you have requested for is <strong> NOT </strong>
						available
					</p>
					<p className='text-xl font-serif '>
						Would you like us to take you
						<a href='/home' className='font-semibold'>
							{' '}
							HOME{' '}
						</a>{' '}
						?
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
