import {lists as defaultLists} from '../normalized-state'


const listsReducer = (lists = defaultLists, action) => {
    console.log(lists,action,"list reducer")
    return lists
}

export default listsReducer