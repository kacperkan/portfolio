import React from 'react';
import { Container, Row, Col, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faGoogle,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Link = (props) => {
	return (
		<li>
			<div>
				<div className="icon-wrapper">
					<FontAwesomeIcon icon={props.icon} className="icon" />
				</div>
				<a
					href={props.link}
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					{props.text}
				</a>
			</div>
		</li>
	);
};

const Sidebar = () => {
	return (
		<Container fluid>
			<Row>
				<Col
					xs={{ size: 6, offset: 3 }}
					sm={{ size: 6, offset: 3 }}
					md={{ size: 12, offset: 0 }}
					style={{ textAlign: 'center' }}
				>
					<img src="/photo.png" alt="ME" width="100%" />
				</Col>
			</Row>
			<Row>
				<Col md="12" style={{ textAlign: 'left' }}>
					<CardBody>
						<ul
							style={{
								listStyleType: 'none',
								padding: 0
							}}
						>
							<Link
								icon={faGithub}
								link="https://github.com/kacperkan"
								text="github.com/kacperkan"
							/>
							<Link
								icon={faGoogle}
								link="https://scholar.google.com/citations?user=1wHZ-XcAAAAJ"
								text="1wHZ-XcAAAAJ"
							/>
							<Link
								icon={faLinkedin}
								link="https://www.linkedin.com/in/kacperkania/"
								text="linkedin.com/in/kacperkania/"
							/>
							<Link
								icon={faEnvelope}
								link="mailto:kacper.kania@pwr.edu.pl"
								text="kacper.kania@pwr.edu.pl"
							/>
							<Link icon={faFilePdf} link="/Kacper_Kania_CV.pdf" text="CV" />
						</ul>
					</CardBody>
				</Col>
			</Row>
		</Container>
	);
};

export default Sidebar;
