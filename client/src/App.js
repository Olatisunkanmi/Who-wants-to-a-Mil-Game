import {
	SideBar,
	EachPosts,
	Header,
	Topbar,
	Footer,
} from './Component/Index';
import {
	CreativeWrite,
	Post,
	About,
	Login,
	Edit,
	NotFound,
	Write,
	Archives,
	Services,
	EachPoem,
	Poems,
} from './Pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './Component/context/Context';
import RequireAuth from './Hooks/RequireAuth';

function App() {
	return (
		<div>
			<div className='z-50  w-1/2 '>
				<SideBar />
			</div>

			<div className=' lg:w-4/6 m-auto'>
				<Header />
				<Topbar />
			</div>

			<BrowserRouter>
				<Routes>
					<Route path='*' element={<NotFound />} />

					<Route exact path='/' element={<About />} />
					<Route path='/home/' element={<CreativeWrite />} />
					<Route path='/posts/' element={<EachPosts />} />
					<Route path='/archives/' element={<Archives />} />
					<Route path='/poems/' element={<EachPoem />} />
					<Route path='/poems/:Id' element={<Poems />} />
					<Route path='/posts/:Id' element={<Post />} />
					<Route path='/services' element={<Services />} />
					<Route path='/admin-login' element={<Login />} />
					<Route element={<RequireAuth />}>
						<Route path='/admin-login/edit' element={<Edit />} />
						<Route path='/admin-login/edit/:Id' element={<Write />} />
						<Route
							path='/admin-login/edit/adminwrite'
							element={<Write />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>

			<Footer />
		</div>
	);
}

export default App;
