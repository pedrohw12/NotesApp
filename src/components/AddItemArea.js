import React, { useState } from 'react';
import { AddItemArea, AddItemInput } from '../styles/styles';

export default (props) => {
  const [ item, setItem ] = useState('');

  const handleSubmit = () => {
    if (item.trim() != '') {
      props.onAdd(item.trim());
      setItem('');
    }
}

  return (
    <AddItemArea>
      <AddItemInput 
      placeholder='Adicionar novo item'
      value={item}
      onChangeText={(t)=>setItem(t)}
      onSubmitEditing={handleSubmit}
      returnKeyType="send"
      />
    </AddItemArea>
  );
}