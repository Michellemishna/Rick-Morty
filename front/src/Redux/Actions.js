import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITE = "GET_FAVORITE";

// export const addFav = (character)=> {
// return {type: ADD_FAVORITE, payload: character};
//  };

// return function (dispatch) {
//     axios
//       .post("http://localhost:3001/rickandmorty/fav", character)
//       .then((res) => {
//         return dispatch({
//           type: ADD_FAVORITE,
//           payload: res.data,
//         });
//       });
//   };
export const addFav = (character) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/rickandmorty/fav",
        character
      );
      return dispatch({
        type: ADD_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      // console.log(error); o
      return dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};
// export const delFav = (id)=> {
// return {type: DELETE_FAVORITE, payload:id}
// };

// return function (dispatch) {
//     axios
//       .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
//       .then((response) => {
//         return dispatch({
//           type: DELETE_FAVORITE,
//           payload: response.data,
//         });
//       });
//   };
export const delFav = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      return dispatch({
        type: DELETE_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

export const getFav = (id) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(
          `http://localhost:3001/rickandmorty/fav/`
        );
        return dispatch({
          type: GET_FAVORITE,
          payload: response.data,
        });
      } catch (error) {
        return dispatch({
          type: "ERROR",
          payload: error,
        });
      }
    };
  };

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
