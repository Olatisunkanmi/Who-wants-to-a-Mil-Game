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
	const [Allpost, setAllPost] = useState([]);
	const [newPost, setNewPost] = useState({});
	const [RandomPosts, setRandomPosts] = useState([]);
	const [RandomArr, setRandomArr] = useState([]);
	const [sideBar, setSideBar] = useState(false);
	useEffect(() => {
		const getDetails = async () => {
			const res = await axios.get(
				'https://cracked-ink-cv.herokuapp.com/api/posts',
			);
			setAllPost(res.data);
			setNewPost(res.data[res.data.length - 1]);
			setRandomArr(res.data);
			setRandomPosts(RandomArr.splice(0, 3));
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
				Allpost,
				setAllPost,
				newPost,
				setNewPost,
				RandomPosts,
				sideBar,
				setSideBar,
			}}
		>
			{children}
		</Context.Provider>
	);
};
