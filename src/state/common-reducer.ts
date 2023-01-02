type ActionsType = SetInformationModeACType

const initialState = {
    isInformationMode: false,
    isError: false,
};

export const commonReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-INFORMATION-MODE':
            return {...state, isInformationMode: action.payload.value};
    }
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