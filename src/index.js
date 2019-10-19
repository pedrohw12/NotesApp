import React, { useState } from 'react';
import { Page, Item, ItemText, Listagem } from './styles/styles';

import lista from './lista';
import ListaItem from './components/ListaItem';
import AddItemArea from './components/AddItemArea';

import uuid from 'uuid/v4';

export default () => {
  const [ items, setItems ] = useState(lista);

  const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push({
      id:uuid(),
      task: txt,
      done:false,
    });
    setItems(newItems);
  }

  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  }

  return (
  <Page>
    <AddItemArea onAdd={addNewItem} />
    <Listagem 
      data={items}
      renderItem={({item, index}) => <ListaItem onPress={() => toggleDone(index)} data={item} /> }
      keyExtractor={(item)=>item.id}
    />
  </Page>
  );
}