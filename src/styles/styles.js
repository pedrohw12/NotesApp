import styled from 'styled-components/native';

export const Page = styled.View`
  flex: 1;
`;

export const Listagem = styled.FlatList`
  flex:1;
`;

export const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #CCC;
`;

export const Item = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  background-color: #EEE;
`;

export const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

export const AddItemArea = styled.View`
  background-color: #CCC;
  padding: 10px;
`;

export const AddItemInput = styled.TextInput`
  background-color: #FFF;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
`;