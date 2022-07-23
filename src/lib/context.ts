import type { Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

export type IContextKey<T> = { _type: T };

export function createContextKey<T>(): IContextKey<T> {
	return {} as IContextKey<T>;
}

export function getFromContext<T>(key: IContextKey<T>) {
	const context = getContext<Writable<T>>(key);
	if (!context) {
		throw new Error(`Must be used inside the component's context.`);
	}
	return context;
}

export function createContext<T>(key: IContextKey<T>, intialValue: T): Writable<T> {
	const store = writable(intialValue);
	setContext(key, store);
	return store;
}
