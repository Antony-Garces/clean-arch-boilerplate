import React from 'react'
import { resetUser } from '@/redux/slices/user.slice';
import { useDispatch } from 'react-redux';
import { fetchMorty } from '../services/rick-and-morty';
import { useState } from 'react';
import { UserEmptyState } from '../../../models/user.type';

const ResetHomeButton = () => {
  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch(resetUser())};

  return (
    <button onClick={dispatchAction}>dispacth reset action</button>
  )
}

export default ResetHomeButton;


