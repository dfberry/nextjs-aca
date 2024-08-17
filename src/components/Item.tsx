'use client'
import { useTransition } from 'react'

const Item = ({ item }:any) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div className="flex space-x-4 p-4 border rounded-lg shadow-md">
      <div className="flex-1">{item.id}</div>
      <div className="flex-1">{item.name}</div>
      <div className="flex-1">{item.description}</div>
    </div>
  )
}

export default Item
