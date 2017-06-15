export const state = {
    counter: 3 ,
    names: []  
}

export const mutations = {
    ADD_COUNTER(state, payload){
        state.counter = state.counter+payload.amount;
    },
    ADD_NAME(state,payload){
        state.names.push(payload.name)
    }
}

export const getters = {
    COUNTER(state){
        return state.counter;
    },
    NAMES(state){
        return state.names
    }
}