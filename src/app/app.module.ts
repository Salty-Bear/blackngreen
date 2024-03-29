import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth, user } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage'

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { User } from 'src/model/user.model';

/* ###################################
  angular material imports
  ####################################
*/

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { AuthInterceptorService } from 'src/services/auth-interceptor.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar';




const msalConfig = {
  auth: {
    clientId: 'YOUR_MICROSOFT_CLIENT_ID',
  },
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideRemoteConfig(() => getRemoteConfig()),
    BrowserAnimationsModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
