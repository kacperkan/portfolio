import React from 'react';
import ResearchEntry from './ResearchEntry';

const Link = (props) => {
	return <a href={props.href}>{props.text}</a>;
};

const entries = [
	<ResearchEntry
		imgPath="/assets/images/sign-language/asl.png"
		title="American Sign Language Fingerspelling Recognition Using Wide Residual Networks"
		authors={[ 'Kacper Kania', 'Urszula Markowska-Kaczmar' ]}
		additionalInfo={[
			'Published at the ',
			<Link
				href="https://link.springer.com/chapter/10.1007/978-3-319-91253-0_10"
				text="ICAISC 2018"
			/>,
			' conference.'
		]}
		links={[ <Link href="/assets/bibtexs/asl.bib" text="Bibtex" /> ]}
	/>
];
export default entries;
