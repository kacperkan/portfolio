import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';

const UnderConstruction = (props) => {
	return (
		<Card body inverse color="info">
			<CardTitle>
				<strong>Site under construction</strong>
			</CardTitle>
			<CardText>More information will be added in the meantime.</CardText>
		</Card>
	);
};

export default UnderConstruction;
