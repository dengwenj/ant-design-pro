import React, { useState } from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import { ProTable, TableDropdown } from '@ant-design/pro-components'

import { Persons } from './data'

import type { PageHeaderProps } from 'antd'
import type { ProColumns } from '@ant-design/pro-components'
import type { IPerson } from './data'

const header: Partial<PageHeaderProps> = {
  title: '你好 提拾'
}

const columns: ProColumns<IPerson>[] = [
  {
    dataIndex: 'name',
    title: '姓名',
  },
  {
    dataIndex: 'age',
    title: '年龄'
  },
  {
    dataIndex: 'sex',
    title: '性别'
  },
  {
    dataIndex: 'hobby',
    title: '爱好',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '敲代码',
        status: 'Error',
      },
      closed: {
        text: '睡觉',
        status: 'Success',
      },
    }
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    sorter: true,
  },
  {
    title: '操作',
    key: 'option',
    valueType: 'option',
    render: (text, record, index, action) => {
      console.log(text)
      console.log(record)
      console.log(action)
      return [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable(record.id)
          }}
        >
          编辑
        </a>,
        <a href='http://dengwj.vip/' target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
        <TableDropdown
          key="actionGroup"
          onSelect={() => action?.reload()}
          menus={[
            { key: 'copy', name: '复制' },
            { key: 'delete', name: '删除' },
          ]}
        />,
      ]
    }
  }
]

const Dengwj: React.FC = () => {
  const [persons, setPersons] = useState(Persons)

  const handleSumit = (params: any) => {
    const filterPerson = Persons.filter((item) => {
      return item.name === params.name
    })
    setPersons(filterPerson)
  }

  return (
    <PageContainer header={header}>
      <ProTable<IPerson>
        columns={columns}
        request={(params, sort, filter) => {
          console.log(params, sort, filter)

          return Promise.resolve({
            data: persons,
            success: true,
          })
        }}
        search={{
          defaultCollapsed: false
        }}
        editable={{
          type: 'multiple',
          // 行保存的时候
          onSave() {},
          // 行删除时候
          onDelete() {}
        }}
        onSubmit={handleSumit}
        pagination={{
          pageSize: 10,
          onChange: (page) => {
            console.log(page)
          }
        }}
      />
    </PageContainer>
  );
};

export default Dengwj
