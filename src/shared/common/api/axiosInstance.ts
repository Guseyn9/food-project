import React from 'react'
import axios from 'axios'

export const axiosInastanse = axios.create({
    baseURL: 'https://65c8ac5ca4fbc162e1120509.mockapi.io',
})