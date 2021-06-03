exports.encode = (s) => {
  const charCodeArr = [];
  for (let i = 0; i < s.length; i += 1) {
    const code = Number(s.charCodeAt(i)).toString(16);
    charCodeArr.push(code);
  }
  return charCodeArr.join("");
};

exports.decode = (s) => {
  const charArr = [];
  for (let i = 0; i < s.length; i += 2) {
    const charCode = s[i] + s[i + 1];
    const code = String.fromCharCode(parseInt(charCode, 16));
    charArr.push(code);
  }
  return charArr.join("");
};
