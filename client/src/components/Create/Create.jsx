import React,{ useState } from 'react';
import {useDispatch} from 'react-redux';
import { createContact } from '../../redux/actions';
import './Create.css';

export const Create = () => {
    const dispatch = useDispatch();
    let [modal,setModal] = useState(false)
    let [form,setForm] = useState({
        name: '',
        lastname: '',
        phone: '',
        address: ''
    })
    let [error,setError] = useState({
        name: '',
        lastname: '',
        phone: '',
        address: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
        handleError(e);
    }

    const handleError = (e) => {
        const prop = e.target.name;
        const value = e.target.value.trim();
        switch(prop){
            case "name":
                if(!value.length){
                    return setError({
                        ...error,
                        "name": "Name is required"
                    })
                }
                return setError({
                    ...error,
                    "name": ''
                })
            case "lastname":
                if(!value.length){
                    return setError({
                        ...error,
                        "lastname": "Lastname is required"
                    })
                }
                return setError({
                    ...error,
                    "lastname": ''
                })
            case "phone":
                if(!value.length){
                    return setError({
                        ...error,
                        "phone": "Phone is required"
                    })
                }
                if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value)){
                    return setError({
                        ...error,
                        "phone": "Example: (711) 757-3722"
                    })
                }
                return setError({
                    ...error,
                    "phone": ''
                })
            default:
                if(!value.length){
                    return setError({
                        ...error,
                        "address": "Address is required"
                    })
                }
                return setError({
                    ...error,
                    "address": ''
                })
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(error.name || error.lastname || error.address || error.phone){
            return;
        }
        dispatch(createContact({
            name:form.name.trim(),
            lastname:form.lastname.trim(),
            phone:form.phone.trim(),
            address:form.address.trim(),
        }))
        setModal(false)
        setForm({
            name:'',
            lastname:'',
            phone:'',
            address:'',
        })
    }

    return (
        <div>
            <div onClick={()=>setModal(true)}>
                    <i className="fa-solid fa-circle-plus create fa-3x"></i>
            </div>
            {
                modal &&
                    <form className='modal' onSubmit={handleSubmit}>
                        <div className='modal-content'>
                            <div className='close-div' onClick={()=>{setModal(false);setForm({name:'',lastname:'',phone:'',address:''})}}>
                                <i className="fa-sharp fa-solid fa-square-xmark fa-xl"></i></div>
                            <h2 className='title-modal'>Create new contact</h2>
                            <input type='text' className={error.name?'input-error':'input'} value={form.name} onChange={handleChange} name='name' placeholder='Name...' autoComplete='off' required/>
                            {error.name && <p>{error.name}</p>}
                            <input type='text' className={error.lastname?'input-error':'input'} value={form.lastname} onChange={handleChange} name='lastname' placeholder='Lastname...' autoComplete='off' required/>
                            {error.lastname && <p>{error.lastname}</p>}
                            <input type='text' className={error.phone?'input-error':'input'} value={form.phone} onChange={handleChange} name='phone' placeholder='Phone...' autoComplete='off' required/>
                            {error.phone && <p>{error.phone}</p>}
                            <input type='text' className={error.address?'input-error':'input'} value={form.address} onChange={handleChange} name='address' placeholder='Address...' autoComplete='off' required/>
                            {error.address && <p>{error.address}</p>}
                            <input type='submit'/>              
                        </div>
                    </form>
            }
        </div>
    )
}
