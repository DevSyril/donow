import React from 'react'
import { Button } from './ui/button'
import { FaCirclePlus } from 'react-icons/fa6'
import { tasks } from '@/app/utils/datas'

export default function TasksList() {
    return (
        <div className='flex flex-col gap-8'>

            <div className="flex justify-between items-center">
                <h2 className="font-bold text-3xl">Liste des tâches</h2>
                <Button>
                    <FaCirclePlus className='text-2xl' />
                    Nouveau
                </Button>
            </div>

            <div className="flex flex-col gap-4">
                {tasks.map((task, index) => (
                    <div className="bg-white rounded-xl px-6 py-6 shadow-xl" key={index}>
                        <div className="border-l-4 border-green-600 px-2">
                            <h4 className='font-bold text-xl'> {task.title} </h4>
                            <p> {task.dueDate.toDateString()} </p>
                            <p> {task.description} </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
