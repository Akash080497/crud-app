import { signal } from '@angular/core';
import { User } from '../models/user.model';

export class UserStore {
  private users = signal<User[]>([]);

  readonly users$ = this.users;

  addUser(user: User) {
    const current = this.users();
    this.users.set([...current, user]);
  }

  updateUser(updatedUser: User) {
    const updated = this.users().map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.users.set(updated);
  }

  deleteUser(id: number) {
    this.users.set(this.users().filter(user => user.id !== id));
  }

  getUserById(id: number): User | undefined {
    return this.users().find(user => user.id === id);
  }
}
