 import React from 'react';
 import { ItemText, Item, ItemCheck } from '../styles/styles';

 export default (props) => {
   return (
     <Item onPress={props.onPress} activeOpacity={0.7} >
       <>
        <ItemText> {props.data.task} </ItemText>
        <ItemCheck done={props.data.done}></ItemCheck>
       </>
     </Item>
   );
 }