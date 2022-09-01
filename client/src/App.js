import {
	CreativeWrite,
	Post,
	About,
	Login,
	Edit,
	NotFound,
	Write,
	Services,
	EachPosts,
	SideBar,
} from './Component/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './Component/context/Context';
import RequireAuth from './Hooks/RequireAuth';

function App() {
	return (
		<div>
			<div className='z-50'>
				<SideBar />
			</div>
			<BrowserRouter>
				<Routes>
					<Route path='*' element={<NotFound />} />

					<Route exact path='/' element={<About />} />
					<Route path='/home/' element={<CreativeWrite />} />
					<Route path='/posts/' element={<EachPosts />} />
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
		</div>
	);
}

export default App;
