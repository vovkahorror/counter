type ActionsTypes = SetNewStartValueACType | SetNewMaxValueACType | SetInformationModeACType;

const initialState = {
    newStartValue: 0,
    newMaxValue: 5,
    isInformationMode: false,
};

export const valuesReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-NEW-START-VALUE':
            return {...state, newStartValue: action.payload.newStartValue};

        case 'SET-NEW-MAX-VALUE':
            return {...state, maxValue: action.payload.newMaxValue};

        case 'SET-INFORMATION-MODE':
            return {...state, isInformationMode: action.payload.value};

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

type SetInformationModeACType = ReturnType<typeof setInformationModeAC>

export const setInformationModeAC = (value: boolean) => {
    return {
        type: 'SET-INFORMATION-MODE',
        payload: {
            value,
        },
    } as const;
};