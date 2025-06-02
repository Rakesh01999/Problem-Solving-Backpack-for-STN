//  1. Array Filtering and Mapping

type Person = {
    name: string;
    age: number;
    gender: "male" | "female";
};

const people: Person[] = [
    { name: "Faria", age: 25, gender: "female" },
    { name: "Zahed", age: 30, gender: "male" },
    { name: "Anupama", age: 22, gender: "female" },
    { name: "Akash", age: 28, gender: "male" }
];

function getMaleNames(persons: Person[]): string[] {
    return persons
        .filter(p => p.gender !== "female")
        .map(p => p.name);
}

console.log("Male Names:", getMaleNames(people));


// 2. Object Manipulation

type Book = {
    title: string;
    author: string;
    year: number;
};

const books: Book[] = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 }
];

function getBookTitles(bookList: Book[]): string[] {
    return bookList.map(book => book.title);
}

console.log("Book Titles:", getBookTitles(books));


// 3. Function Composition


// Individual functions
const square = (n: number): number => n * n;
const double = (n: number): number => n * 2;
const addFive = (n: number): number => n + 5;

// Composed function
const composedFunction = (n: number): number => addFive(double(square(n)));

// (3^2) * 2 + 5 = 23
console.log("Composed Result:", composedFunction(3)); 


//  4. Sorting Objects


type Car = {
    make: string;
    model: string;
    year: number;
};

const cars: Car[] = [
    { make: "Toyota", model: "Camry", year: 2018 },
    { make: "Honda", model: "Civic", year: 2015 },
    { make: "Tesla", model: "Model 3", year: 2021 }
];

function sortCarsByYear(carList: Car[]): Car[] {
    return [...carList].sort((a, b) => a.year - b.year);
}

console.log("Sorted Cars:", sortCarsByYear(cars));


//  ✅ **5. Find and Modify**


function updatePersonAge(persons: Person[], name: string, newAge: number): Person[] {
    return persons.map(person =>
        person.name === name ? { ...person, age: newAge } : person
    );
}

const updatedPeople = updatePersonAge(people, "Alice", 35);
console.log("Updated People:", updatedPeople);


// ✅ **6. Array Reduction**


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function sumOfEvenNumbers(nums: number[]): number {
    return nums.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

console.log("Sum of Even Numbers:", sumOfEvenNumbers(numbers));


//  ✅ **7. Leap Year Checker**

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log("Is 2024 a Leap Year?", isLeapYear(2024)); // true
console.log("Is 1900 a Leap Year?", isLeapYear(1900)); // false



// ✅ **8. Unique Values**


const numsWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];

function getUniqueValues(arr: number[]): number[] {
    return [...new Set(arr)];
}

console.log("Unique Values:", getUniqueValues(numsWithDuplicates));



// ✅ **9. Advanced Sorting**


type Student = {
    name: string;
    grades: number[];
};

const students: Student[] = [
    { name: "Rakesh", grades: [85, 90, 78] },
    { name: "Nafis", grades: [95, 92, 89] },
    { name: "Tamim", grades: [70, 75, 80] }
];

function sortByAverageGrade(students: Student[]): Student[] {
    return [...students].sort((a, b) => {
        const avgA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
        const avgB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;
        return avgB - avgA;
    });
}

console.log("Sorted Students by Grade:", sortByAverageGrade(students));

// ✅ **10. Functional Programming - Reduce

type Item = {
    quantity: number;
    price: number;
};

const items: Item[] = [
    { quantity: 2, price: 50 },
    { quantity: 3, price: 30 },
    { quantity: 1, price: 100 }
];

function getTotalValue(items: Item[]): number {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

console.log("Total Value of Items:", getTotalValue(items));
