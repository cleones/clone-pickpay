import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';
const avatar = require('../../images/avatar.png');
const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@cleones</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Cleones</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 10,00</Value>
            <Divider />

            <Feather name='lock' color='#fff' size={14} />
            <Date> 2 dias atrás </Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name='comment-outline'
                color='#fff'
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name='hearto' color='#fff' size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
