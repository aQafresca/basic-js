const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const suffixCount = {};

  domains.forEach(domain => {
      const parts = domain.split('.').reverse();

      let suffix = '';

      for (let i = 0; i < parts.length; i += 1) {
        suffix = `${suffix}.${parts[i]}`;
        if (suffixCount[suffix]) {
          suffixCount[suffix] += 1;
        } else {
          suffixCount[suffix] = 1;
        }
      }
  });

  return suffixCount;
}

module.exports = {
  getDNSStats
};
