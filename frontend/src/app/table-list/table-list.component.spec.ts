import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListComponent } from './table-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

// Test case to check creation of TableComponent
describe('TableListComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListComponent ],
      imports:[RouterTestingModule, HttpClientModule, MatTableModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
