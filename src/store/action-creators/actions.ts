export const actions = {
    signUpActionCreator: () => ({type: 'value'})
};

type ActionTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionType = ReturnType<ActionTypes<typeof actions>>;
