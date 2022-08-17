import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IUser } from "../../../models/IUser";
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";


export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
	setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
	setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
	setError: (payload: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: payload }),
	login: (username: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true))
			setTimeout(async () => {

				const response = await UserService.getUsers()
				const mockUser = response.data.find(user => user.username === username && user.password === password)
				if (mockUser) {
					localStorage.setItem('auth', 'true')
					localStorage.setItem('username', mockUser.username)
					dispatch(AuthActionCreators.setIsAuth(true))
					dispatch(AuthActionCreators.setUser(mockUser))
				} else {
					dispatch(AuthActionCreators.setError('bad password or username'))
				}
				dispatch(AuthActionCreators.setIsLoading(false))
			}, 2000)
		} catch (error) {
			dispatch(AuthActionCreators.setError('Error in login'))
		}
	},
	logout: () => async (dispatch: AppDispatch) => {

		localStorage.removeItem('auth')
		localStorage.removeItem('username')
		dispatch(AuthActionCreators.setUser({} as IUser))
		dispatch(AuthActionCreators.setIsAuth(false))

	}
}