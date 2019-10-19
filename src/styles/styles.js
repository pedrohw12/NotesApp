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
  background-color: ${props => props.done?'#4cd137':'red'};
`;

export const Item = styled.TouchableHighlight`
  flex-direction: row;
  background-color: #EEE;
  height: 50px;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
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

export const Swipe = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  background-color: red;
`; 

export const View = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 15px;
`;