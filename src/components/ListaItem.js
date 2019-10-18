 import React from 'react';
 import styled from 'styled-components/native';
 import { ItemText, Item, ItemCheck } from '../styles/styles';

 export default (props) => {
   return (
     <Item onPress={()=>{}} activeOpacity={0.7} >
       <>
        <ItemText> {props.data.task} </ItemText>
        <ItemCheck></ItemCheck>
       </>
     </Item>
   );
 }