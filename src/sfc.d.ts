declare module '*.vue' {
  import Vue from 'vue'
  export default typeof Vue
}

declare interface State {
    counter: number
    score: Array<number>
    names: Array<Word>
    started: boolean
}

declare interface Dictionary {
    [word: string]: boolean;
}

declare interface Word {
    name : string
    duplicate: boolean
    withheld: boolean
}
