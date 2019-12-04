import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SolcreAuthService } from './solcre-auth.service';
import { SolcreAuthLibraryComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
    declarations: [
        SolcreAuthLibraryComponent,
    ], 
    imports: [
        LocalStorageModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        LocalStorageModule.forRoot({
            prefix: 'columnis-manager',
            storageType: 'localStorage'
        }),
    ],
    exports: [
        SolcreAuthLibraryComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        SolcreAuthService,
    ]
})
export class SolcreAuthModule { } 