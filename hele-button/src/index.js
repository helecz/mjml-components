import { MJMLElement } from 'mjml-core';
import merge from 'lodash/merge';
import MJMLButton from 'mjml-button';
import React, { Component } from 'react';

const tagName = 'hele-button';
const endingTag = false;
const columnElement = false;

const defaultMJMLDefinition = {
  attributes: {
    'color': '#41b79d',
    'font-family': 'Helvetica',
    'margin-top': '10px'
  }
};

const baseStyles = {
  div: {
    cursor: 'auto'
  }
};

@MJMLElement
class HeleButton extends Component {


  getStyles () {
    const { mjAttribute, color } = this.props;

    return merge({}, this.constructor.baseStyles, {
      text: {
        color: mjAttribute('color')
      }
    })
  }

  render () {
    const css = this.getStyles();
    const content = 'Hello World!';

    return (
      <MJMLButton style={css}>
        {content}
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

