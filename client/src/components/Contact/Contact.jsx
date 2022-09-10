import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { Update } from '../Update/Update';
import './Contact.css';

export const Contact = ({data}) => {
  const [modalUpdate,setModalUpdate] = useState(false)
  const dispatch = useDispatch();
  return (
    <div className='contact'>
      <h3>Name: {`${data.name} ${data.lastname}`}</h3>
      <h3>Phone: {data.phone}</h3>
      <h3>Address: {data.address}</h3>
      <div className='options'>
        <div onClick={()=>setModalUpdate(true)}>
          <i className="fa-sharp fa-solid fa-pen-to-square fa-xl"></i>
          {
            modalUpdate && <Update setModalUpdate={setModalUpdate} data={data}/>
          }
        </div>
        <div onClick={()=>dispatch(deleteContact(data.id))}>
          <i className="fa-sharp fa-solid fa-trash fa-xl"></i>
        </div>
      </div>
      
    </div>
  )
}
