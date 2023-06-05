import UserStore from "app/store/UserStore";
import axios, { AxiosError } from "axios";
import { NavigateFunction } from "react-router";


interface authFormApiProps {
	email: string;
	password: string;
	navigate: NavigateFunction;
	setPasswordError: React.Dispatch<React.SetStateAction<string>>
}
export const AuthFormApi = async ({ email, password, navigate, setPasswordError }: authFormApiProps) => {

	// Если аккаунт существует, то заходим на него
	try {
		await axios.post(`http://localhost:5001/login`, { email: email, password: password }, { headers: { 'Content-Type': 'application/json' } }
		).then((res) => {
			UserStore.authorizeUser(res.data.user);
			navigate('/calculation')
		})
	} catch (e) {
		const error = e as AxiosError;
		if (error && error.response && error.response.data) {
			setPasswordError(error.response.data.toString())
		}
	}
	//Иначе регистрируем его
	try {
		await axios.post(`http://localhost:5001/register`, { email: email, password: password }, { headers: { 'Content-Type': 'application/json' } })
	} catch (e) {
		const error = e as AxiosError;
		if (error && error.response && error.response.data) {
			setPasswordError(error.response.data.toString())
		}
	}
}
