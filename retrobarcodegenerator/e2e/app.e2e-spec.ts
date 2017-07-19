import { RetrobarcodegeneratorPage } from './app.po';

describe('retrobarcodegenerator App', () => {
  let page: RetrobarcodegeneratorPage;

  beforeEach(() => {
    page = new RetrobarcodegeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
