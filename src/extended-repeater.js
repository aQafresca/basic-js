const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
let addition = options.addition !== undefined ? String(options.addition) : '';
let additionRepeatTimes = options.additionRepeatTimes;
let additionSeparator = options.additionSeparator || '|';

const additionString = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

let repeatTimes = options.repeatTimes || '';
let separator = options.separator || '+';

const newString = Array(repeatTimes).fill(str + additionString).join(separator);

return newString;
}

module.exports = {
  repeater
};
