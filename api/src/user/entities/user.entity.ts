export class UserEntity {
  constructor(id?: number, name?: string, email?: string, birthAt?: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthAt = birthAt;
  }

  id: number;
  name: string;
  email: string;
  birthAt: string;
}
