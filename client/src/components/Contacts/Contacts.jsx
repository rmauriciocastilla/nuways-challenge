import React from 'react'
import { Contact } from '../Contact/Contact'
import './Contacts.css';

export const Contacts = ({contacts}) => {
  return (
    <div className='contacts-container'>{contacts.map(c=><Contact data={c} key={c.id}/>)}</div>
  )
}
