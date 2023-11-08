
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RouterModule } from '@angular/router';

import { registerLocaleData, PathLocationStrategy, LocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

import { NgChartsModule  } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule}from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { AuthenticationService } from './shared/services/authentication.service';
import { provideAuth,getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore,getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent,
        
    ],
    imports: [
        RouterModule,

        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TemplateModule,
        SharedModule,
        NzBreadCrumbModule,
        NzSpinModule,
        NgChartsModule,
        NgApexchartsModule,
        FullCalendarModule,
        AngularSvgIconModule.forRoot(),

        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => {
            const auth = getAuth();
            connectAuthEmulator(auth, 'https://localhost:9099', {disableWarnings: true}) ;
            return auth

        }),
        provideFirestore(() => {
            const firestore = getFirestore();
            connectFirestoreEmulator(firestore, 'https://localhost', 9098);
            return firestore
        }),

       
    ],
    providers: [
        {
            provide: NZ_I18N,
            useValue: en_US,
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        ThemeConstantService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
