
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './interfaces/types';
import { getAllSubs } from './services/getAllSubs';

/* interface AppState {
  subs: Array<Sub>
}
 */


function App() {
  // const [subs, setSubs] = useState<number | string>(5);
  //<Sub[]>  < AppState["subs"]>

  const divRef = useRef<HTMLDivElement>(null);
  /*   const changeNumber = () => {
      setSubs(subs);
    } */
  const [subs, setSubs] = useState<Array<Sub>>([]);
  useEffect(() => {

    getAllSubs().then(setSubs)
    /*  fetchSub()
       .then(mapFromApiToSubs)
       .then(setSubs) */
    /*  .then(apiSubs => {
       const subs = mapFromApiToSubs(apiSubs);
       setSubs(subs);
     }) */

    /* fetch('./json/subs.json')
      .then(res => res.json())
      .then(subs => {
        console.log(subs);
        setSubs(subs);
      }) */
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <List subs={subs}></List>
      <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
