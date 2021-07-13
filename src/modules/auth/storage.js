import { setBearerToken } from '@/http'

export const setHeaderToken = token => setBearerToken(token)
export const getLocalToken = () => localStorage.getItem('token')
export const deleteToken = () => localStorage.removeItem('token')
export const setlocalToken = token => localStorage.setItem('token', token)
