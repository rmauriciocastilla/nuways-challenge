import React,{ useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Contacts } from './components/Contacts/Contacts';
import { getContacts } from './redux/actions';
import { Create } from './components/Create/Create';
import './App.css';

function App() {
  const dispatch = useDispatch();
  let contacts = useSelector(s=>s.contacts);

  useEffect(()=>{
    dispatch(getContacts());
  })
  return(
    <div>
      <h1 className='title'>Address Book</h1>
      {contacts.length>0 && <Contacts contacts={contacts}/>}
      <Create/>
    </div>
  )
}

export default App;
