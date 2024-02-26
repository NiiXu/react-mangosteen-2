import React from 'react'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import { Topnav } from '../components/Topnav'
import {TimeRangePicker} from '../components/TimeRangePicker'
import {ItemsSummary} from './ItemsPage/ItemsSummary'
import {ItemsList} from './ItemsPage/ItemsList'
import styled from 'styled-components';

const Div = styled.div`
  background: linear-gradient(0deg, rgba(143,76,215,1) 0%, rgba(92,51,190,1) 100%);
  `
export const ItemsPage: React.FC = () => {
    return (
        <div>
           <Div>
               <Topnav/>
               <TimeRangePicker/>
           </Div>
            <ItemsSummary/>
            <ItemsList/>
            <AddItemFloatButton/>
        </div>
    )
}
