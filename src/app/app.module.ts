import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { HttpModule, Http } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';


import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/authentication/login/login';
import { RegisterPage } from '../pages/authentication/register/register';
import { ResetpwdPage } from '../pages/authentication/resetpwd/resetpwd';
import { ListaConversazioniPage } from '../pages/conversation-list/conversation-list';
import { DettaglioConversazionePage } from '../pages/conversation-detail/conversation-detail';
import { ProfilePage } from '../pages/profile/profile';
import { InfoConversationPage } from '../pages/info-conversation/info-conversation';
import { InfoMessagePage } from '../pages/info-message/info-message';

// import { AngularFireModule } from 'angularfire2';
import * as firebase from "firebase";
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from '../providers/auth-service';
import { ChatPresenceHandler } from '../providers/chat-presence-handler';
import { UploadService } from '../providers/upload-service/upload-service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavProxyService } from '../providers/nav-proxy';
import { PlaceholderPage } from '../pages/placeholder/placeholder';
import { PopoverPage } from '../pages/popover/popover';
import { PopoverProfilePage } from '../pages/popover-profile/popover-profile';
import { UpdateImageProfilePage } from '../pages/update-image-profile/update-image-profile';

//import { FirebaseProvider } from '../providers/firebase-provider';

// SQLite

import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { MessagingService } from '../providers/messaging-service';
import { UserService } from '../providers/user/user';
import { GroupService } from '../providers/group/group';
import { AutosizeDirective } from '../directives/autosize/autosize';
import { DatabaseProvider } from '../providers/database/database';
import { ChatConversationsHandler } from '../providers/chat-conversations-handler';
import { ChatArchivedConversationsHandler } from '../providers/chat-archived-conversations-handler';
import { ChatConversationHandler } from '../providers/chat-conversation-handler';
import { ChatManager } from '../providers/chat-manager/chat-manager';
import { ChatContactsSynchronizer } from '../providers/chat-contacts-synchronizer';



import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TiledeskConversationProvider } from '../providers/tiledesk-conversation/tiledesk-conversation';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { ArchivedConversationsPage } from '../pages/archived-conversations/archived-conversations';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    //UserDetailsPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage,
    ProfilePage,
    ListaConversazioniPage,
    DettaglioConversazionePage,
    PlaceholderPage,
    PopoverPage,
    PopoverProfilePage,
    UpdateImageProfilePage,
    AutosizeDirective,
    InfoConversationPage,
    InfoMessagePage,
    ArchivedConversationsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      firebaseConfig : {
        apiKey: "AIzaSyCNPFpNwq9h5oiOSxEDifxtDFWRoTcim4o",
        authDomain: "chat-app-8391d.firebaseapp.com",
        databaseURL: "https://chat-app-8391d.firebaseio.com",
        projectId: "chat-app-8391d",
        storageBucket: "chat-app-8391d.appspot.com",
        messagingSenderId: "701168043320"
      },
      appConfig: {
        tenant:"Chat App"
      }
    }),
    IonicStorageModule.forRoot({
      name: "Chat App",
      storeName: 'contacts',
      driverOrder: ['indexeddb','sqlite', 'websql', 'indexeddb', 'localstorage']
    })
    // AngularFireModule.initializeApp(this.firebaseConfig)
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    LoginPage,
    RegisterPage,
    ResetpwdPage,
    ProfilePage,
    ListaConversazioniPage,
    DettaglioConversazionePage,
    PlaceholderPage,
    PopoverPage,
    PopoverProfilePage,
    UpdateImageProfilePage,
    InfoConversationPage,
    InfoMessagePage,
    ArchivedConversationsPage
  ],
  providers: [
    //ApplicationContext,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite,
    AuthService,
    ChatPresenceHandler,
    NavProxyService,
    MessagingService,
    UserService,
    UploadService,
    ChatManager,
    ChatConversationsHandler,
    ChatArchivedConversationsHandler,
    ChatConversationHandler,
    ChatContactsSynchronizer,
    GroupService,
    TiledeskConversationProvider,
  ]
})
export class AppModule {}
