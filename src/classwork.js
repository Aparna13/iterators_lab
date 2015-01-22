function House (sqFeet,bathrooms,bedrooms) {
	this.sqFeet = sqFeet;
	this.bathrooms = bathrooms;
	this.bedrooms = bedrooms;
}
House.prototype.neighborhood = [];

House.prototype.showFt =  function () {
  	console.log("This house has" + this.sqFeet + "square feet");
  };


House.prototype.addToNeighborhood = function () {
	if (this.neighborhood.indexOf(this) === -1) {
		this.neighborhood.push(this);

	};

};

var house1 = new House (1000,2,2);
var house2 = new House (4000,4,2);






// Every instance of the House should have a property called neighborhood
// neighborhood should be an empty array
 // HINT - how can we make sure that this array is defined once and not for
 // every instance of the class?

 // Attach a method to the House class, and call it showFt
// showFt will console.log a message with the number of square feet
  // For example, calling this function will return:
    // "This house has 1000 square feet")
  // HINT - Try to remember how to add this so that it is only defined once
  // and not every time an instance is created


  // Attach a method to the House class called addToNeighborhood
// This method should first check and see if the instance of the house
// is in the neighborhood array, and if it is NOT, it should add the instance
// to the neighborhood array