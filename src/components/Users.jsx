import { useMemo, useContext } from "react";
import User from "./User";
import { UsersContext } from '../modules/UserModule';

const Users = () => {
	const { users, incrementAge} = useContext(UsersContext);

	const adults = useMemo(
		() =>
			users?.filter((u) => {
				return u.age > 18;
			}).length,
		[users]
	);

	return (
		<div>
			<div>Number of Adults: {adults}</div>
			{users ? (
				users.map((user) => (
					<User key={user.id} {...user} incrementAge={incrementAge} />
				))
			) : (
				<div>Loading....</div>
			)}
		</div>
	);
};

export default Users;
