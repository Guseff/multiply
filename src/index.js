module.exports = function multiply(first, second) {
  function summa(first, second) {
    let f = first.split('').reverse(),
        s = second.split('').reverse(),
        res = [],
        carry = 0,
        n = f.length > s.length ? f.length : s.length;
    
    for (let i=0; i<=n; i++) {
      let a = f[i] ? +f[i] : 0,
          b = s[i] ? +s[i] : 0;
      res[i] = ((a + b + carry) + '').slice(-1);
      carry = ~~((a + b + carry)/10);
    }

    let out = res.reverse().join('').replace(/^0+/, '');
    return out ? out : '0'; 
  }

  function mulXn(first, second) {
    let f = first.split('').reverse(),
        b = +second,
        res = [],
        carry = 0;
    
    for (let i=0; i<=f.length; i++) {
      let a = f[i] ? +f[i] : 0;
      res[i] = ((a*b + carry) + '').slice(-1);
      carry = ~~((a*b + carry)/10);
    }
    
    let out = res.reverse().join('').replace(/^0+/, '');
    return out ? out : '0';
  }

  let b = second.split('').reverse();
  let res = '0';

  for (let i=0; i<second.length; i++) {
    res = summa(res, mulXn(first + '0'.repeat(i), b[i])); 
  }

  return res;
}
