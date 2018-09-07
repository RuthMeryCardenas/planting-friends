

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WallComponent } from './wall/wall.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    WallComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
