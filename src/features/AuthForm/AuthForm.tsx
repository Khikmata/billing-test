import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'shared/Button';
import { Input } from 'shared/Input';
import styles from './AuthForm.module.scss';
import { AuthFormApi } from './api/AuthFormApi';
import { validateData } from './helpers/AuthFormValidation';

export const AuthForm = observer(() => {

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const [authValidated, setAuthValidated] = useState(false)

	const navigate = useNavigate();

	const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}
	const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	const handleAuth = async (e: React.FormEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateData({ email, password, setEmailError, setPasswordError })) {
			AuthFormApi({ email, password, navigate })
		}
	}

	useEffect(() => {
		if (validateData({ email, password, setEmailError, setPasswordError })) {
			setAuthValidated(true)
		} else {
			setAuthValidated(false)
		}
	}, [password, email])


	return (
		<>
			<p>Авторизация</p>
			<form className={styles['authform']}>

				<Input label={'Логин'} type='email' value={email} changeHandler={handleEmailInput} />

				{emailError.length > 0 &&
					<p className='errormessage'>
						{emailError}
					</p>
				}
				<Input label={'Пароль'} type='password' value={password} changeHandler={handlePasswordInput} />

				{passwordError.length > 0 &&
					<p className='errormessage'>
						{passwordError}
					</p>
				}
				<Button isDisabled={!authValidated} onClick={(e) => handleAuth(e)} variation='primary' place='right'>
					ВОЙТИ
				</Button>
			</form>
		</>
	)
})
