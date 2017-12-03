/*
 * action 类型
 */

export const ADD_PROGRAM = 'ADD_PROGRAM';
export const SAVE_PROGRAM = 'SAVE_PROGRAM';
export const DELETE_PROGRAM = 'DELETE_PROGRAM';
export const REMOVE_ALL = 'REMOVE_ALL';


export const UPDATE_SETTING = 'UPDATE_SETTING';

/*
 * action 创建函数
 */

export function addProgram(filename,text,description) {
    return { type: ADD_PROGRAM, filename,text,description }
}

export function saveProgram(index,filename,text,description) {
    return { type: SAVE_PROGRAM, index,filename,text,description }
}

export function deleteProgram(index) {
    return { type: DELETE_PROGRAM, index }
}

export function removeAllProgram(filter) {
    return { type: REMOVE_ALL, filter }
}