import { MJMLElement } from 'mjml-core';
import MJMLImage from 'mjml-image';
import MJMLSection from 'mjml-section';
import MJMLColumn from 'mjml-column';
import React, { Component, PropTypes } from 'react';

const tagName = 'hele-logo';
const endingTag = false;
const columnElement = false;

const defaultMJMLDefinition = {};
const baseStyles = {};

@MJMLElement
class HeleLogo extends Component {

  static propTypes = {
    parentWidth: PropTypes.string.isRequired,
  };

  render() {
    return (
      <MJMLSection parentWidth={this.props.parentWidth}>
        <MJMLColumn width="100%">
          <MJMLImage
            src="{$bubbleLogoLink|noescape}"
            href="{$linkGenerator->generateFrontLink()|noescape}"
            padding="10"
            alt=""
            width="78"
          />
        </MJMLColumn>
      </MJMLSection>
    );
  }
}

HeleLogo.tagName = tagName;
HeleLogo.defaultMJMLDefinition = defaultMJMLDefinition;
HeleLogo.endingTag = endingTag;
HeleLogo.columnElement = columnElement;
HeleLogo.baseStyles = baseStyles;

export default HeleLogo;

