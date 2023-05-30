import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, GET_FAVORITE } from "./Actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {},
};

const rootReducer = (state = initialState, action) => {
switch(action.type) {
  case ADD_FAVORITE:
    return{...state,
      myFavorites: action.payload,
      allCharacters: action.payload,
      errors: {},
    };
    case DELETE_FAVORITE:
      return {...state,
      myFavorites: action.payload,
      errors: {},
    };
    // return{...state, myFavorites: state.myFavorites.filter(char => char.id !== action.payload),
    // };
  case FILTER:
    const allCharsFiltered = state.allCharacters.filter(char =>char.gender === action.payload);
    return{
      ...state,
      myFavorites: allCharsFiltered
    }
  case ORDER:
    return{...state,
      myFavorites: action.payload === 'Ascendente' ? state.allCharacters.sort((a,b)=>a.id - b.id):
      state.allCharacters.sort((a,b)=>a.id - b.id)
    }
  case GET_FAVORITE:
      return{...state,
        myFavorites: action.payload,
        errors: {},
      };  
  case "ERROR":
    return{
      errors: action.payload,
    }

   default: 
   return{...state};
}
};

export default rootReducer;