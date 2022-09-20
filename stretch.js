function createBase(baseNum) {
        return function(number) {
            return baseNum + number;
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

/*

Functional programming relies purely on the arguments of functions and allows for consistent, predictable inputs and outputs.
Object-oriented programming establishes changeable data and objects that represent real-world things, with objects having attributes and functions.

Functional programming is ideal when you have a fixed set of data types or things; the focus is on adding new functions to compute with existing data.
Object-oriented programming is ideal for a fixed set of operations, but the collection of things may change. Good for encapsulating data and modeling scenarios for customer needs.

It can be difficult to translate a real world scenario into terms of data manipulation, such that functional programming would require.
Sometimes object-oriented programming can be extremely complex and less efficient. Also, class-dependent functions can be difficult to reuse in other contexts.

*/