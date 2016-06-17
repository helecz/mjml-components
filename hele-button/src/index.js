import { MJMLElement } from 'mjml-core';
import MJMLButton from 'mjml-button';
import MJMLColumn from 'mjml-column';
import MJMLSection from 'mjml-section';
import React, { Component } from 'react';

import cleanContent from '../../helpers/cleanContent';

const tagName = 'hele-button';
const endingTag = true;
const columnElement = false;

const defaultMJMLDefinition = {
	attributes: {
		'href': '',
		'full-width': false,
	},
};

const baseStyles = {};

@MJMLElement
class HeleButton extends Component {

	isFullWidth () {
		const { mjAttribute } = this.props;

		return mjAttribute('full-width') !== false;
	}

	render() {
		const { mjContent, mjAttribute } = this.props;

		const content = cleanContent(mjContent());

		const isFullWidth = this.isFullWidth();

		return (
			<MJMLSection
				parentWidth={this.props.parentWidth}
				padding="10px 10px"
				text-align={isFullWidth ? 'center' : 'left'}
			>
				<MJMLColumn
					width={isFullWidth ? '100%' : '300px'}
				>
					<MJMLButton
						background-color="#41b79d"
						color="white"
						border-radius="0"
						padding="7px 5px"
						align="center"
						container-background-color="#41b79d"
						font-size="14px"
						font-weight="600"
						font-family="Arial, Helvetica, sans-serif"
						href={mjAttribute('href')}
					>
						<span style={{ textTransform: 'uppercase' }}>
							{ content }
						</span>
					</MJMLButton>
				</MJMLColumn>
			</MJMLSection>
		)
	}
}

HeleButton.tagName = tagName;
HeleButton.defaultMJMLDefinition = defaultMJMLDefinition;
HeleButton.endingTag = endingTag;
HeleButton.columnElement = columnElement;
HeleButton.baseStyles = baseStyles;

export default HeleButton;

