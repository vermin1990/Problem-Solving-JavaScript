// ***Super Reduced String***
//Reduce the string to its shortest length by doing a series of operations.
//In each operation select a pair of adjacent lowercase letters that match,
//And delete them. For instance, the string aab could be shortened to b in one operation.
//Example 2: aaabccddd → abccddd → abddd → abd
//1<=|s|<=1000
function superReducedString(s) {

    let reducedStr = s;


    for (let i = 0; i < reducedStr.length; i++) {

        if (reducedStr[i] === reducedStr[i + 1]) {

            reducedStr = reducedStr.substring(0, i) + reducedStr.substring((i + 2), reducedStr.length);

            //Reset for loop
            //It needs to assess the string again!
            i = -1;
        }
    }

    if (reducedStr === "")
        return "Empty String";

    return reducedStr;
}
// *** Two Characters ***
//In this challenge, you will be given a string.
//You must remove characters until the string is made up of any two alternating characters.
//When you choose a character to remove, all instances of that character must be removed.
//Your goal is to create the longest string possible that contains just two alternating letters.
//Example 1: abaacdabd → remove a → bcdbd → remove c → bdbd

function alternate(s) {

    let maximumLength = 0;
    let validChars = new Array();

    for (let i = 0; i < s.length; i++) {

        let code = s.charCodeAt(i);

        if (validChars[code] == undefined) {
            validChars[code] = s[i];
        }
    }

    for (let i = 97; i <= 122; i++) {

        for (let j = i + 1; j <= 122; j++) {

            if (validChars[i] != undefined && validChars[j] != undefined) {

                let pattern = "[^" + validChars[i] + validChars[j] + "]";
                let regx = new RegExp(pattern, "g");
                let newStr = s.replace(regx, "");
                               

                let result = newStr.match(/^([a-z])(?!\1)([a-z])(?:\1\2)*\1?$/g);

                if (result != null) {
                    if (newStr.length > maximumLength) {
                        maximumLength = newStr.length;
                    }
                }
            }
        }
    }
    //process.stdout.write(maximumLength.toString());
    return maximumLength;
}

