import { MJMLElement } from 'mjml-core';
import MJMLImage from 'mjml-image';
import MJMLText from 'mjml-text';
import MJMLColumn from 'mjml-column';
import MJMLSection from 'mjml-section';
import React, { Component, PropTypes } from 'react';

const tagName = 'hele-offer';
const defaultMJMLDefinition = {
  attributes: {
    name: '',
    price: '',
    premise: '',
    imageSrc: '',
    href: '',
  },
};
const endingTag = false;
const columnElement = false;
const baseStyles = {};

const postRender = $ => {
  $('[data-hele-offer-container]').css('border', 'solid 1px #c5c5c5');
  return $;
};

@MJMLElement
class HeleOffer extends Component {

  static propTypes = {
    parentWidth: PropTypes.string.isRequired,
    mjAttribute: PropTypes.func.isRequired,
  };

  render() {
    const { mjAttribute } = this.props;

    const name = mjAttribute('name');
    const price = mjAttribute('price');
    const premise = mjAttribute('premise');
    const imageSrc = mjAttribute('imageSrc');
    const href = mjAttribute('href');

    return (
      <MJMLSection parentWidth={this.props.parentWidth} padding="0 10px 15px">
        <div data-hele-offer-container>
          <MJMLColumn width="100%">
            <MJMLImage
              padding="10px"
              href={href}
              src={imageSrc}
            />
            <MJMLText
              padding="5px 10px 0"
              font-size="16px"
              font-weight="bold"
              font-family="Helvetica, Arial, sans-serif"
            >
              <a href={href} target="_blank" style={{ textDecoration: 'none', color: '#000000' }}>
                {name}
              </a>
            </MJMLText>
            <MJMLText
              padding="5px 10px 15px"
              font-size="16px"
              font-weight="bold"
              font-family="Helvetica, Arial, sans-serif"
              color="#41b79d"
            >
              {/* eslint-disable max-len */}
              <span
                dangerouslySetInnerHTML={{
                  __html: `${parseInt(price, 10) === 0 ? 'Zdarma' : `${price} Kč`} <span style="display: inline-block; margin-left: 1em; color: #696969; font-weight: normal; font-size: 14px">${premise}</span>`,
                }}
              />
              {/* eslint-enable max-len */}
            </MJMLText>
          </MJMLColumn>
        </div>
      </MJMLSection>
    );
  }
}

HeleOffer.tagName = tagName;
HeleOffer.defaultMJMLDefinition = defaultMJMLDefinition;
HeleOffer.endingTag = endingTag;
HeleOffer.columnElement = columnElement;
HeleOffer.baseStyles = baseStyles;
HeleOffer.postRender = postRender;

export default HeleOffer;
