import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UsersContext } from '../modules/UserModule';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// const detailsDiv = {
// 	border: "2px solid #ADD8E6"
// }
const UserDetails = () => {
	const [user, setUser] = useState(null);
	const { users } = useContext(UsersContext);
	const { userId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const currentUser = users?.find((u) => u.id.toString() === userId.toString());
		if (users && !currentUser) navigate("/notfound");
		else if (currentUser) setUser(currentUser);
	}, [users, userId, navigate]);

	// return user ? <><div style={detailsDiv} className="container"><h3>Name: {user.name}</h3><br/> <h3>Username: {user.username} </h3><br/> <h3>Email: {user.email} </h3><br/> <h3>Phone: {user.phone} </h3><br/>
	return user ? <><div className="container">  <Card sx={{ maxWidth: 345 }}>
		<CardActionArea>
			<CardMedia
				component="img"
				height="300"
				image="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
				alt="user image"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{user.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{user.email} <br />
					As people become familiar with the personas, they start talking about them as if they were actual people. A well-constructed persona almost becomes another member of the team.
				</Typography>
			</CardContent>
		</CardActionArea>
	</Card><br />

	</div></> : <div>getting user ...</div>;
};

export default UserDetails;
