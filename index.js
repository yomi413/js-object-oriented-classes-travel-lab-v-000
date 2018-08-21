class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let endYear = new Date(year, -1);
    return endYear.getFullYear(year) - this.startDate.getFullYear(year);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let streetsTravelled = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical));
    let avenuesTravelled = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));

    return streetsTravelled + avenuesTravelled;
  }

  estimatedTime(peakHour) {
    if (peakHour === undefined) {
      return this.blocksTravelled()/3;
    } else {
      return this.blocksTravelled()/2;
    }
  }

}
