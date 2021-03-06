export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   REMOVE AFTER FINISH DEVELOPING
  // token:
  //   "BQAQhVuHRlwV-_dTop-3lA2t1Fdm-rkZ6TeiQ_B_VysCTbg0rUWcbqhkwcofjNpbOmV0_wQ29gnpAReumG80hD0MIWWTVyBNhbVJ_RuIcxqNFIEkM_OBjE8gYVl6OTVXG7K7Ssamn_AaLbVEDJ4l7K7kgIkviDwYkY7-PRe0_y2K_Ng8mYgj",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type , [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
