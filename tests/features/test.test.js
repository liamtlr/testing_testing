describe('The header', function() {
  describe('Page title', function () {
    it('should be set by the Meteor method @watch', function () {
      browser.url('localhost:3000');
      expect(browser.getTitle()).to.equal('testing_testing');
    });
  });
});

describe('Testing the URL path', function() {
  describe('FAILS', function () {
    it('should change the path of a url when the button is clicked @watch', function () {
      browser.url('localhost:3000');
      browser.click('#path_test');
      expect(browser.getUrl()).to.equal("http://localhost:3000/names");
    });
  });
});

describe('Testing the counter', function() {
  describe('FAILS', function () {
    it('should be set by the Meteor method @watch', function () {
      browser.url('localhost:3000');
      browser.click('#count_button');
      expect(browser.getText('#count_outcome')).to.equal("You have pressed the button 1 times.");
    });
  });
});
