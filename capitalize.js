function capitalize(s) {
    // Split the string into words
    var words = s.split(" ");
    
    // Capitalize each word
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the words back into a single string
    var capitalized = words.join(" ");
    
    return capitalized;
}

// Example usage
console.log(capitalize("this is an example")); // Should print "This Is An Example"
