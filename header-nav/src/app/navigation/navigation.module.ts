import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
	declarations: [
		NavigationComponent,
		HeaderComponent,
		ErrorComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	exports: [
		NavigationComponent
	]
})
export class NavigationModule { }
