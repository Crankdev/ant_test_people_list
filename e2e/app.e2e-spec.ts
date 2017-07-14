import { AngMysqlPage } from './app.po';

describe('ang-mysql App', () => {
  let page: AngMysqlPage;

  beforeEach(() => {
    page = new AngMysqlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
