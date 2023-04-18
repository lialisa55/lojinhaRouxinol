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

          <Text style={styles.paragraph}>
            {' '}
            Quem preza pela qualidade e não abre mão de um preço justo é Rouxinol. Venha aproveitar os descontos progressivos, quanto mais você comprar maior o desconto que você ganha. Mas, corra, porque é por tempo limitado! Aproveite.{' '}
          </Text>
          <Text style={styles.title}>Categorias:</Text>
          <View style={styles.container}>
            <FlatList
              data={arrayEmpregos}
              renderItem={({ item }) => (
                <View style={styles.items}>
                  <Image style={styles.subimg} source={item.foto} />
                  <Text style={styles.itemTitle}>{item.nome}</Text>
                </View>
              )}
            />
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
    height: 120,
    width: 120,
    margin: 5,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
        marginBottom: 100
  },
  items: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#DAC8B3',
    fontFamily: 'RobotoMono_400Regular',
    margin: 20,
    height: 100,
    width: 350,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  paragraph: {
    margin: 5,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'RobotoMono_400Regular',
  },
  title: {
    textAlign: 'center',
    margin: 10,
    fontSize: 40,
    fontFamily: 'RobotoMono_400Regular',
  },
  itemTitle: {
    margin: 5,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'RobotoMono_400Regular',
  },
});

const arrayEmpregos = [
  { nome: 'Blusas', foto: require('../assets/blusa.png') },
  { nome: 'Casacos', foto: require('../assets/casaco.png') },
  { nome: 'Calças', foto: require('../assets/calca.png') },
  { nome: 'Saias', foto: require('../assets/saia.png') },
];
