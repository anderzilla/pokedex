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
            <View>
              <Text>
                {s.effort} ==={JSON.stringify(stats)}
              </Text>
            </View>
          )}
          keyExtractor={k => k.stat.url}
        />
      )}
      <BackButton onPress={() => navigation.popToTop()}>
        <BackButtonIcon>X</BackButtonIcon>
      </BackButton>
    </Container>
  );
}
