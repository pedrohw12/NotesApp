import React, { useState } from 'react';
import { Page, Item, ItemText, Listagem } from './styles/styles';
import lista from './lista';

import ListaItem from './components/ListaItem';
import AddItemArea from './components/AddItemArea';

export default () => {
  const [ items, setItems ] = useState(lista);

  return (
  <Page>
    <AddItemArea items={items} setItems={setItems} />
    <Listagem 
      data={items}
      renderItem={({item}) => <ListaItem data={item} /> }
      keyExtractor={(item)=>item.id}
    />
  </Page>
  );
}