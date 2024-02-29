import React, {useState} from 'react'
import {AddItemFloatButton} from '../components/AddItemFloatButton'
import {TopNav} from '../components/TopNav'
import type {TimeRange} from '../components/TimeRangePicker'
import {TimeRangePicker} from '../components/TimeRangePicker'
import {ItemsSummary} from './ItemsPage/ItemsSummary'
import {ItemsList} from './ItemsPage/ItemsList'
import styled from 'styled-components'
import {TopMenu} from '../components/TopMenu'
import {useMenuStore} from '../stores/useMenuStore'
import { Icon } from '../components/Icon'

const Div = styled.div`
  background: linear-gradient(0deg, rgba(143, 76, 215, 1) 0%, rgba(92, 51, 190, 1) 100%);
`

export const ItemsPage: React.FC = () => {
    const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            user_id: 1,
            kind: 'incomes',
            amount: 1000,
            tag_ids: [1],
            happen_at: '2023-01-01T00:00:00.000Z',
            created_at: '2023-01-01T00:00:00.000Z',
            updated_at: '2023-01-01T00:00:00.000Z',
        },
        {
            id: 2,
            user_id: 2,
            kind: 'incomes',
            amount: 1000,
            tag_ids: [1],
            happen_at: '2023-01-01T00:00:00.000Z',
            created_at: '2023-01-01T00:00:00.000Z',
            updated_at: '2023-01-01T00:00:00.000Z',
        }
    ])
    //上下文===局部的全局变量
    //全局变量===全局的上下文
    const { visible } = useMenuStore()
    return (
        <div>
            <Div>
                <TopNav/>
                <TimeRangePicker selected={timeRange} onSelected={setTimeRange}/>
            </Div>
            <ItemsSummary/>
            <ItemsList items={items}/>
            <AddItemFloatButton/>
            {visible ? <TopMenu/> : null}

        </div>
    )
}
