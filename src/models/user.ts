export class User {
  public _id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public createdAt: string;
  public updatedAt: string;
  constructor(
    $_id: string,
    $firstName: string,
    $lastName: string,
    $email: string,
    $createdAt: string,
    $updatedAt: string
  ) {
    this._id = $_id;
    this.firstName = $firstName;
    this.lastName = $lastName;
    this.email = $email;
    this.createdAt = $createdAt;
    this.updatedAt = $updatedAt;
  }
}
