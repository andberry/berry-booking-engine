import { computed, makeObservable, observable } from "mobx";
import type { IRoom } from "#/data/room";

class CartStore {
	rooms: IRoom[] = [];

	constructor() {
		makeObservable(this, {
			rooms: observable,
			roomsNumber: computed,
			total: computed,
		});
	}

	addRoom(room: IRoom) {
		if (!this.rooms.find((r) => r.id === room.id)) {
			this.rooms.push(room);
		}
	}

	removeRoom(id: string) {
		this.rooms = this.rooms.filter((r) => r.id !== id);
	}

	get roomsNumber() {
		return this.rooms.length;
	}

	get total() {
		return this.rooms.reduce((sum, r) => sum + r.ratePerNight, 0);
	}
}

export const cartStore = new CartStore();
