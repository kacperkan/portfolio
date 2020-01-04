import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import { Switch, Route, Link } from 'react-router-dom';
import UnderConstruction from './Auxiliary/UnderConstruction';
import {
	faHome,
	faGraduationCap,
	faNewspaper,
	faStickyNote
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuOption = (props) => {
	return (
		<Col className="menu-option">
			<Link to={props.link}>
				<div className="menu-icon-wrapper">
					<FontAwesomeIcon icon={props.icon} className="menu-icon" />
				</div>
				<div className="menu-icon-text">{props.text}</div>
			</Link>
		</Col>
	);
};

const Side = () => {
	return (
		<Col md={{ size: 2, offset: 1 }} style={{ padding: 0 }}>
			<Sidebar />
		</Col>
	);
};

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer>
			<hr style={{ marginTop: 0 }} />
			<Link to="/">© {year} Copyright: Kacper Kania</Link>
		</footer>
	);
};

const Navbar = () => {
	return (
		<Row>
			<Col md={{ size: 4, offset: 1 }} className="align-self-center">
				<Row>
					<Col>
						<h1>Kacper Kania</h1>
					</Col>
				</Row>
			</Col>
			<Col md={{ size: 5, offset: 1 }}>
				<Row>
					<MenuOption link="/" icon={faHome} text="Home" />
					<MenuOption
						link="/teaching"
						icon={faGraduationCap}
						text="Teaching"
					/>
					<MenuOption link="/news" icon={faStickyNote} text="News" />
					<MenuOption link="/articles" icon={faNewspaper} text="Articles" />
				</Row>
			</Col>
		</Row>
	);
};

const NavbarDelimiter = () => {
	return (
		<Row>
			<Col md={{ size: 10, offset: 1 }}>
				<hr />
			</Col>
		</Row>
	);
};

const RoutingBlock = () => {
	return (
		<Row>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/teaching" component={UnderConstruction} />
				<Route path="/news" component={UnderConstruction} />
				<Route path="/articles" component={UnderConstruction} />
			</Switch>
		</Row>
	);
};

const MainBlock = () => {
	return (
		<Col md={{ size: 6 }}>
			<Container>
				<Navbar />
				<NavbarDelimiter />
				<RoutingBlock />
			</Container>
		</Col>
	);
};

const App = () => {
	return (
		<React.Fragment>
			<div className="wrapper">
				<Container fluid>
					<Row>
						<Side />
						<MainBlock />
					</Row>
				</Container>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default App;
