import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	@Input() noNav: boolean;
	@Input() drawer: MatSidenav;
	@Input() title: string;

	get showNav(): boolean {
		if (typeof this.noNav !== 'boolean') {
			return this.noNav === undefined;
		}
		return !this.noNav;
	}

	constructor() { }

}
