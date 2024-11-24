const palindromes = function (a) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clean = a.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');
    const rev = clean.split('').reverse().join('')
  
    return rev === clean;
  };

// Do not edit below this line
module.exports = palindromes;
