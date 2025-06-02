//  ✅ **1. Array Filtering and Mapping**
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Carol", age: 22, gender: "female" },
    { name: "David", age: 28, gender: "male" }
];
function getMaleNames(persons) {
    return persons
        .filter(function (p) { return p.gender !== "female"; })
        .map(function (p) { return p.name; });
}
console.log("Male Names:", getMaleNames(people));
var books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 }
];
function getBookTitles(bookList) {
    return bookList.map(function (book) { return book.title; });
}
console.log("Book Titles:", getBookTitles(books));
// ✅ **3. Function Composition**
// Individual functions
var square = function (n) { return n * n; };
var double = function (n) { return n * 2; };
var addFive = function (n) { return n + 5; };
// Composed function
var composedFunction = function (n) { return addFive(double(square(n))); };
console.log("Composed Result:", composedFunction(3)); // (3^2) * 2 + 5 = 23
var cars = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Honda", model: "Civic", year: 2015 },
    { make: "Tesla", model: "Model 3", year: 2021 }
];
function sortCarsByYear(carList) {
    return __spreadArray([], carList, true).sort(function (a, b) { return a.year - b.year; });
}
console.log("Sorted Cars:", sortCarsByYear(cars));
//  ✅ **5. Find and Modify**
function updatePersonAge(persons, name, newAge) {
    return persons.map(function (person) {
        return person.name === name ? __assign(__assign({}, person), { age: newAge }) : person;
    });
}
var updatedPeople = updatePersonAge(people, "Alice", 35);
console.log("Updated People:", updatedPeople);
// ✅ **6. Array Reduction**
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function sumOfEvenNumbers(nums) {
    return nums.reduce(function (sum, num) { return (num % 2 === 0 ? sum + num : sum); }, 0);
}
console.log("Sum of Even Numbers:", sumOfEvenNumbers(numbers));
//  ✅ **7. Leap Year Checker**
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("Is 2024 a Leap Year?", isLeapYear(2024)); // true
console.log("Is 1900 a Leap Year?", isLeapYear(1900)); // false
// ✅ **8. Unique Values**
var numsWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
function getUniqueValues(arr) {
    return __spreadArray([], new Set(arr), true);
}
console.log("Unique Values:", getUniqueValues(numsWithDuplicates));
var students = [
    { name: "Rakesh", grades: [85, 90, 78] },
    { name: "Nafis", grades: [95, 92, 89] },
    { name: "Tamim", grades: [70, 75, 80] }
];
function sortByAverageGrade(students) {
    return __spreadArray([], students, true).sort(function (a, b) {
        var avgA = a.grades.reduce(function (sum, g) { return sum + g; }, 0) / a.grades.length;
        var avgB = b.grades.reduce(function (sum, g) { return sum + g; }, 0) / b.grades.length;
        return avgB - avgA;
    });
}
console.log("Sorted Students by Grade:", sortByAverageGrade(students));
var items = [
    { quantity: 2, price: 50 },
    { quantity: 3, price: 30 },
    { quantity: 1, price: 100 }
];
function getTotalValue(items) {
    return items.reduce(function (total, item) { return total + item.quantity * item.price; }, 0);
}
console.log("Total Value of Items:", getTotalValue(items));
