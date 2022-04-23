import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import Types from "prop-types";
// import { render } from "@testing-library/react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const detailsBtn = {
	marginLeft: "20px",
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#5F9EA0',
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));
const User = (props) => {
	const { id, name, age, email, incrementAge } = props;


	const handleClick = useCallback(() => {
		incrementAge(id);
	}, [incrementAge, id]);
	return (
		<>
			<TableContainer component={Paper} className="container">
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>#</StyledTableCell>
							<StyledTableCell>Name</StyledTableCell>
							<StyledTableCell>Age</StyledTableCell>
							<StyledTableCell>Email</StyledTableCell>
							<StyledTableCell>Actions</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<StyledTableRow >
							<StyledTableCell component="th" scope="row">
								{id}
							</StyledTableCell>
							<StyledTableCell>{name}</StyledTableCell>
							<StyledTableCell>{age}</StyledTableCell>
							<StyledTableCell>{email}</StyledTableCell>
							<StyledTableCell><button onClick={handleClick} className="btn btn-primary">
								Increment Age
							</button>
								<Link to={`/users/${id}`}>
									<button className="btn btn-info" style={detailsBtn}>See Details</button>
								</Link></StyledTableCell>
						</StyledTableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};


User.propTypes = {
	id: Types.oneOfType([Types.number, Types.string]).isRequired,
	name: Types.string.isRequired,
	age: Types.number,
	email: Types.oneOfType([Types.number, Types.string]).isRequired,
	incrementAge: Types.func.isRequired,
};

User.defaultProps = {
	age: 18,
};

export default memo(User);
