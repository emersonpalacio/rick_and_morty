import { ADD_FAVORIRES, DELETE_VFAVORITES } from "./actiosnTypes";

export const addFavorite = (personaje) => {
  return { type: ADD_FAVORIRES, payload: personaje };
};
export const deleteFavoritos = (id) => {
  return { type: DELETE_VFAVORITES, payload: id };
};
