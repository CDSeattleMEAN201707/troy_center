import { RegistrationformPage } from './app.po';

describe('registrationform App', () => {
  let page: RegistrationformPage;

  beforeEach(() => {
    page = new RegistrationformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
