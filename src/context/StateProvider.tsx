import React, { createContext, useContext, useState } from 'react'
import { Task } from '../types/types'

interface StateContextType {
  tasks: Task[] | null
  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const StateContext = createContext<StateContextType>({} as StateContextType)
export const StateProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState<boolean>(false)
  return (
    <StateContext.Provider value={{ tasks, dark, setTasks, setDark }}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = (): StateContextType => useContext(StateContext)
