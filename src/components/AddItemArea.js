import React, { useState } from 'react';
import { AddItemArea, AddItemInput } from '../styles/styles';
import uuid from 'uuid/v4';

export default (props) => {
  const [ item, setItem ] = useState('');

  const handleSubmit = () => {
    if (item.trim() != '') {
      let items = [...props.items];
      items.push({
        id:uuid(),
        task:item.trim(),
        done:false
      });
      props.setItems(items);
    }

    setItem('');
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