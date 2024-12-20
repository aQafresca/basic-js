const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
let newStr = '';
const index = email.lastIndexOf('@');

if (index !== -1) {
  newStr = email.slice(index + 1);
} else {
  newStr = email;
}
return newStr;
}

module.exports = {
  getEmailDomain
};
