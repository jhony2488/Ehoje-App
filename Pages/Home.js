import { StatusBar } from 'expo-status-bar';
import {CardComponent} from '../Components/Card'
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';

const data=[
  {nome: 'Bruno', tipoSanguineo: 'AB+', id:1},
  {nome: 'Tuane', tipoSanguineo: 'A+', id:2},
  {nome: 'Tereza', tipoSanguineo: 'B+', id:3},
  {nome: 'Jony', tipoSanguineo: 'O+', id:4}
]

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList 
        data={data}
        renderItem={({item})=> <CardComponent nome={item.nome} tipoSanguineo={item.tipoSanguineo} /> }
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
