import { makeAutoObservable } from "mobx";


class UserPaginationStore {
	step: number = 0
	maxStep: number = 3;


	constructor() {
		makeAutoObservable(this)
	}

	setStep = (newStep: number) => {
		this.step = newStep;
	}

}

export default new UserPaginationStore();