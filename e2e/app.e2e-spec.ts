import { Ang4CliAppPage } from './app.po';

describe('ang4-cli-app App', () => {
  let page: Ang4CliAppPage;

  beforeEach(() => {
    page = new Ang4CliAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
