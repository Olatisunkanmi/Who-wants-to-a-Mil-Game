import {
	createContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import Reducer from './Reducer';
import axios from 'axios';

// user :null here because no user until login.
const INITIAL_STATE = {
	// User is set to either "null" when empty or the user data sent to local storage
	// so user details can always be avaliable before login
	user: JSON.parse(localStorage.getItem('user')) || null,
	isFetching: false,
	error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
	const [sideBar, setSideBar] = useState(false);
	const [junkPosts, setJunkPosts] = useState([]);
	const [mainPosts, setMainPosts] = useState([]);
	const [poemPosts, setPoemPosts] = useState([]);

	// useEffect(() => {
	// 	const poemPosts = async () => {
	// 		const poemPosts = await axios.get(
	// 			'http://localhost:3500/api/v2/posts/poems/',
	// 		);
	// 		setPoemPosts(poemPosts.data.data);
	// 	};
	// 	poemPosts();
	// });

	useEffect(() => {
		const mainPosts = async () => {
			const mainPosts = await axios.get(
				'http://localhost:3500/api/v2/posts/main/',
			);
			setMainPosts(mainPosts.data.data);
		};
		mainPosts();
	});

	// useEffect(() => {
	// 	const junkPosts = async () => {
	// 		const junkPosts = await axios.get(
	// 			'http://localhost:3500/api/v2/posts/junk/',
	// 		);
	// 		setJunkPosts(junkPosts.data.data);
	// 		console.log(junkPosts.data.data);
	// 	};
	// 	junkPosts();
	// });

	// this UseEffect fn is started when there is change to our user
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user));
	});

	return (
		<Context.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
				junkPosts,
				mainPosts,
				poemPosts,
				sideBar,
				setSideBar,
			}}
		>
			{children}
		</Context.Provider>
	);
};
