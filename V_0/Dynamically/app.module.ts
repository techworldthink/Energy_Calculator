
// Necessary imports of component is done 
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
  
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { AddInputComponent } from './add-input/add-input.component'; 
  
@NgModule({ 
  declarations: [ 
    AppComponent, 
    AddInputComponent 
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 