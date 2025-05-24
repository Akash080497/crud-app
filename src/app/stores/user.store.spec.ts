import { UserStore } from './user.store';
import { User } from '../models/user.model';
import { beforeEach, describe, it } from 'node:test';

describe('UserStore', () => {
  let store: UserStore;

  beforeEach(() => {
    store = new UserStore();
  });

  it('should add a user', () => {
    const user: User = { id: 1, name: 'John', email: 'john@example.com' };
    store.addUser(user);
    expect(store.users$()).toContain(user);
  });

  it('should delete a user', () => {
    const user: User = { id: 1, name: 'John', email: 'john@example.com' };
    store.addUser(user);
    store.deleteUser(1);
    expect(store.users$()).not.toContain(user);
  });

  it('should update a user', () => {
    const user: User = { id: 1, name: 'John', email: 'john@example.com' };
    store.addUser(user);
    store.updateUser({ id: 1, name: 'Jane', email: 'jane@example.com' });
    expect(store.users$()[0].name).toBe('Jane');
  });
});
