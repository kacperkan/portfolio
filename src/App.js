import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

const App = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<React.Fragment>
			<Container fluid>
				<Row>
					<Col md={{ size: 2, offset: 1 }} style={{ padding: 0 }}>
						<Sidebar />
					</Col>
					<Col md={{ size: 6 }}>
						<Main />
					</Col>
				</Row>
				<footer>
					<hr style={{ marginTop: 0 }} />
					<a href="/">© {year} Copyright: Kacper Kania</a>
				</footer>
			</Container>
		</React.Fragment>
	);
};

export default App;
