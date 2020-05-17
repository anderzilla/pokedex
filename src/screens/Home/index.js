import React, {useState, useContext} from 'react';
import axios from 'axios';
import {FlatList, View, Text, Button, Image} from 'react-native';

import {Container, Titulo, ItemLista, NomeItem, InputBusca} from './styles';

export default function Home({navigation}) {
  const [errors, setErrors] = useState('');
  const [lista, setLista] = useState('');
  const [busca, setBusca] = useState('');

  function getPokemon(buscaPk) {
    !buscaPk
      ? axios
          .get('https://pokeapi.co/api/v2/pokemon', {})
          .then(function(response) {
            setLista(response.data.results);
          })
          .catch(function(error) {
            setErrors(error);
          })
      : axios
          .get('https://pokeapi.co/api/v2/pokemon/' + buscaPk, {})
          .then(function(response) {
            setLista(response.data);
          })
          .catch(function(error) {
            setErrors(error);
          });
  }

  function handleBusca(text) {
    setBusca(text);
    getPokemon(text);
  }

  getPokemon(busca);

  return (
    <>
      <Container>
        <Titulo>Pokédex</Titulo>
        <InputBusca
          value={busca}
          autoCapitalize="none"
          onChangeText={text => handleBusca(text)}
          placeholder="Busca"
        />
        {!busca ? (
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
        ) : (
          <ItemLista
            onPress={() => {
              navigation.navigate('Details', {
                namePk: lista.name,
              });
            }}>
            <NomeItem>{lista.name}</NomeItem>
          </ItemLista>
        )}
      </Container>
    </>
  );
}
