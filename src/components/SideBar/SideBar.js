import React from 'react'
import './SideBar.css'
import Calender from '../../Image/calendar.png'
import Keep from '../../Image/keep.png'
import Tasks from '../../Image/tasks.png'
import Contacts from '../../Image/contacts.png'
import Maps from '../../Image/maps.png'
import { Tooltip } from 'react-tooltip'

const SideBar = () => {
  return (
    <div className='sidebar'>

      <div className='icons-div'>
        <img data-tooltip-id="calendar" data-tooltip-content="Calendar" src={Calender} alt="Calender" className="icons" />
         <Tooltip id="calendar" />
      </div>

    <div className='icons-div'>
      <img data-tooltip-id="keep" data-tooltip-content="Keep" src={Keep} alt="Keep" className="icons" />
      <Tooltip id="keep" />
    </div>

    <div className='icons-div'>
    <img src={Tasks} data-tooltip-id="tasks" data-tooltip-content="Tasks" alt="Tasks" className="icons" />
    <Tooltip id="tasks" />
    </div>

    <div className='icons-div'>
    <img src={Contacts} data-tooltip-id="contacts" data-tooltip-content="Contacts" alt="Contacts" className="icons" />
    <Tooltip id="contacts" />
    </div>

    <div className='icons-div'>
    <img src={Maps} data-tooltip-id="maps" data-tooltip-content="Maps" alt="Maps" className="icons-1" />
    <Tooltip id="maps" />
    </div>
    
    </div>
  )
}

export default SideBar