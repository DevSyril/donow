import { DayTasks } from '@/components/DayTasks'
import { TaskCalendar } from '@/components/TaskCalendar'
import React from 'react'

export default function Calendar() {
  return (
    <div className='mt-10 w-full justify-center items-center flex'>

      <TaskCalendar />

    </div>
  )
}
