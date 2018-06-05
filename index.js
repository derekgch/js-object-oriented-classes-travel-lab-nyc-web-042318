class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate){ return parseInt(endDate) - parseInt(this.startDate.getFullYear());}
}


class Route {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  blocksTravelled(){
    if (this.start.horizontal === "Park"){this.start.horizontal = 5};
    if (this.end.horizontal === "Park"){this.end.horizontal = 5};
    // if (this.end.vertical === "Park"){this.end.vertical = 5};
    // if (this.start.vertical === "Park"){this.start.vertical = 5};

    let h = Math.abs(parseInt(this.start.horizontal) - parseInt(this.end.horizontal));
    let v = Math.abs(parseInt(this.start.vertical) - parseInt(this.end.vertical));
    return h+v;
  }

  estimatedTime(peak){
    let blocks = this.blocksTravelled();
    return peak? blocks/2 : blocks/3;
  }
}
