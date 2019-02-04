// setIncrement=()=>{
//     console.warn('increment')
//     return {
//         type:'INCREMENT'
//     }
// }

// setDecrement=()=>{
//     console.warn('decrement')

//     return {
//         type:'DECREMENT'
//     }
// }

import {INCREMENT} from  './Type'
import {DECREMENT} from './Type'


 export const  setIncrement =()=>{
    return{
        type: INCREMENT
    }
}

export const setDecrement=()=>{
    return{
        type:DECREMENT
    }
}

