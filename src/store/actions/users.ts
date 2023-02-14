import {UserType} from 'types';

export const plusUserCount = () => ({
  type: 'PLUS_USER_COUNT',
})

export const createUser = (user: UserType) =>({
  type: 'CREATE_USER',
  payload: user
})
