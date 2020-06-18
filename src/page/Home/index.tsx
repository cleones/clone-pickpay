import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';
import { StatusBar, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#000');
    }, [])
  );
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name='qrcode-scan'
            size={30}
            color='#10c86e'
          />
          <BalanceContainer>
            <BalanceTitle> Meu Saldo </BalanceTitle>
            <Balance> R$ 0,00</Balance>
          </BalanceContainer>
          <AntDesign name='gift' size={30} color='#10c86e' />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
};
50;

export default Home;
