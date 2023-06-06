import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginForgotPasswordPage } from './login-forgot-password.page';

describe('LoginForgotPasswordPage', () => {
  let component: LoginForgotPasswordPage;
  let fixture: ComponentFixture<LoginForgotPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginForgotPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
