import React from 'react';
import { Col } from 'reactstrap';
import './Main.css';
import { Intro, News, Research } from './MainSite/Parts';

const Main = () => {
	return (
		<Col>
			<Intro />
			<br />
			<News />
			<br />
			<Research />
		</Col>
	);
};

export default Main;
