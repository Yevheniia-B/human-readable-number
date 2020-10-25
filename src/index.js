number_names = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety'
  // '100': 'one hundred',
  // '1000': 'one thousand'
  // '10463': 'ten thousand four hundred and sixty three',
}

function toSingle(digits) {
  return number_names[digits.splice(0,1)];
}

function toTenths(digits) {
  name = number_names[digits.join('')];
  if (name) {
    digits.splice(0);
    return name;
  } else if (digits[0] === '0') {
    digits.splice(0,1);
    return null;
  } else {
    return number_names[digits.splice(0,1) + '0'];
  }
}

function toHundredths(digits) {
  name = number_names[digits.splice(0, 1)] + " hundred";
  
  if (Number(digits.join('')) === 0) {
    digits.splice(0);
  }
  return name;
}


categories = [
  {'name': 'single', 'toReadable': toSingle},
  {'name': 'tenths', 'toReadable': toTenths},
  {'name': 'hundredths', 'toReadable': toHundredths}
] 

module.exports = function toReadable(number) {
  let values = [];
  let digits = String(number).split(''); 

  while (digits.length > 0) {
    let category = categories[digits.length-1];
    let value = category['toReadable'](digits);
    
    if (value) {
      values.push(value);
    }
  }

  return values.join(' ');
}


