import React, { useState } from 'react';
import { Page, Item, ItemText, Listagem } from './styles/styles';
import { SwipeListView } from 'react-native-swipe-list-view';

import lista from './lista';
import ListaItem from './components/ListaItem';
import AddItemArea from './components/AddItemArea';
import ListaItemSwipe from './components/ListaItemSwipe';

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

  const deleteItem = (index) => {
    let newItems = [...items];
    newItems = newItems.filter((it, i)=>i != index);
    setItems(newItems);
  }

  return (
  <Page>
    <AddItemArea onAdd={addNewItem} />
    <SwipeListView 
      data={items}
      renderItem={({item, index}) => <ListaItem onPress={() => toggleDone(index)} data={item} /> }
      renderHiddenItem={({item, index})=><ListaItemSwipe onDelete={()=>deleteItem(index)} />}
      leftOpenValue={50}
      disableLeftSwipe={true}  

      keyExtractor={(item)=>item.id}
    />
  </Page>
  );
}