import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from './footer.component';
import { Router } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), FooterComponent],
    }).compileComponents();
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //should navigate to the correct path when go() is called
  it('should navigate to the correct path when go() is called', () => {
    spyOn(router, 'navigateByUrl');
    component.go('home');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  //should return true if the current url includes the path
  it('should return true if the current url includes the path', () => {
    spyOnProperty(router, 'url').and.returnValue('/home');
    expect(component.isActive('home')).toBeTrue();
  });

  //should return false if the current url does not include the path
  it('should return false if the current url does not include the path', () => {
    spyOnProperty(router, 'url').and.returnValue('/home');
    expect(component.isActive('spots')).toBeFalse();
  });


  //should apply the 'active' class if isActive returns true
  it('should apply the active class if isActive returns true', () => {
    spyOn(component, 'isActive').and.returnValue(true);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('div.nav-item.active');
    expect(button).toBeTruthy();
  });
});
