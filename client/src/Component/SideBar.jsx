import React from 'react';
import {
	ChatBubble,
	Email,
	Home,
	Close,
	Person,
	SearchRounded,
	LocalGroceryStore,
	Settings,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../App.css';
import { useContext } from 'react';
import { Context } from './context/Context';

const SideBar = () => {
	const { sideBar, setSidebar } = useContext(Context);
	console.log(sideBar);
	return (
		<div
			className={`relative z-50
        ${sideBar ? 'block' : 'hidden'}  `}
		>
			<p> HEllo World </p>
		</div>
	);
};

export default SideBar;
