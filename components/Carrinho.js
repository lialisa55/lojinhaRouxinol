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
          <Image
            style={styles.img}
            resizeMode={'contain'}
            source={require('../assets/bannercolecao.gif')}
          />
          <View style={styles.container}>
            <FlatList
              data={arrayEmpregos}
              renderItem={({ item }) => (
                <View style={styles.items}>
                  <Image style={styles.subimg} source={item.foto} />
                  <Text style={styles.itemTitle}>{item.preco}</Text>
                  <Text style={styles.itemTitle}>{item.nome}</Text>
                </View>
              )}
            />
            <Text style={styles.itemTitle}>Total: R$380,00</Text>
          </View>
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
  subimg: {
    height: 80,
    width: 80,
  },
  container: {
    padding: 5,
    borderWidth: 2,
    margin: 2,
    marginBottom: 100,
  },
  items: {
    fontFamily: 'RobotoMono_400Regular',
    height: 120,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    textAlign: 'right',
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 40,
    fontFamily: 'RobotoMono_400Regular',
  },
  itemTitle: {
    textAlign: 'right',
    fontSize: 20,
    fontFamily: 'RobotoMono_400Regular',
  },
});

const arrayEmpregos = [
  {
    nome: 'Blusa bege coleção outono',
    foto: require('../assets/blusa.png'),
    preco: 'R$55,00',
  },
  {
    nome: 'Casaco bege coleção outono',
    foto: require('../assets/casaco.png'),
    preco: 'R$150,00',
  },
  {
    nome: 'Calça bege coleção outono',
    foto: require('../assets/calca.png'),
    preco: 'R$100,00',
  },
  {
    nome: 'Saia bege coleção outono',
    foto: require('../assets/saia.png'),
    preco: 'R$75,00',
  },
];
