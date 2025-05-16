
    let output = "";

    // 1. toUpperCase()
    let text1 = "hello";
    output += "1. toUpperCase(): " + text1.toUpperCase() + "\n";

    // 2. toLowerCase()
    let text2 = "HELLO";
    output += "2. toLowerCase(): " + text2.toLowerCase() + "\n";

    // 3. concat()
    let text3a = "Hello";
    let text3b = "World";
    output += "3. concat(): " + text3a.concat(" ", text3b) + "\n";

    // 4. trim()
    let text4 = "  Hello  ";
    output += "4. trim(): '" + text4.trim() + "'\n";

    // 5. trimStart()
    let text5 = "  Hello";
    output += "5. trimStart(): '" + text5.trimStart() + "'\n";

    // 6. trimEnd()
    let text6 = "Hello  ";
    output += "6. trimEnd(): '" + text6.trimEnd() + "'\n";

    // 7. padStart()
    let text7 = "5";
    output += "7. padStart(): " + text7.padStart(3, "0") + "\n";

    // 8. padEnd()
    let text8 = "5";
    output += "8. padEnd(): " + text8.padEnd(3, "0") + "\n";

    // 9. repeat()
    let text9 = "Hi ";
    output += "9. repeat(): " + text9.repeat(3) + "\n";

    // 10. replace()
    let text10 = "I love cats";
    output += "10. replace(): " + text10.replace("cats", "dogs") + "\n";

    // 11. replaceAll()
    let text11 = "I love cats and cats are cute";
    output += "11. replaceAll(): " + text11.replaceAll("cats", "dogs") + "\n";

    // 12. split()
    let text12 = "apple,banana,orange";
    output += "12. split(): " + text12.split(",").join(" | ") + "\n";

    document.getElementById("output").textContent = output;
