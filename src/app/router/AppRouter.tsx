import UserStore from 'app/store/UserStore'
import { CalculationPage } from 'pages/CalculationPage'
import { HomePage } from 'pages/HomePage'
import { LoginPage } from 'pages/LoginPage'
import React from 'react'
import { Routes, Route, redirect } from 'react-router-dom'

export const AppRouter = () => {

	if (UserStore.user !== null) {
		redirect('/calculation')
	}
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/calculation' element={<CalculationPage />} />
		</Routes>
	)
}
