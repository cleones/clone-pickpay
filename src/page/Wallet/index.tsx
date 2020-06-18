import React, { useState } from 'react';
import { StatusBar, Platform, Switch } from 'react-native';
import { useFocusEffect, useBackButton } from '@react-navigation/native';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UserBalance,
  UserBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  CardTitle,
  Card,
  CardDetails,
  CardInfo,
  CardLogo,
  CardBody,
  AddContainer,
  AddLabel,
  UserTicketContainer,
  UserTicketLabel,
} from './styles';
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

const creditCard = require('../../images/credit-card.png');

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBlance, setUseBlance] = useState(true);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(useBlance ? '#52e780' : '#d3d3d3');
    }, [useBlance])
  );

  return (
    <Wrapper>
      <Header
        colors={useBlance ? ['#52e780', '#1ab563'] : ['#d3d3d3', '#868686']}
      >
        <HeaderContainer>
          <Title>Saldo PickPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>
            <EyeButton>
              <Feather
                name={isVisible ? 'eye' : 'eye-off'}
                size={28}
                color='#fff'
                onPress={() => setIsVisible((prevState) => !prevState)}
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo esta rendnedo 100% do CDI.</Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons name='cash' size={28} color='#fff' />
              <ActionLabel> Adicionar </ActionLabel>
            </Action>
            <Action>
              <FontAwesome name='bank' size={20} color='#fff' />
              <ActionLabel> Retirar </ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UserBalance>
        <UserBalanceTitle> Usar saldo ao Pagar </UserBalanceTitle>
        <Switch
          value={useBlance}
          onValueChange={() => setUseBlance((prevState) => !prevState)}
        />
      </UserBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamentos</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu Cartão de crédito</CardTitle>
              <CardInfo>
                Castre um cartão de crédito para poder gazer pagamento mesmo
                quando não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>
            <CardLogo source={creditCard} resizeMode='contain' />
          </CardBody>
          <AddContainer>
            <AntDesign name='pluscircleo' size={30} color='#52e780' />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddContainer>
        </Card>
        <UserTicketContainer>
          <MaterialCommunityIcons
            name='ticket-outline'
            size={20}
            color='#52e780'
          />
          <UserTicketLabel>Usar código promocional</UserTicketLabel>
        </UserTicketContainer>
      </PaymentMethods>
    </Wrapper>
  );
};

export default Wallet;
