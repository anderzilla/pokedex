import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 20px 20px 20px;
  background-color: #f5f4f5;
  overflow: scroll;
`;

export const Titulo = styled.Text`
  padding: 0px 10px 10px 0px;
  color: #1e1e1e;
  text-align: center;
  font-size: 20px;
  font-weight: 900;
`;

export const SubTitulo = styled.Text`
  padding: 0px 10px 10px 0px;
  color: #252550;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute !important;
  top: 50px !important;
  right: 10px !important;
  width: 50px;
  height: 50px;
`;

export const BackButtonIcon = styled.Text`
  color: #ae0000 !important;
  text-align: right !important;
  font-size: 20px;
  font-weight: 900;
`;
