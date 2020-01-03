import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import './Parts.css';
import researchEntries from './ResearchEntries';
import './ResearchEntry.css';

const Intro = () => {
	return (
		<Card>
			<CardBody>
				<CardTitle>
					<strong>About Me</strong>
				</CardTitle>
				<CardText className="cards-text">
					<p>
						I'm a PhD student at{' '}
						<a href="https://pwr.edu.pl/en/">
							Wrocław University of Science and Technology
						</a>{' '}
						in Poland at the Technical Informatics and Telecommunications
						Institute. I'm supervised by{' '}
						<a href="http://www.kajdanowicz.com/">
							Dr Tomasz Kajdanowicz
						</a>{' '}
						with cosupervision of{' '}
						<a href="https://www.ii.pwr.edu.pl/~zieba/">Dr Maciej Zięba</a>.
					</p>
					<p>
						My thesis revolves around the combination of computer graphics and
						machine learning. Specifically, the reconstruction of 3D meshes
						using neural networks. My primary goal is to create a method that
						is capable of reconstructing these meshes in an unsupervised manner
						of all objects in the scene that generalizes well to other unknown
						objects.
					</p>
					<p>
						My BSc thesis focused on an automatic American Sign Language
						fingerspelling recognition, and the MSc thesis - on parallelizing
						selective attention in neural networks.
					</p>
				</CardText>
			</CardBody>
		</Card>
	);
};

const News = () => {
	return (
		<Card>
			<CardBody>
				<CardTitle>
					<strong>News</strong>
				</CardTitle>
				<CardText className="cards-text">
					<p>
						26/10/2019 - I had an opportunity to be present and meet many
						interesting people at ICCV conference in Seoul.
					</p>
					<p>
						01/10/2019 - I officially started PhD at Wrocław University Of
						Science and Technology!
					</p>
				</CardText>
			</CardBody>
		</Card>
	);
};

const Research = () => {
	const entries = [];
	researchEntries.forEach((entry) => {
		entries.push(<hr className="research-entry-delimiter" />);
		entries.push(entry);
	});
	entries.push(<hr className="research-entry-delimiter" />);
	return (
		<Card>
			<CardBody>
				<CardTitle>
					<strong>Research</strong>
				</CardTitle>
				<CardText>{entries}</CardText>
			</CardBody>
			<CardText className="cards-text" />
		</Card>
	);
};

export { Intro, News, Research };
