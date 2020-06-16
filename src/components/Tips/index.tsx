import React from 'react';

import { Container, Option, Title, Img } from './styles';

const img8 = require('../../images/08.png');
const img9 = require('../../images/09.png');
const img10 = require('../../images/10.png');
const img11 = require('../../images/11.png');
const img12 = require('../../images/12.png');

interface itemType {
  bgcolor: string;
  title: string;
  img: any;
}
const items: itemType[] = [
  {
    bgcolor: '#172c4a',
    title: 'Pague suas Contas sem sair de casa',
    img: img8,
  },
  {
    bgcolor: '#6a0159',
    title: 'Pague suas Contas sem sair de casa',
    img: img9,
  },
  {
    bgcolor: '#4139c8',
    title: 'Pague suas Contas sem sair de casa',
    img: img10,
  },
  {
    bgcolor: '#00ab4b',
    title: 'Pague suas Contas sem sair de casa',
    img: img11,
  },
  {
    bgcolor: '#ba2f76',
    title: 'Pague suas Contas sem sair de casa',
    img: img12,
  },
];

const Tips: React.FC = () => {
  return (
    <Container>
      {items.map((item, index) => (
        <Option key={index} bgColor={item.bgcolor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
