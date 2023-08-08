import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutComponent } from './admin-layout.component';
import { SidebarComponent } from 'app/components/sidebar/sidebar.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { RouterTestingModule } from '@angular/router/testing';

// Test case to check creation of Admin Layout Component
describe('AdminLayoutComponent', () => {
  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLayoutComponent, SidebarComponent, DashboardComponent, TableListComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
