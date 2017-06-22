export const state: State = {
    counter: 3 ,
    score:[0,0],
    names: ["one","two","three","four","five"],
    started: false,
    withheld: {},
}

export const mutations = {
    ADD_COUNTER(state :State, payload: number){
        state.counter = state.counter+payload;
    },
    ADD_NAME(state: State, payload: string){
        state.names.push(payload)
    },
    START(state:State, payload: boolean){
        state.started = payload
    },
    ADD_WITHHELD(state: State, payload: any){
        state.withheld[payload.word] = payload.value
    }
}

export const getters = {
    COUNTER(state: State) : number{
        return state.counter;
    },
    NAMES(state : State) : Array<string>{
        return state.names
    },
    TEAM(state: State, team: number): number {
        return state.score[team]
    },
    STARTED(state: State) : boolean {
        return state.started
    },
    WITHHELD(state: State): Dictionary{
        return state.withheld
    }
}