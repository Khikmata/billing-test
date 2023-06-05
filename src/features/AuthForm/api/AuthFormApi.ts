import UserStore from "app/store/UserStore";
import axios from "axios";
import { NavigateFunction } from "react-router";


interface authFormApiProps {
	email: string;
	password: string;
	navigate: NavigateFunction;
}
export const AuthFormApi = async ({ email, password, navigate }: authFormApiProps) => {

	// Если аккаунт существует, то заходим на него
	try {
		await axios.post(`http://localhost:5001/login`, { email: email, password: password }, { headers: { 'Content-Type': 'application/json' } }
		).then((res) => {
			UserStore.authorizeUser(res.data.user);
			navigate('/calculation')
		})
	} catch (error) {
		console.log(error)
	}

	//Иначе регистрируем его
	try {
		await axios.post(`http://localhost:5001/register`, { email: email, password: password }, { headers: { 'Content-Type': 'application/json' } })
	} catch (error) {
		console.log(error)
	}
}
