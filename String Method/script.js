let output = "";

    let text = "Hello World";

    // String length
    output += "1. text.length: " + text.length + "\n";

    // String charAt()
    output += "2. text.charAt(1): " + text.charAt(1) + "\n";

    // String charCodeAt()
    output += "3. text.charCodeAt(1): " + text.charCodeAt(1) + "\n";

    // String at()
    output += "4. text.at(1): " + text.at(1) + "\n";
    output += "5. text.at(-1): " + text.at(-1) + "\n";

    // String []
    output += "6. text[1]: " + text[1] + "\n";

    // String slice()
    output += "7. text.slice(0, 5): " + text.slice(0, 5) + "\n";

    // String substring()
    output += "8. text.substring(0, 5): " + text.substring(0, 5) + "\n";

    // String substr()
    output += "9. text.substr(0, 5): " + text.substr(0, 5) + "\n";

    document.getElementById("output").textContent = output;