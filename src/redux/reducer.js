import { ADD_FAVORIRES, DELETE_VFAVORITES } from "./actiosnTypes";
const initialState = {
  myFavorites: [],
};
// {type,payload} destruting de la action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORIRES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case DELETE_VFAVORITES:
      let misFavoritos = state.myFavorites.filter(
        (fav) => fav.id !== action.payload
      );
      return {
        ...state,
        myFavorites: misFavoritos,
      };

    default:
      return { ...state };
  }
};
export default reducer;
