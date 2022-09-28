const initialState = {
    fontsize: '20px'
};

function rootReducer(state = initialState, action:any) {
if (action === "FONT_SIZE") {
   return Object.assign({}, state, {
          fontsize: action.payload ? action.payload : state.fontsize   
    });

   }
return state;

};
export default rootReducer;