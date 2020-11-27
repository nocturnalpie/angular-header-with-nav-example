import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { isEmpty, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

	get errorCode(): number {
		return isNaN(this.errorCodeParam)
			? this.defaultErrorCode
			: this.errorCodeParam;
	}

	private errorCodeParam: number;
	private defaultErrorCode = 404;
	private destroy$: Subject<void> = new Subject();

	constructor(
		private readonly route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.paramMap.pipe(takeUntil(this.destroy$))
			.subscribe(params =>
				this.errorCodeParam = parseInt(params.get('errorCode'), 10)
			);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
