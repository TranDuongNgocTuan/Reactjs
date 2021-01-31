import {Component} from 'react'

class Expression extends Component{

  state = {
    ANY_VALUE: "*",
    RANGE: "-",
    VALUE: ",",
    START: "/",
    NUMBER: /^\d+$/,
    
    SPACE: " ",
    EVERY_TIME: `Every $kind $time`,
    AT_TIME: `At $kind $time`,
    TIME: "$time",
    BETWEEN: `Between the $kind [$from - $to)`,
    PAST_EVERY: "Past every $to $kind from $from",
    PAST_EVERY_BETWEEN: "Past every $very $kind from [$from - $to)",
  };

  isNumber = (number) => {
    const regex = new RegExp(this.state.NUMBER);
    return regex.test(number);
  }

  expressionRange = (point) => {
    let exp = String(point).split(this.state.RANGE);

    if (!this.isNumber(exp[0]) && !this.isNumber(exp[1]))
      return false;

    if (exp[0].localeCompare(exp[1]) > 0)
      return false;
    
    return exp;
  }

  expressionStart = (point) => {
    let exp = String(point).split(this.state.START);

    if (!this.isNumber(exp[0]) && !this.isNumber(exp[1]))
      return false;

    if (this.isNumber(exp[0]) && this.isNumber(exp[1]))
      return exp;
    
    if (!this.isNumber(exp[0]) && this.isNumber(exp[1])) {
      return [exp[1], ...this.expressionRange(exp[0])];
    }
    
    return false;
  }

  expressionMessageRange = (el) => {
    return this.state.BETWEEN
            .replace("$from", el[0])
            .replace("$to", el[1]);
  }

  expressionMessageStart = (el) => {
    if (el.length === 3) 
      return this.state.PAST_EVERY_BETWEEN
              .replace("$very", el[0])
              .replace("$from", el[1])
              .replace("$to", el[2]);
    
    return this.state.PAST_EVERY
            .replace("$to", el[0])
            .replace("$from", el[1]);
  }

  expressionMessageValue = (el, i) => {
    if (i > 0)
      return this.state.TIME.replace("$time", el);

    return this.state.AT_TIME.replace("$time", el);
  }

  findSyntax = (point, i) => {

    if (point.search(this.state.START) > 0) {
      return this.expressionMessageStart(this.expressionStart(point));
    }

    if (point.search(this.state.RANGE) > 0) {
      return this.expressionMessageRange(this.expressionRange(point));
    }

    if (this.isNumber(point)) {
      return this.expressionMessageValue(point, i);
    }
  }

  convention = (exp) => {
    let message = "";
    let subExp = String(exp).trim().split(this.state.VALUE);

    for (var i=0; i < subExp.length-1; i++) {
      message = message
              .concat(this.findSyntax(subExp[i], i))
              .concat(this.state.VALUE);
    }

    return message.concat(this.findSyntax(subExp[subExp.length-1], i));
  }

  expression = (exp) => {
    let message = "";
    const subExp = String(exp).trim().split(" ");

    if (subExp[0] !== "*") {

      let messageSecond = this.convention(subExp[0]);

      if (messageSecond.includes("undefined"))
        return message;

      message = message
                .concat(this.state.SPACE)
                .concat(messageSecond)
                .replace("$kind", "second");
    }

    if (subExp[1] !== "*" && subExp.length > 1) {

      let messageMinute = this.convention(subExp[1]);

      if (messageMinute.includes("undefined"))
        return message;

      message = message
                .concat(this.state.SPACE)
                .concat(messageMinute)
                .replace("$kind", "minute");
    }

    if (subExp[2] !== "*" && subExp.length > 2) {
      
      let messageHour = this.convention(subExp[2]);

      if (messageHour.includes("undefined"))
        return message;
      
      message = message
                .concat(this.state.SPACE)
                .concat(messageHour)
                .replace(/\$kind/g, "hour");
    }

    if (subExp[3] !== "*" && subExp.length > 3) {

      let messageDay = this.convention(subExp[3]);

      if (messageDay.includes("undefined"))
        return message;

      message = message
                .concat(this.state.SPACE)
                .concat(messageDay)
                .replace("$kind", "day");
    }

    if (subExp[4] !== "*" && subExp.length > 4) {

      let messageMonth = this.convention(subExp[4]);

      if (messageMonth.includes("undefined"))
        return message;

      message = message
                .concat(this.state.SPACE)
                .concat(messageMonth)
                .replace("$kind", "month");
    }

    if (subExp[5] !== "*" && subExp.length > 5) {

      let messageWeekday = this.convention(subExp[5]);

      if (messageWeekday.includes("undefined"))
        return message;

      message = message
                .concat(this.state.SPACE)
                .concat(messageWeekday)
                .replace("$kind", "weekday");
    }

    return message.trim();
  }

  // render() {
  //   const exp = this.props;

  //   return (
  //     this.expression(exp)
  //   )
  // }
}

export default Expression;