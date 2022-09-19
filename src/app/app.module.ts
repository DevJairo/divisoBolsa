import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { IndexComponent } from './wizard/sections/index/index.component';
import { WizardModule } from './wizard/wizard.module';
import { PdfComponent } from './wizard/pdf/pdf.component';

const routes: Routes = [
  { path: '', component: PdfComponent }
  // { path: '', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WizardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
