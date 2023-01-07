import React from 'react'
import { modifyUser } from '@/redux/slices/user.slice';
import { useDispatch } from 'react-redux';

const ModifyHomeButton = () => {
  const dispatch = useDispatch();
  const dispatchAction = () => {
    dispatch(modifyUser({name: 'Antony Garces', id: 10}))};

  return (
    <button onClick={dispatchAction}>Dispacth modify action</button>
  )
}

export default ModifyHomeButton;


