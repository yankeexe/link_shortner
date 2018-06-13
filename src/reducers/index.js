import { combineReducers } from 'redux';

export default combineReducers({
    linksReducers: () => {
        return[
            {id: '123', title: 'Title One', destination: 'http://title.com', shortUrl: 't1.co'},
            {id: '456', title: 'Title Two', destination: 'http://title.com', shortUrl: 't2.co'},
            {id: '789', title: 'Title Three', destination: 'http://title.com', shortUrl: 't3.co'},
        ]
        
    },
    selectReducer: (state = {}, action) => {
        if (action.type == 'SET_SELECTED_LINK'){
            return action.payload
        }else{
            return{}
        }
    }
})

