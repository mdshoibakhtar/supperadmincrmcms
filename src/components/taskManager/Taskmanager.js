import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import TaskManagerAside from './taskManagerAside/TaskManagerAside'
import { Outlet } from 'react-router-dom'

function Taskmanager() {
    const breadCrumbsTitle = {
        id: "121231",
        title_1: "Organisation Settings",
        title_2: "Module Settings",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <section className='m-4 h-72vh'>
                <div className='card'>
                    <div className='row '>
                        <div className='col-xl-3'>
                            <div className='card'>
                                <TaskManagerAside />
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Taskmanager