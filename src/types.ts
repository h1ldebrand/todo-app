export interface ITodo {
    label: string
    important: boolean
    done: boolean
    id: number
}

export type ITodoWithoutId = Omit<ITodo, 'id'>
export type TodoParamType = "important" | "done"