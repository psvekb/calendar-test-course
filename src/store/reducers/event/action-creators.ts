import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventAction, SetGuestAction } from "./types";

export const EventActionCreators = {
	setGuests: (payload: IUser[]): SetGuestAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
	setEvents: (payload: IEvent[]): SetEventAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
	fetchGuests: () => async (dispatch: AppDispatch) => {
		try {
			const response = await UserService.getUsers()
			dispatch(EventActionCreators.setGuests(response.data))
		} catch (error) {
			console.log(error)
		}
	},
	createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
		try {
			const events = localStorage.getItem('events') || '[]'
			const json = JSON.parse(events) as IEvent[]
			json.push(event)
			dispatch(EventActionCreators.setEvents(json))
			localStorage.setItem('events', JSON.stringify(json))
		} catch (error) {
			console.log(error)
		}
	}
}