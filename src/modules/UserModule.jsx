import {
	useState,
	useEffect,
	useCallback,
	lazy,
	createContext,
	useMemo,
} from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";

const Users = lazy(() => import("../pages/Users"));
const AddUser = lazy(() => import("../pages/AddUser"));
const UserDetails = lazy(() => import("../pages/UserDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const UsersContext = createContext();

const UserModule = () => {
	const [users, setUsers] = useState(null);
	const [counter, setCounter] = useState(0);
	const [disabled, setDisabled] = useState(false);

	const incrementAge = useCallback((userId) => {
		setUsers((oldUsers) =>
			oldUsers.map((user) =>
				user.id === userId ? { ...user, age: user.age ? user.age + 1 : 19 } : user
			)
		);
	}, []);

	const addUser = useCallback((user) => {
		setUsers((oldUsers) => [
			{ ...user, age: +user.age, id: uuid() },
			...oldUsers,
		]);
		setCounter((oldCounter) => oldCounter + 1);
	}, []);

	useEffect(() => {
		if (counter > 2) setDisabled(true);
	}, [counter]);

	useEffect(() => {

		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
			setUsers(response.data);
		});
	}, []);

	const contextValue = useMemo(
		() => ({ incrementAge, counter, addUser, disabled, users }),
		[addUser, counter, disabled, incrementAge, users]
	);

	return (

		<UsersContext.Provider value={contextValue}>
			<Routes>
				<Route index element={<Users />} />
				<Route path="add" element={<AddUser />} />
				<Route path=":userId" element={<UserDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</UsersContext.Provider>
	);
};

export default UserModule;
