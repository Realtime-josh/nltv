export const setToken = (token) => localStorage.setItem('authorization', token);
export const getToken = () => localStorage.getItem('authorization');
export const deleteToken = () => localStorage.setItem('authorization', undefined);
export const setUserDetails = (userDetails) => localStorage.setItem('userDetails', userDetails);
export const getUserDetails = () => localStorage.getItem('userDetails');
export const deleteUserDetails = () => localStorage.setItem('userDetails', undefined);
export const setAuthState = (state) => localStorage.setItem('auth', state);
export const getAuthState = () => localStorage.getItem('auth');
export const deleteAuthState = () => localStorage.setItem('auth', undefined);