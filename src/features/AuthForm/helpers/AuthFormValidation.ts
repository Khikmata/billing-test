interface ValidatorProps {
	setEmailError: React.Dispatch<React.SetStateAction<string>>
	setPasswordError: React.Dispatch<React.SetStateAction<string>>
	email: string;
	password: string;
}



export const validateData = ({ setEmailError, setPasswordError, email, password }: ValidatorProps): boolean => {
	const isPasswordValid = validatePass(setPasswordError, password);
	const isEmailValid = validateLogin(setEmailError, email);

	return isPasswordValid && isEmailValid;
};

const validatePass = (setPasswordError: React.Dispatch<React.SetStateAction<string>>, password: string): boolean => {

	if (!password) {
		setPasswordError('Заполните поле с паролем');
		return false;
	}

	if (password.length < 5) {
		setPasswordError('Пароль должен содержать не менее 5 символов');
		return false;
	}




	setPasswordError('');
	return true;
};

const validateLogin = (setEmailError: React.Dispatch<React.SetStateAction<string>>, email: string): boolean => {


	if (!email) {
		setEmailError('Заполните поле с логином');
		return false;
	}

	if (!/\S+@\S+\.\S+/.test(email)) {
		setEmailError('Логин должен быть в формате почты. Пример: hello@world.com');
		return false;
	}

	setEmailError('');
	return true;
};