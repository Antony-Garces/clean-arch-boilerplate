import { RickAndMortyAdapter } from '../adapter/rick-and-morty-adapter';
import { Apiuser } from '../../../models/user.type';
export const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/2';
export const rickAndMortLocationUrl = 'https://rickandmortyapi.com/api/location';

export const fetchMorty = async(url: string) => {
  return fetch(url)
  .then(res=> res.json())
  .then(res => RickAndMortyAdapter(res))
}