import React, {useState, useContext} from 'react';
import axios from 'axios';
import {FlatList, View, Text, Button, Image} from 'react-native';

import {Container, Titulo, ItemLista, NomeItem, InputBusca} from './styles';

export default function Home({navigation}) {
  const [errors, setErrors] = useState('');
  const [lista, setLista] = useState('');
  const [busca, setBusca] = useState('');
  const imgSource =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  function pkImage(url) {
    let brk = url.split('/');
    let idPokemon = imgSource + brk[6] + '.png';
    return idPokemon;
  }

  let poke = '';
  !busca ? (poke = '') : (poke = '/' + busca);

  axios
    .get('https://pokeapi.co/api/v2/pokemon', {})
    .then(function(response) {
      setLista(response.data.results);
    })
    .catch(function(error) {
      setErrors(error);
    });

  return (
    <>
      <Container>
        <Titulo>Pokédex</Titulo>
        <InputBusca
          value={busca}
          autoCapitalize="none"
          onChangeText={text => setBusca(text)}
          placeholder="Busca"
        />
        <FlatList
          data={lista}
          renderItem={(p, k) => (
            <ItemLista
              onPress={() => {
                navigation.navigate('Details', {
                  namePk: p.item.name,
                });
              }}>
              <NomeItem>{p.item.name}</NomeItem>
            </ItemLista>
          )}
          keyExtractor={item => item.url}
        />
      </Container>
    </>
  );
}
