import { StringifyOptions } from "querystring";

export interface IEvent {
	author: string;
	guest: string;
	date: StringifyOptions;
	description: string;
}