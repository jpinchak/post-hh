/*
solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.

Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.
*/

repeat = (str, result='') => {
  let counter = 0;
  for(let i = 0; i < str.length; i++) {
    if(/[0-9]/.test(str[i])) {
      let repeater = parseInt(str[i]);
      let newStr = str.substring(i+2);
      let finalStr = newStr.substring(0, newStr.indexOf(')') + counter + 1);
      console.log(finalStr);
      let notNested = newStr.substring(0, newStr.indexOf(')'));
      let nested = newStr.substring(0, newStr.indexOf('('));
      console.log(nested);
      console.log(notNested);
      if(nested.length > 0 && notNested.length < nested.length) {
        console.log(finalStr);
        let part = '';
        let toRepeat = newStr.substring(2, newStr.indexOf(')'));
        console.log(toRepeat);
        for(let j = 0; j < repeater; j++) {
          part += toRepeat;
        }
        result += part;
        console.log(result);
      } else {
        //need to make a helper function for between the parenthesis, because this is not getting called on the b because we've gotten rid of the number
        console.log(result);
        console.log(repeat(finalStr));
      }
    } else if(str[i] === '(') {
      counter += 1;
    } else if(str[i] === ')') {
      counter -= 1;
    }
  }
  return result;
}

// function to find out if you're in a nested parentheses or not
const returnNested = str => {
  if(!str.includes('(') && !str.includes(')')) return str;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      for(j = i+1; j < str.length; j++) {
        if(str[j] === ')') {
          return str.substring(i+1, j);
        } else if(str[j] === '(') {
          returnNested(str.substring(i));
        }
      }
    }
  }
}

console.log(returnNested('(a(b))'));


console.log(repeat('3(ab)4(cd)'));
console.log(repeat('2(a3(b))'));

// abbbabbb


repeat2 = (str, result='') => {
  let counter = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      counter += 1;
      if(counter === 1) {
        let repeater = parseInt(str[i-1]);
        let newStr = str.substring(i+1);
        let toRepeat = newStr.substring(0, newStr.indexOf(')'));
        for(let j = 0; j < repeater; j++) {
          result += toRepeat;
        }
      } else {
        result += repeat(str.substring(i+1));
      }
    }
    if(str[i] === ')') {
      counter -= 1;
    }
  }
  return result;
}

console.log(('jfksld').substring(3,5))