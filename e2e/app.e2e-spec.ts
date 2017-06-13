import { ANG2PRJPage } from './app.po';

describe('ang2-prj App', () => {
  let page: ANG2PRJPage;

  beforeEach(() => {
    page = new ANG2PRJPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
