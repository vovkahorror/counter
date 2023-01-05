type ActionsType = SetNewStartValueACType | SetNewMaxValueACType;

const initialState = {
    newStartValue: 0,
    newMaxValue: 5,
};

export const newValuesReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-NEW-START-VALUE':
            return {...state, newStartValue: action.payload.newStartValue};

        case 'SET-NEW-MAX-VALUE':
            return {...state, newMaxValue: action.payload.newMaxValue};

        default:
            return state;
    }
};

type SetNewStartValueACType = ReturnType<typeof setNewStartValueAC>

export const setNewStartValueAC = (newStartValue: number) => {
    return {
        type: 'SET-NEW-START-VALUE',
        payload: {
            newStartValue,
        },
    } as const;
};

type SetNewMaxValueACType = ReturnType<typeof setNewMaxValueAC>

export const setNewMaxValueAC = (newMaxValue: number) => {
    return {
        type: 'SET-NEW-MAX-VALUE',
        payload: {
            newMaxValue,
        },
    } as const;
};
