import { MJMLElement } from 'mjml-core';
import MJMLText from 'mjml-text';
import MJMLColumn from 'mjml-column';
import MJMLSection from 'mjml-section';
import React, { Component } from 'react'

import cleanContent from '../../helpers/cleanContent';

const tagName = 'hele-text';
const defaultMJMLDefinition = {};
const endingTag = true;
const columnElement = false;
const baseStyles = {};

const postRender = $ => {
	$('[data-hele-text-content] a').attr('style', 'color: #41b79d; text-decoration: underline;');
	return $;
};

@MJMLElement
class HeleText extends Component {

	render() {
		const { mjContent } = this.props;

		const content = cleanContent(mjContent());

		return (
			<MJMLSection parentWidth={this.props.parentWidth} padding="0 10px">
				<MJMLColumn width="100%">
					<MJMLText
						color="#3a3a3a"
						font-family="Helvetica, Arial, sans-serif"
						font-size="16px"
						font-weight="normal"
						padding="0 0 20px"
					>
						<span
							data-hele-text-content
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					</MJMLText>
				</MJMLColumn>
			</MJMLSection>
		)
	}
}

HeleText.tagName = tagName;
HeleText.defaultMJMLDefinition = defaultMJMLDefinition;
HeleText.endingTag = endingTag;
HeleText.columnElement = columnElement;
HeleText.baseStyles = baseStyles;
HeleText.postRender = postRender;

export default HeleText;
