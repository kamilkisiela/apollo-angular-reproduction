import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getVotes() {
    return element(by.css('[data-test-post="0"] [data-test="votes"]'))
      .getText()
      .then(text =>
        parseInt(
          text
            .replace('(', '')
            .replace(')', '')
            .replace(' votes', ''),
          0,
        ),
      );
  }

  upvote() {
    return element(
      by.css('[data-test-post="0"] [data-test="upvote-btn"]'),
    ).click();
  }
}
