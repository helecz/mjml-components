import { MJMLElement } from 'mjml-core';
import MJMLText from 'mjml-text';
import MJMLColumn from 'mjml-column';
import MJMLSection from 'mjml-section';
import React, { Component, PropTypes } from 'react';

import cleanContent from '../../helpers/cleanContent';

const tagName = 'hele-heading';
const defaultMJMLDefinition = {};
const endingTag = true;
const columnElement = false;
const baseStyles = {};

@MJMLElement
class HeleHeading extends Component {

  static propTypes = {
    parentWidth: PropTypes.string.isRequired,
    mjContent: PropTypes.func.isRequired,
  };

  render() {
    const { mjContent } = this.props;

    const content = cleanContent(mjContent());

    return (
      <MJMLSection parentWidth={this.props.parentWidth} padding="0 10px">
        <MJMLColumn width="100%">
          <MJMLText
            color="#000000"
            font-family="Helvetica, Arial, sans-serif"
            font-size="24px"
            font-weight="bold"
            padding="20px 0 10px"
          >
            {content}
          </MJMLText>
        </MJMLColumn>
      </MJMLSection>
    );
  }
}

HeleHeading.tagName = tagName;
HeleHeading.defaultMJMLDefinition = defaultMJMLDefinition;
HeleHeading.endingTag = endingTag;
HeleHeading.columnElement = columnElement;
HeleHeading.baseStyles = baseStyles;

export default HeleHeading;
