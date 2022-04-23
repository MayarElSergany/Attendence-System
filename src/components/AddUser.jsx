import { useCallback, useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Classes from "../styles/AddUser.module.css";
import { UsersContext } from '../modules/UserModule';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddUser = () => {
	const { addUser, disabled } = useContext(UsersContext);
	const [user, setUser] = useState({ name: "", age: "" });
	const inputRef = useRef(null);
	const navigate = useNavigate();

	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		addUser(user);
		setUser({ name: "", age: "" });
		navigate('/users');
	}, [addUser, user, navigate]);

	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setUser((oldUser) => ({ ...oldUser, [name]: value }));
	}, []);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div>
			<h1>Add User</h1>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<TextField label="Enter Name:" variant="outlined" name="name" value={user.name} onChange={handleChange} className={Classes.input} /><br/><br/>
				<TextField label="Enter Age:" variant="outlined" name="age" value={user.age} onChange={handleChange} className={Classes.input} /><br/><br/>
				<TextField label="Enter Email:" variant="outlined" name="email" value={user.email} onChange={handleChange} className={Classes.input} /><br/><br/>
				<Button variant="contained" type="submit" value="Add User" disabled={disabled}>Add User</Button>
			</Box>
		</div>
	);
};

export default AddUser;
