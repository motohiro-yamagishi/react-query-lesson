import { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchA: VFC = () => {
  const navigate = useNavigate()
  const { tasks, isLoading, isError } = useClassicalFetch()
  console.log('ClassicalFetchA: task', tasks)
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>
      {isError && <p className="text-center text-red-500">Error</p>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tasks?.map((task) => <p key={task.id}>{task.title}</p>)
      )}
      <ChevronDoubleRightIcon
        onClick={() => navigate('/fetch-b')}
        className=" h-5 w-5 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
