import type { IRoom } from "#/data/room";
import roomsData from "#/data/rooms.json";

export function getRooms(): Promise<IRoom[]> {
	return new Promise((resolve) => {
		setTimeout(() => resolve(roomsData as IRoom[]), 100);
	});
}
