import React, { useReducer } from 'react';

export const MyContext = React.createContext();

const initialState = {
    pclState: false,
    pclName: 'PCL 3',
    deviceState: false,
    deviceName: 'SELECT YOUR DEVICE',
    brandState: false,
    brandName: 'SELECT YOUR BRAND',
    codeText: '',
    codeState: false,
};

const reducer = (state, action) => {
    switch(action.type){
        case 'pclState':
            return {
                ...state, pclState: !state.pclState
            }
        case 'pclName':
            return {
                ...state, pclName: action.payLoad
            }
        case 'deviceState':
            return {
                ...state, deviceState: !state.deviceState
            }
        case 'deviceName':
            return {
                ...state, deviceName: action.payLoad
            }
        case 'brandState':
            return {
                ...state, brandState: !state.brandState
            }
        case 'brandName':
            return {
                ...state, brandName: action.payLoad
            }
        case 'codeText':
            return {
                ...state, codeText: action.payLoad
            }
        case 'codeState': 
            return {
                ...state, codeState: action.payLoad
            }
        default:
            return state;
    }
}

const Store = ({children}) => {

    const [{pclState, pclName, deviceState, deviceName, brandState, brandName, codeState, codeText}, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={[{pclState, pclName, deviceState, deviceName, brandState, brandName, codeText, codeState}, dispatch]}>
            {children}
        </MyContext.Provider>
    )
}

export default Store;
