import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
	faHome,
	faGraduationCap,
	faNewspaper,
	faStickyNote
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.css';
import { Intro, News, Research } from './MainSite/Parts';

const MenuOption = (props) => {
	return (
		<Col className="menu-option">
			<a href={props.link}>
				<div className="menu-icon-wrapper">
					<FontAwesomeIcon icon={props.icon} className="menu-icon" />
				</div>
				<div className="menu-icon-text">{props.text}</div>
			</a>
		</Col>
	);
};

const Main = () => {
	return (
		<Container>
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
						<MenuOption link="/" icon={faGraduationCap} text="Teaching" />
						<MenuOption link="/" icon={faStickyNote} text="News" />
						<MenuOption link="/" icon={faNewspaper} text="Articles" />
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md={{ size: 10, offset: 1 }}>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<Intro />
					<br />
					<News />
					<br />
					<Research />
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
