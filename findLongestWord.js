function findLongestWord(str) {
    // Below code gets the string and splits them
    // Added is a unique for loop (like from Java)
    var words = str.split(" ");

    // This one basically checks if each word in the sentence is longer than the empty string in longest
    // However, now the for loop brings the LENGTH of the longest word, using .length
    var longest = "";
    for (var word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// var fruits = ["apple", "orange", "mangoes"];

// for (var fruit of fruits) {
//     console.log(fruit);
// }