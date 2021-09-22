import appConstants from '../static/static';

//setting initial state
let initialState = {
   carDealers:[]
};

const reducer = (state= initialState, action) =>{

    switch(action.type){
        case appConstants.UPDATE_CAR_DEALERS:
            return{ ...state, carDealers:[...action.data]};
        default:
            return state;
    }
}

export default reducer;