import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadDictionary, loadDictionaryFB } from "./redux/modules/dictionary";

//Home 화면 import
import List from "./List";
import AddWord from "./AddWord";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import UpdateDictionary from "./UpdateDictionary";
import Spinner from "./Spinner";

function App() {
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.dictionary.is_loaded);
  console.log(is_loaded);
  React.useEffect(async () => {
    dispatch(loadDictionaryFB());
  }, []);

  return (
    <div className="App">
      <Route path="/" exact>
        <List />
      </Route>
      <Route path="/add">
        <AddWord />
      </Route>
      <Route path="/updateDictionary/:id">
        <UpdateDictionary />
      </Route>
      {!is_loaded && <Spinner />}
    </div>
  );
}

export default App;
