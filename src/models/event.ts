import { User } from './user';
export class Event {
  _id: string;
  title: string;
  description: string;
  startsAt: Date;
  capacity: number;
  owner: User;
  attendees: User[];
  createdAt: Date;
  updatedAt: Date;

  constructor(
    $_id: string,
    $title: string,
    $description: string,
    $startsAt: Date,
    $capacity: number,
    $owner: User,
    $attendees: User[],
    $createdAt: Date,
    $updatedAt: Date
  ) {
    this._id = $_id;
    this.title = $title;
    this.description = $description;
    this.startsAt = $startsAt;
    this.capacity = $capacity;
    this.owner = $owner;
    this.attendees = $attendees;
    this.createdAt = $createdAt;
    this.updatedAt = $updatedAt;
  }
}
