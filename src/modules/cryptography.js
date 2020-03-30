const encrypt = (string, offset) => {
  let fromChar,
    output = "";

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    const charCode = letter.charCodeAt(0);
    const calc = charCode - offset;

    if (charCode >= 65 && charCode <= 90) {
      fromChar = String.fromCharCode(calc % 26);
    } else if (charCode >= 97 && charCode <= 122) {
      if (calc < 97) {
        fromChar = String.fromCharCode(calc + 122 - 97 + 1);
      } else {
        fromChar = String.fromCharCode(calc);
      }
    } else {
      fromChar = String.fromCharCode(charCode);
    }

    output += fromChar || "";
  }

  return output;
};

exports.encrypt = encrypt;
