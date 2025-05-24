import { bootstrapApplication } from '@angular/platform-browser';
import { UserListComponent } from './app/components/user-list/user-list.component';

bootstrapApplication(UserListComponent)
  .catch(err => console.error(err));
