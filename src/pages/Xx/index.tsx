import React, { FC } from "react"
import { useAccess, Access, useModel } from 'umi';

const Xx: FC = () => {
  const access = useAccess()
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState')
  console.log(initialState, loading, refresh, setInitialState);


  return (
    <div>
      <Access accessible={access.canAdmin!} fallback={<div>哈哈哈</div>}>
        有权限就显示这个组件
      </Access>
    </div>
  )
}

export default Xx
