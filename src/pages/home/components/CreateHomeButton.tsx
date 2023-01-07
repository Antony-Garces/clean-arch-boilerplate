import React from 'react'
import { createUser } from '@/redux/slices/user.slice';
import { useDispatch } from 'react-redux';
import { UserEmptyState } from '../../../models/user.type';
import { fetchMorty, rickAndMortyUrl } from '../services/rick-and-morty';
import { useState, useEffect } from 'react';

const CreateHomeButton = () => {
  const dispatch = useDispatch();
  const [morty, setMorty] = useState(UserEmptyState);
  const getMorty = async () => {
    const result = await fetchMorty(rickAndMortyUrl)
    setMorty(result)
  };
  useEffect (()=>{
    getMorty()
  },[]);
  const dispatchAction = () => {
    dispatch(createUser(morty))};

  return (
    <button onClick={dispatchAction}>dispacth create action</button>
  )
}

export default CreateHomeButton;


