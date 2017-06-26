export const state: State = {
    counter: 3 ,
    score:[0,0],
    names: [
        {
            name:"one",
            withheld:false,
            duplicate:false,
        },
        {
            name:"two",
            withheld:false,
            duplicate:false,
        },
        {
            name:"three",
            withheld:false,
            duplicate:false,
        },
        {
            name:"four",
            withheld:false,
            duplicate:false,
        }
    ],
    started: false,
}

export const mutations = {
    ADD_COUNTER(state :State, payload: number){
        state.counter = state.counter+payload;
    },
    ADD_NAME(state: State, payload: Word){
        state.names.push(payload)
    },
    REMOVE_NAME(state:State, payload :string){
        //state.names = state.names.filter(x => x.name != payload)
    },
    START(state:State, payload: boolean){
        state.started = payload
    },
    ADD_WITHHELD(state: State, payload: any){       
        var obj = state.names.map(word=>word.name)
        var index = state.names.map(word=>word.name).indexOf(payload.word)
        console.log(obj, payload.word)
        state.names[index].withheld = payload.value
    }
}

export const getters = {
    COUNTER(state: State) : number{
        return state.counter;
    },
    NAMES(state : State) : Array<Word>{
        return state.names
    },
    TEAM(state: State, team: number): number {
        return state.score[team]
    },
    STARTED(state: State) : boolean {
        return state.started
    },
}