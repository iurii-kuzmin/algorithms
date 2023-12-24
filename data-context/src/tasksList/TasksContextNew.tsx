import React, { FC, PropsWithChildren, createContext, useReducer } from "react";

export type Task = {
  id: number
  title: string
}

export type Action<Type extends string, Payload> = {
  type: Type
  payload: Payload
}

export type CrudAction<Entity> = Action<"create" | "update" | "delete", Entity>

export type TaskAction = CrudAction<Task>

export const TasksContext = createContext<Task[]>([])
export const TasksDispatchContext = createContext<React.Dispatch<TaskAction>>((action: TaskAction) => {throw new Error("Not initialized")})

function tasksReducer(tasks: Task[], action: TaskAction) {
  switch (action.type) {
    case "create":
      return [...tasks, {...action.payload, id: tasks.length + 1}]
    case "update":
      return tasks.map(task => task.id === action.payload.id ? {...action.payload} : task)
    case "delete":
      return tasks.filter(task => task.id !== action.payload.id)
  }
}

export const TasksProvider: FC<PropsWithChildren> = ({ children }) => {

  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={tasksDispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}