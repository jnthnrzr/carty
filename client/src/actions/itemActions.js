import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/items')
        .then(response =>
        dispatch({
            type: GET_ITEMS,
            payload: response.data,
        }))
        .catch(error => console.log(error));
};

export const addItem = item => dispatch => {
    axios
        .post('/api/items', item)
        .then(response =>
            dispatch({
                type: ADD_ITEM,
                payload: response.data,
            }))
        .catch(error => console.log(error));
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id,
    };
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
