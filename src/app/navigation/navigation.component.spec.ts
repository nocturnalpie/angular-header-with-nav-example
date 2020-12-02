import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from './navigation.component';
import { NavigationModule } from './navigation.module';

describe('NavigationComponent', () => {
	let component: NavigationComponent;
	let fixture: ComponentFixture<NavigationComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [
				NoopAnimationsModule,
				NavigationModule,
				RouterTestingModule
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should compile', () => {
		expect(component).toBeTruthy();
	});
});
