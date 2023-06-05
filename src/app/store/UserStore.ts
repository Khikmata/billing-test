import { makeAutoObservable } from "mobx";

interface UserData {
	email: string;
	password: string;
}

class UserStore {
	user: null | UserData = null;

	constructor() {
		makeAutoObservable(this)
		this.loadUserFromLocalStorage();
	}

	authorizeUser = (data: UserData) => {
		this.user = data;
		this.saveUserToLocalStorage();
	}

	deauthorizeUser = () => {
		this.user = null;
		this.removeUserFromLocalStorage();
	};

	saveUserToLocalStorage = () => {
		localStorage.setItem("user", JSON.stringify(this.user));
	};

	loadUserFromLocalStorage = () => {
		const userData = localStorage.getItem("user");
		if (userData) {
			this.user = JSON.parse(userData);
		}
	};

	removeUserFromLocalStorage = () => {
		localStorage.removeItem("user");
	};
}

export default new UserStore();