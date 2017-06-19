
interface State {
    counter: number
    score: Array<number>
    names: Array<string>
}

export const state: State = {
    counter: 3 ,
    score:[0,0],
    names: []  
}

export const mutations = {
    ADD_COUNTER(state :State, payload: any){
        state.counter = state.counter+payload.amount;
    },
    ADD_NAME(state: State, payload: any){
        state.names.push(payload.name)
    }
}

export const getters = {
    COUNTER(state: State) : number{
        return state.counter;
    },
    NAMES(state : State) : Array<string>{
        return state.names
    },
    TEAM(state: State, team: number){
        return state.score[team]
    }
}