import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FindService } from './../../services/find.service';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ListComponent } from './list.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

fdescribe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FindService],
      imports: [ RouterTestingModule, HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.resultsArray = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  });

    it('Data parser should return data with length 10.', () => {
    let input = 'This should be the input of the search.';
    let output = component.dateParser(input);
    expect(output.length).toEqual(10);
  });

    it('Image parser should parse the default image if none is given', () => {
    let input = '';
    let output = component.imgParser(input);
    expect(output).toEqual('https://image.slidesharecdn.com/budgettravellingrevb-150910113232-lva1-app6892/95/budget-travelling-7-638.jpg?cb=1441959126');
  });

    it('Image parser should parse the given image', () => {
    let input = 'some/sample//image/url';
    let output = component.imgParser(input);
    expect(output).toEqual('some/sample//image/url');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
