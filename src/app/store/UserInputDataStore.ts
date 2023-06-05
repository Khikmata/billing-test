import { makeAutoObservable } from "mobx";


class UserInputDataStore {
	inputValues: string[] = ['', ''];
	sortType: string = 'По порядку';
	orderBy: string = 'ASC'

	constructor() {
		makeAutoObservable(this)
	}
	setInput = (input: string[]) => {
		this.inputValues = input;
	}
}

export default new UserInputDataStore();