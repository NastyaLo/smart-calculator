class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
  }

  add(num) {
      this.value += "+" + num;
      return this;
  }

  subtract(num) {
      this.value += "-" + num;
      return this;
  }

  multiply(num) {
      this.value += "*" + num;
      return this;
  }

  devide(num) {
      this.value += "/" + num;
      return this;
  }

  pow(num) {
      let str = this.value.toString();

      if(str.length == 1) {
          this.value = Math.pow(this.value, num);
          return this;
      } else {
          let numForPow = [];

          for (let i = this.value.length - 1; i > -1; i--) {
              if (!isNaN(this.value[i])) {
                  numForPow.push(this.value[i]);
              } else {
                  break;
              }
          }

          numForPow = numForPow.reverse().join("");
          this.value = str.slice(0, this.value.length - numForPow.length);
          this.value += Math.pow(numForPow, num);
          return this;
      }
  }
}

SmartCalculator.prototype.valueOf = function () {
  return eval(this.value);
}

module.exports = SmartCalculator;
