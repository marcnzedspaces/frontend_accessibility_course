import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accessible-data-table',
  templateUrl: './angular-table-caption-example.html'
})
export class AccessibleDataTableComponent {
  @Input() captionId = 'production-table-caption';
  @Input() caption = 'Monthly FFB production by estate';
  @Input() rows = [
    { estate: 'North Estate', target: 1200, actual: 1080, status: 'Below target' },
    { estate: 'South Estate', target: 980, actual: 1015, status: 'Above target' }
  ];
}
