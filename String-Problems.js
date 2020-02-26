// *** Super Reduced String ***
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

// *** Separate the Numbers ***
//A numeric string, S, is beautiful if it can be split into a sequence of two or more positive integers
//a[i]-a[i-1]=1 for any 1<i<=n  (i.e., each element in the sequence is 1 more than the previous element).
//No a[i] contains a leading zero. For example, we can split s=10203 into the sequence {1,02,03},
//But it is not beautiful because 02 and 03 have leading zeroes.
var startNumber;
//part 1
function checkBeautifulNumeric(s) {


    let finalResult = "NO\n";
    // Leading Zero must be avoided!
    if (s[0] === "0") {
        process.stdout.write(finalResult);
        return;
    }

    for (let i = 1; i <= (s.length / 2); i++) {

        let response = isBeautifulNumeric(s, i);
        if (response === true) {
            finalResult = "YES " + startNumber + "\n";
            break;
        }

    }
    process.stdout.write(finalResult);
}
//part 2
function isBeautifulNumeric(s, selectedLen) {

    let isBeautiful = true;
    let numb = s.substr(0, selectedLen);

    /*This number is suppousted to start the beautiful sequence!*/
    startNumber = numb;

    let cursor = selectedLen;
    let desiredNextNumb = parseInt(numb) + 1;

    while (cursor <= (s.length - 1)) {

        let lenNextNumber = desiredNextNumb.toString().length;
        let actualNextNumb = s.substr(cursor, lenNextNumber);

        if (actualNextNumb != desiredNextNumb || (actualNextNumb[0] === "0")) {
            isBeautiful = false;
            return isBeautiful;
        }

        desiredNextNumb += 1;
        cursor += actualNextNumb.length;
    }
    return isBeautiful;
}
//part 3
function separateNumbers(s) {
    checkBeautifulNumeric(s);
}

// *** Funny String *** 
//To determine whether a string is funny, create a copy of the string in reverse
//Iterating through each string, compare the absolute difference in the ascii
//Values of the characters at positions 0 and 1, 1 and 2 and so on to the end
//If the list of absolute differences is the same for both strings, they are funny.
function funnyString(s) {

    let isFunny = "Funny";
    for (let i = s.length - 1; i >= 1; i--) {

        let diffOrigin = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        let j = (s.length - 1) - i;
        let diffReversed = Math.abs(s.charCodeAt(j + 1) - s.charCodeAt(j));

        if (diffOrigin !== diffReversed) {
            isFunny = "Not Funny";
            break;
        }
    }

    return isFunny;
}

// *** Alternating Characters *** 
//You are given a string containing characters A and B only.
//Your task is to change it into a string such that there are no matching adjacent characters.
//To do this, you are allowed to delete zero or more characters in the string.
//Your task is to find the minimum number of required deletions.
//AABAAB needs two deletions!
function alternatingCharacters(s) {

    let aDeletion = 0;
    let bDeletion = 0;

    let aArr = s.match(/A{2,}/g);
    let bArr = s.match(/B{2,}/g);

    if (aArr != null) {

        for (let i = 0; i < aArr.length; i++) {
            aDeletion += (aArr[i].length - 1);
        }
    }

    if (bArr != null) {

        for (let i = 0; i < bArr.length; i++) {
            bDeletion += (bArr[i].length - 1);
        }

    }

    return (aDeletion + bDeletion);
}

// *** Determining DNA Health *** 
//This problem is solved using [Ah-Corasick] Algorithm
