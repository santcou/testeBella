import { TesteDeployPage } from './app.po';

describe('teste-deploy App', () => {
  let page: TesteDeployPage;

  beforeEach(() => {
    page = new TesteDeployPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
