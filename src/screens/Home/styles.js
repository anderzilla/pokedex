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

export const ItemLista = styled.TouchableOpacity`
  padding: 5px 2px 2px 5px;
  margin: 2px;
  background-color: #63c19d;
  border-color: #4f6b43;
  border-radius: 10px;
  color: #fff;
`;

export const NomeItem = styled.Text`
  padding: 2px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  text-decoration: none;
  text-align: left;
`;

export const InputBusca = styled.TextInput`
  height: 40px;
  width: 300px;
  border-color: #78909c;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  color: #78909c;
  font-weight: bold;
`;
