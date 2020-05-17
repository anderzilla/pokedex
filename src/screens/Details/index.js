import React, {useState, useContext} from 'react';
import {View, Text, Button, Image, FlatList} from 'react-native';
import axios from 'axios';
import Loader from '../../components/Loader';

import {
  Container,
  Titulo,
  SubTitulo,
  BackButton,
  BackButtonIcon,
  ItemText,
} from './styles';

export default function Deatails({route, navigation}) {
  const [errors, setErrors] = useState('');

  const [habilidades, setHabilidades] = useState('');
  const [stats, setStats] = useState('');
  const {namePk} = route.params;

  axios
    .get('https://pokeapi.co/api/v2/pokemon/' + namePk, {})
    .then(function(response) {
      response.data
        ? setHabilidades(response.data.abilities)
        : setHabilidades('');
      response.data ? setStats(response.data.stats) : setStats('');
    })
    .catch(function(error) {
      setErrors(error);
    });

  return (
    <Container>
      <Titulo>Pokédex</Titulo>
      <SubTitulo>{namePk}</SubTitulo>
      {!stats ? (
        <Loader />
      ) : (
        <FlatList
          data={stats}
          renderItem={s => (
            <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
              <View style={{flex: 1, alignSelf: 'stretch'}}>
                <ItemText>{s.item.stat.name}</ItemText>
              </View>
              <View style={{flex: 1, alignSelf: 'stretch'}}>
                <ItemText>{s.item.base_stat}</ItemText>
              </View>
            </View>
          )}
          keyExtractor={k => k.stat.url}
        />
      )}
      <SubTitulo>Habilidades</SubTitulo>
      {!habilidades ? (
        <Loader />
      ) : (
        <FlatList
          data={habilidades}
          renderItem={s => (
            <View>
              <ItemText>{s.item.ability.name}</ItemText>
            </View>
          )}
          keyExtractor={k => k.ability.url}
        />
      )}
      <BackButton onPress={() => navigation.navigate('Home')}>
        <BackButtonIcon>X</BackButtonIcon>
      </BackButton>
    </Container>
  );
}
