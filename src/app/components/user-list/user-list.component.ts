import { Component, signal, computed, effect, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private nextId = 1;
  private users = signal<User[]>([]);

  name = signal('');
  email = signal('');

  readonly userList = computed(() => this.users());

  addUser() {
    if (!this.name() || !this.email()) return;
    this.users.update(users => [...users, { id: this.nextId++, name: this.name(), email: this.email() }]);
    this.name.set('');
    this.email.set('');
  }

  ngOnInit() {
  effect(() => console.log('Users:', this.userList()));
}


  deleteUser(id: number) {
    this.users.update(users => users.filter(user => user.id !== id));
  }
}
 