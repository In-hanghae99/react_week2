import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

//Action Type
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const DELETE = "dictionary/DELETE";
const UPDATE = "dictionary/UPDATE";
const LOADED = "dictionary/LOADED";

const initialState = {
  is_loaded: false,
  list: [],
};

//Action Creator
export const loadDictionary = (dictionary_list) => {
  return { type: LOAD, dictionary_list };
};

export const createDictionary = (dictionary) => {
  return { type: CREATE, dictionary };
};

export const deleteDictionary = (dictionary_index) => {
  return { type: DELETE, dictionary_index };
};

export function updateDictionary(dictionary_id, word, explanation, example) {
  return {
    type: UPDATE,
    dictionary_id,
    word,
    explanation,
    example,
  };
}

export function loadedDictionary(loaded) {
  return {
    type: LOADED,
    loaded,
  };
}

//middlewares
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));

    let dictionary_list = [];

    dictionary_data.forEach((doc) => {
      dictionary_list.push({ id: doc.id, ...doc.data() });
      console.log(doc.data());
    });
    console.log(dictionary_list);
    dispatch(loadDictionary(dictionary_list));
  };
};

//추가
export const addDictionaryFB = (dictionary) => {
  return async function (dispatch) {
    dispatch(loadedDictionary(false));
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    const dictionary_data = { id: docRef.id, ...dictionary };
    dispatch(createDictionary(dictionary_data));
  };
};

//삭제
export const deleteDictionaryFB = (dictionary_id) => {
  return async function (dispatch) {
    const docRef = doc(db, "dictionary", dictionary_id);
    await deleteDoc(docRef);
    dispatch(deleteDictionary(dictionary_id));
  };
};

//업데이트
export const updateDictionaryFB = (
  dictionary_id,
  word,
  explanation,
  example
) => {
  return async function (dispatch, getState) {
    if (!dictionary_id) {
      window.alert("아이디가 없습니다.");
      return;
    }

    const docRef = doc(db, "dictionary", dictionary_id);
    // 어떤 걸 수정 할 지 document를 집어온다.

    await updateDoc(docRef, {
      word: word,
      explanation: explanation,
      example: example,
    });

    dispatch(updateDictionary(dictionary_id, word, explanation, example));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "dictionary/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }
    case "dictionary/LOAD":
      return { list: action.dictionary_list, is_loaded: true };
    case "dictionary/CREATE": {
      const new_dictionary_list = [...state.list, action.dictionary];
      return { list: new_dictionary_list, is_loaded: true };
    }
    case "dictionary/UPDATE": {
      const new_dictionary_list = state.list.map((item, i) => {
        if (item.id === action.dictionary_id) {
          return {
            ...item,
            word: action.word,
            explanation: action.explanation,
            example: action.example,
          };
        } else {
          return item;
        }
      });
      return { ...state, list: new_dictionary_list };
    }
    case "dictionary/DELETE": {
      const new_dictionary_list = state.list.filter((item, i) => {
        return item.id !== action.dictionary_id;
      });
      return { ...state, list: new_dictionary_list };
    }
    default:
      return state;
  }
}
