import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard-service';
import { SolcreAuthLibraryComponent } from './ng-solcre-auth.component';
import { CommonModule } from '@angular/common';
import { LocalStorageModule } from 'angular-2-local-storage';

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
    ],
    exports: [
        SolcreAuthLibraryComponent
    ],
    providers: [
        AuthService,
    ]
})
export class AuthModule { } 