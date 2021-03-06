import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {navigate} from '~/services/navigator';

// import { Container } from './styles';

const OptionsCarrosel = (props) => {
  const options = [
    {
      id: 0,
      buttonColor: '#F2B84B',
      optionName: 'SAQUE',
      optionDescriton: 'Saque seu dinheiro',
      onPress: () => {navigate('WithdrawMoney')}
    },
    {
      id: 1,
      buttonColor: '#D9483B',
      optionName: 'CRÉDITO',
      optionDescriton: 'Solicitar Microcrédito',
      onPress: () => {navigate('RequestCredit')}
    },
    {
      id: 4,
      buttonColor: '#5BD9D9',
      optionName: 'PAGAR',
      optionDescriton: 'Efetuar Pagamento',
      onPress: () => {}
    },
  ];

  return (
    <View >
      <FlatList
        horizontal={true}
        style={styles.horizontalList}
        data={options}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.buttonColor}
            onPress={item.onPress}
            style={[styles.goButton, {backgroundColor: item.buttonColor}]}>
            <Text style={styles.optionText}>{item.optionName}</Text>
            <Text style={styles.descritonText}>{item.optionDescriton}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goButton: {
    width: 100,
    height: 100,
    borderRadius: 50 / 2,
    //   borderWidth: 0.5,
    //   borderColor: "#fff",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
    // position: "absolute",
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  horizontalList: {
    flex: 1,
    bottom: 1,
  },
  descritonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 2,
    paddingTop: 5,
  },
  optionText: {fontSize: 16, color: '#fff', fontWeight: 'bold'},
});

export default OptionsCarrosel;
