import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

const initialState = {
    message: 'Działa!',
    time: new Date,
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return {
                ...state,
                time: new Date(),
            };
        case 'addUser': {
            const nextId = state.users.length > 0
                ? Math.max(...state.users.map(u => u.id)) + 1
                : 1;
            return {
                ...state,
                users: [...state.users, { id: nextId, name: action.payload }],
            };
        }
        case 'removeUser':
            return {
                ...state,
                users: state.users.filter(u => u.id !== action.payload),
            };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    return (
        <Provider store={store}>
            {/* <Task01 /> */}
            {/* <Task02 /> */}
            {/* <Task03 /> */}
            <Task04 />
            {/* <Task05 /> */}
        </Provider>
    )
}

export default App;