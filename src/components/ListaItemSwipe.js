import React from 'react';
import { Swipe, View } from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';

export default (props) => {
  return (
    <Swipe onPress={props.onDelete} underlayColor="#FF3333">
      <View>
        <Icon name="delete" size={18} color="#000" />
      </View>
    </Swipe>
  );
}