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

	useEffect(() => {
		const getDetails = async () => {
			const mainPosts = await axios.get(
				'http://localhost:3500/api/v2/posts/main/',
			);
			const junkPosts = await axios.get(
				'http://localhost:3500/api/v2/posts/junk/',
			);
			const poemPosts = await axios.get(
				'http://localhost:3500/api/v2/posts/poems/',
			);

			setMainPosts(mainPosts.data.data);
			setJunkPosts(junkPosts.data.data);
			setPoemPosts(poemPosts.data.data);
		};
		getDetails();
	}, [RandomArr]);

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
