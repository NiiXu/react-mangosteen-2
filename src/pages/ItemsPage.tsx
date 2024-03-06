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

const Div = styled.div`
  background: linear-gradient(0deg, rgba(143, 76, 215, 1) 0%, rgba(92, 51, 190, 1) 100%);
`

export const ItemsPage: React.FC = () => {
    const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')

    //上下文===局部的全局变量
    //全局变量===全局的上下文
    const { visible,setVisible } = useMenuStore()
    return (
        <div>
            <Div>
                <TopNav/>
                <TimeRangePicker selected={timeRange} onSelected={setTimeRange}/>
            </Div>
            <ItemsSummary/>
            <ItemsList/>
            <AddItemFloatButton/>
            <TopMenu visible={visible} onClickMask={() => { setVisible(false) }} />

        </div>
    )
}
