type ActionsTypes = SetStartValueACType | SetMaxValueACType | SetValueACType;

const initialState = {
    startValue: 0,
    maxValue: 5,
    value: 0,
};

export const valuesReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-START-VALUE':
            return {...state, startValue: action.payload.startValue};

        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.payload.maxValue};

        case 'SET-VALUE':
            return {...state, value: action.payload.value};

        default:
            return state;
    }
};

type SetStartValueACType = ReturnType<typeof setStartValueAC>

export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {
            startValue,
        },
    } as const;
};

type SetMaxValueACType = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            maxValue,
        },
    } as const;
};

type SetValueACType = ReturnType<typeof setValueAC>

export const setValueAC = (value: number) => {
    return {
        type: 'SET-VALUE',
        payload: {
            value,
        },
    } as const;
};