var expect = require('expect.js');
var superagent = require('superagent');
var chai = require('chai');

describe('googleFinance', function() {
  describe('APIcalls', function() {
    it('should call PYPL',function() {
      var symbol = 'PYPL';
      var res = superagent.get('http://finance.google.com/finance/info?client=ig&q=NSE:' + symbol);
      expect(res.l).to.exist;
    });

    it('should call EBAY', function() {
      var symbol = 'EBAY';
      var res = superagent.get('http://finance.google.com/finance/info?client=ig&q=NSE:' + symbol);
      expect(res.l).to.exist;
    });

    it('should call PP', function() {
      var symbol = 'PP';
      var res = superagent.get('http://finance.google.com/finance/info?client=ig&q=NSE:' + symbol);
      expect(res.l).to.exist;
    });
  });
});
