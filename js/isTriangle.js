// This function returns a boolean if the given numbers can form a triangle

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false
