import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './ui/auth/auth.component';
import { UserComponent } from './ui/user/user.component';
import { AuthService } from './auth-service';

const shared = [
  AuthComponent,
  UserComponent
]

@NgModule({
  imports: [CommonModule, ...shared],
  providers:[AuthService],
  exports:[...shared]
})
export class AuthLibModule {}
