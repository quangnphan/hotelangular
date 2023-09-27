import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hotel Test';
  number = 10;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title= 'Room List';

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amentities: 'Air conditioner, free wifi',
        price: 500,
        photos: 'https://images.unplash.com/photo-1518791841217-8f162f1e1131',
        checkinTime: new Date('11-Nov-2011'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room 2',
        amentities: 'Air conditioner, free wifi',
        price: 600,
        photos: 'https://images.unplash.com/photo-1518791841217-8f162f1e1131',
        checkinTime: new Date('11-Nov-2011'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.44312,
      },
      {
        roomNumber: 3,
        roomType: 'Deluxe Room 3',
        amentities: 'Air conditioner, free wifi',
        price: 700,
        photos: 'https://images.unplash.com/photo-1518791841217-8f162f1e1131',
        checkinTime: new Date('11-Nov-2011'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 1.2,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room 4',
      amentities: 'Air conditioner, free wifi',
      price: 700,
      photos: 'https://images.unplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date('11-Nov-2011'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 1.2,
    }

    this.roomList = [...this.roomList, room]
  }
}
