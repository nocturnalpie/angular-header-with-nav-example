import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'ml-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	@Input() title!: string;
	@Input() drawer!: MatSidenav;
	@Input() noNav!: boolean;

	get showNav(): boolean {
		if (typeof this.noNav !== 'boolean') {
			return this.noNav === undefined;
		}
		return !this.noNav;
	}

	constructor() { }

}
