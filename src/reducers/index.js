const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELATE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        // pasamos objeto que creamos en accion y lo traemos aqui.
        user: action.payload,
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        // buscaremos el id y se devolverá el que coincida con el paying que mandando-
        playing: state.treds.find(item => item.id === Number(action.payload))
        || state.original.find(item => item.id === Number(action.payload))
        || []
      }
    default:
      return state;
  }
};

export default reducer;
