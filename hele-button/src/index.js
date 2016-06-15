import { MJMLElement } from 'mjml-core';
import MJMLButton from 'mjml-button';
import React, { Component } from 'react';

const tagName = 'hele-button';
const endingTag = true;
const columnElement = false;

const defaultMJMLDefinition = { };

const baseStyles = { };

@MJMLElement
class HeleButton extends Component {
  render () {
    const { mjContent } = this.props;

    return (
      <MJMLButton
        background-color="#41b79d"
        color="white"
        border-radius="0"
        padding="7px 5px"
        align="middle"
        container-background-color="#41b79d"
        font-size="14px"
        font-weight="600"
        font-family="Arial, Helvetica, sans-serif"
      >
        <span
          style={{ textTransform: 'uppercase' }}
          dangerouslySetInnerHTML={{ __html: mjContent() }}
        />
      </MJMLButton>
    )
  }
}

HeleButton.tagName = tagName;
HeleButton.defaultMJMLDefinition = defaultMJMLDefinition;
HeleButton.endingTag = endingTag;
HeleButton.columnElement = columnElement;
HeleButton.baseStyles = baseStyles;

export default HeleButton;

