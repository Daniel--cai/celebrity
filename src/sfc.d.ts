declare module '*.vue' {
  import Vue from 'vue'
  export default typeof Vue
}

declare interface State {
    counter: number
    score: Array<number>
    names: Array<string>
    withheld: Dictionary
    started: boolean
}

declare interface Dictionary {
    [word: string]: boolean;
}
