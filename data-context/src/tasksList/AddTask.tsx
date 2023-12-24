import { FC, useContext, useState } from "react";
import { TasksDispatchContext } from "./TasksContextNew";

export const AddTask: FC = () => {
  const tasksDispatch = useContext(TasksDispatchContext)
  const [value, setValue] = useState("")

  console.log("add render")
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => tasksDispatch({ type: "create", payload: {id: 0, title: value}})}>Add</button>
    </div>
  )
}