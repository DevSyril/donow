"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { DayTasks } from "./DayTasks";
export const TaskCalendar = () => {
    const [date, setDate] = React.useState(new Date()); // Initialisation avec une date valide

    return (
        <div className="w-full items-center flex flex-col gap-6">

            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow w-fit"
            />

            <DayTasks date={ date.toDateString() } />

        </div>
    );
}
