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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    this.start.horizontal = eastWest.indexOf(this.start.horizontal)+1;
    this.end.horizontal = eastWest.indexOf(this.end.horizontal)+1;

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
