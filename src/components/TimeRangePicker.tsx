import React from 'react'
import s from './TimeRangePicker.module.scss'
import { Tabs } from './Tabs';
export type TimeRange = 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'

interface Props {
  selected: TimeRange
  onSelect: (selected: TimeRange) => void
}


export const TimeRangePicker: React.FC<Props> = ({ selected, onSelect }) => {
  const timeRanges: { key: TimeRange; text: string }[] = [
    { key: 'thisMonth', text: '本月' },
    { key: 'lastMonth', text: '上个月' },
    { key: 'thisYear', text: '今年' },
    { key: 'custom', text: '自定义时间' },
  ]
  return (
    <Tabs tabItems={timeRanges} value={selected} onChange={onSelect} className="m-t--0.5" />
  )
}
