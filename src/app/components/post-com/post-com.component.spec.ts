import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComComponent } from './post-com.component';

describe('PostComComponent', () => {
  let component: PostComComponent;
  let fixture: ComponentFixture<PostComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
