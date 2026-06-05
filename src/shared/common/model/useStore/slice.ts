import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    owner: '',
    registration: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout(state) {
        state.user = ''
        state.owner = ''
        localStorage.setItem('owner', '');
        localStorage.setItem('token', '');
      },
      setRegistration(state) {
        state.registration = !state.registration;
      },
      retrieveToken(state) {
        const storedToken = localStorage.getItem('token');
        const owner = localStorage.getItem('owner');
        if (storedToken) {
          state.user = storedToken
        }
        if (owner) {
          state.owner = owner
        }
      },
    },
})

export const { logout, setRegistration, retrieveToken } = authSlice.actions;

export default authSlice.reducer;