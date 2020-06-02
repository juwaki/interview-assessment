import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedListTableComponent } from './updated-list-table.component';

describe('UpdatedListTableComponent', () => {
  let component: UpdatedListTableComponent;
  let fixture: ComponentFixture<UpdatedListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
