import React from 'react'
import { useModel } from 'umi'

export default function Hh() {
  const { name, age } = useModel('demo', (res) => {
    return {
      name: res.name,
      age: res.age
    }
  })
  const { add, count } = useModel('add', (res) => {
    return {
      add: res.add,
      count: res.count
    }
  })

  return (
    <div>
      <span>姓名：{name}</span>
      <span>年龄：{age}</span>
      <button onClick={add}>{count}</button>
    </div>
  )
}
