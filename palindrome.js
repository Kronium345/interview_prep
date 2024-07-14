// Make sure to remove all of the non-alphanumeric characters
function palindrome(str) {
    // You will need to use a regex (regular expression) - sequence of characters that match a specific search pattern - to meet the criteria above
    // The g in the below regex means global (going through the entire string)
    var reg = /[\W_]/g;

    // Below code means give me all non-alphanumeric characters (reg), then replace it with nothing (The empty string)
    // Will then replace str with smallStr
    var smallStr = str.toLowerCase().replace(reg, "");

    console.log(smallStr);

    // Check if string given is the same as the string reversed
    // Use split to convert it to an array of letters
    // And .reverse() to reverse the string
    // And then .join to convert it back to a string
    var reversed = smallStr.split("").reverse().join("");
    
    // The below console log checks and confirms it (if you put eyed, it runs deye)
    // No else statement for the below if statement, as it's already true
    if (reversed === smallStr) {
        return true;
    }

    return false;
}

console.log(palindrome("dad")); 