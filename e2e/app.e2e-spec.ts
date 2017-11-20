import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display posts with their votes', () => {
    page.navigateTo();
    expect(page.getVotes()).toBeDefined();
  });

  it('should be able to upvote', async () => {
    page.navigateTo();
    const votes = await page.getVotes();
    await page.upvote();

    expect(page.getVotes()).toBe(votes + 1);
  });
});
