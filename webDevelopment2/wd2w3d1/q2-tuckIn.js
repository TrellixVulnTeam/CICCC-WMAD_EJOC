// Create a function that takes two arrays and insert the second array in the middle of the first array.
// ● The first array always has two elements.
// ● Use the spread syntax to solve this challenge.

let tuckIn = (arr1, arr2) => {
	return [arr1[0], ...arr2, arr1[1]];
	// arr1.splice(1, 0, ...arr2);
	// return arr1;
}




console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));
