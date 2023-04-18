import * as React from 'react';
import {
  Text,
  View,
  Style,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoMono_400Regular } from '@expo-google-fonts/dev';

export default function JuniorTi() {
  let [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Text style={styles.title}> Rouxinol lojas </Text>
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              data={arrayEmpregos}
              renderItem={({ item }) => (
                <View style={styles.items}>
                  <Image style={styles.subimg} source={item.foto} />
                  <Text style={styles.itemTitle}> {item.nome}</Text>
                  <Text style={styles.paragraph}> {item.status}</Text>
                  <Text style={styles.paragraph}> Pontos: {item.ponto}</Text>
                  <Text style={styles.paragraph}>
                    {' '}
                    Endereço: {item.endereco}
                  </Text>
                </View>
              )}
            />
          </View>
          <Image
            style={styles.img}
            resizeMode={'contain'}
            source={require('../assets/bannercolecao.gif')}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    margin: 20,
    height: 200,
    width: 350,
  },
  paragraph: {
    margin: 5,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'RobotoMono_400Regular',
  },
  subimg: {
    height: 120,
    width: 120,
    borderRadius: 100,
    alignSelf: 'center'
  },
  container: {
    padding: 5,
    margin: 10,
    borderWidth: 3,
    borderRadius: 5,
  },
  items: {
    fontFamily: 'RobotoMono_400Regular',
    padding: 5,
    itemsAlign: 'center'
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 40,
    fontFamily: 'RobotoMono_400Regular',
  },
  itemTitle: {
    fontSize: 30,
    fontFamily: 'RobotoMono_400Regular',
  },
});

const arrayEmpregos = [
  {
    nome: 'Cassia da Silva',
    status: 'Cliente Premium',
    foto: require('../assets/pessoa.png'),
    ponto: '577',
    endereco: 'Rua Blumenau, 577. Jardim Amoedo.',
  },
];
