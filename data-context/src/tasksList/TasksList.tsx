import React, { FC, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContextNew";

export const TasksList: FC = () => {
    const tasks = useContext(TasksContext)
    const tasksDispatch = useContext(TasksDispatchContext)
  return (
    <ul>
      {tasks.map(task => (<li key={task.id}>{JSON.stringify(task)}<button onClick={() => tasksDispatch({type: "delete", payload: task})}>Delete</button></li>))}
    </ul>
  )
}