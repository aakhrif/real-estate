import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabbed',
  templateUrl: './tabbed.component.html',
  styleUrls: ['./tabbed.component.css']
})
export class TabbedComponent {
  @Input() tabTitles?: string[];

  @Input() tabContents: string[] = [];
  activeTabIndex: number = 0;

  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }
}
