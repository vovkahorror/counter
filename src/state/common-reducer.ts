type ActionsType = SetInformationModeACType | SetErrorACType;

const initialState = {
    isInformationMode: false,
    isError: false,
};

export const commonReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-INFORMATION-MODE':
            return {...state, isInformationMode: action.payload.isInformationMode};

        case 'SET-ERROR':
            return {...state, isError: action.payload.isError};

        default:
            return state;
    }
};

type SetInformationModeACType = ReturnType<typeof setInformationModeAC>

export const setInformationModeAC = (isInformationMode: boolean) => {
    return {
        type: 'SET-INFORMATION-MODE',
        payload: {
            isInformationMode,
        },
    } as const;
};

type SetErrorACType = ReturnType<typeof setErrorAC>

export const setErrorAC = (isError: boolean) => {
    return {
        type: 'SET-ERROR',
        payload: {
            isError,
        },
    } as const;
};