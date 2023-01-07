import { Apiuser, user } from '@/models';
import { stringify } from 'querystring';

export const RickAndMortyAdapter = (user: Apiuser): user => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species,
  }
}