import { MJMLElement } from 'mjml-core';
import MJMLText from 'mjml-text';
import MJMLDivider from 'mjml-divider';
import MJMLColumn from 'mjml-column';
import MJMLSection from 'mjml-section';
import React, { PropTypes, Component } from 'react';

const tagName = 'hele-footer';
const defaultMJMLDefinition = {};
const endingTag = false;
const columnElement = false;
const baseStyles = {};

@MJMLElement
class HeleFooter extends Component {

  static propTypes = {
    parentWidth: PropTypes.string.isRequired,
  };

  render() {
    return (
      <MJMLSection parentWidth={this.props.parentWidth} padding="15px 10px 0">
        <MJMLColumn width="100%">
          <MJMLDivider border-width="1px" border-color="#d2d2d2" padding="0 0 14px" />
          <MJMLText
            font-family="Helvetica, Arial, sans-serif"
            font-size="14px"
            color="#000000"
            padding="5px 0"
          >
            {/* eslint-disable max-len */}
            <span
              dangerouslySetInnerHTML={{
                __html: 'Potřebujete poradit? Zavolejte nám na <a href="tel:{$contactPhone|phone}" target="_blank" style="text-decoration: none; color: #000000">{$contactPhone|phone}</a> nebo napište <a href="mailto:ju&#64;hele.cz" target="_blank" style="color: #41b79d; text-decoration: underline">ju@hele.cz</a>',
              }}
            />
          </MJMLText>
          <MJMLText
            font-family="Helvetica, Arial, sans-serif"
            font-size="11px"
            color="#5c5c5c"
            padding="5px 0"
          >
            {/* eslint-disable max-len */}
            <span
              dangerouslySetInnerHTML={{
                __html: 'Toto je obchodní sdělení portálu Hele.cz (Slevomat.cz, s.r.o.). Pro odhlášení z týdenního přehledu akcí <a href="{$unsubscribeLink|noescape}" target="_blank" style="color: #41b79d; text-decoration: none"> klikněte zde</a>',
              }}
            />
            {/* eslint-enable max-len */}
          </MJMLText>
        </MJMLColumn>
      </MJMLSection>
    );
  }
}

HeleFooter.tagName = tagName;
HeleFooter.defaultMJMLDefinition = defaultMJMLDefinition;
HeleFooter.endingTag = endingTag;
HeleFooter.columnElement = columnElement;
HeleFooter.baseStyles = baseStyles;

export default HeleFooter;
