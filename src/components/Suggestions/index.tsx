import React from 'react';

import { Container, Option, Img, Label } from './styles';

const img1 = require('../../images/01.png');
const img2 = require('../../images/02.png');
const img3 = require('../../images/03.png');
const img4 = require('../../images/04.png');
const img5 = require('../../images/05.png');
const img6 = require('../../images/06.png');
const img7 = require('../../images/07.png');

const items = [
  {
    img: img1,
    label: 'Recaga',
  },
  {
    img: img2,
    label: 'Uber',
  },
  {
    img: img3,
    label: 'Onibus',
  },
  {
    img: img4,
    label: 'TV',
  },
  {
    img: img5,
    label: 'Doações',
  },
  {
    img: img6,
    label: 'Boleto',
  },
  {
    img: img7,
    label: 'FAC',
  },
];

const Suggestions: React.FC = () => {
  return (
    <Container>
      {items.map((item, index) => (
        <Option key={index}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
};

export default Suggestions;
