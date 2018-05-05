import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { LogarPage } from '../pages/logar/logar';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TipoAjudaPage } from '../pages/tipo-ajuda/tipo-ajuda';
import { TipoAjudaCelularPage } from '../pages/tipo-ajuda-celular/tipo-ajuda-celular';
import { TipoAjudaComputadorPage } from '../pages/tipo-ajuda-computador/tipo-ajuda-computador';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogarPage,
    CadastroPage,
    TipoAjudaPage,
    TipoAjudaCelularPage,
    TipoAjudaComputadorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogarPage,
    CadastroPage,
    TipoAjudaPage,
    TipoAjudaCelularPage,
    TipoAjudaComputadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
