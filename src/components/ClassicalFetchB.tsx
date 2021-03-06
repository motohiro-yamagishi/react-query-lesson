import { VFC } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'

export const ClassicalFetchB: VFC = () => {
  const navigate = useNavigate()
  const { tasks } = useStateContext()
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchB</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => navigate('/fetch-a')}
        className=" h-5 w-5 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}
