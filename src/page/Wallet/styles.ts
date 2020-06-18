import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;
export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;
export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`;
export const Bold = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: bold;
`;
export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
  align-self: center;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 30px;
  margin: 0 15px;
`;
export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;
export const UserBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: #1c1c1e;
  height: 60px;
`;
export const UserBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;
export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;
export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 25px;
`;
export const CardTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 100;
  margin-top: 15px;
`;
export const CardLogo = styled.Image`
  width: 60px;
`;
export const AddContainer = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
`;
export const AddLabel = styled.Text`
  color: #52e780;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;
export const UserTicketContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
export const UserTicketLabel = styled.Text`
  color: #52e780;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration-line: underline;
`;
