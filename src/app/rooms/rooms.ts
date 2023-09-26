export interface Room {
    totalRooms: number,
    availableRooms: number,
    bookedRooms: number,
}

export interface RoomList {
    roomNumber: number,
    roomType: string,
    amentities: string,
    price: number,
    photos: string,
    checkinTime: Date,
    checkoutTime: Date,
    rating: number
}