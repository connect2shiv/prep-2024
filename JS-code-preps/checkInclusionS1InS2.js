/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const getCharIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

var checkInclusion = function(s1, s2) {
    // Frequency array to char counts
    let map = Array(26).fill(0);

    // count the char frequency of s1
    for (let ch of s1) map[getCharIndex(ch)]++;

    let charCount = s1.length, start = 0;
    for (let end = 0; end < s2.length; end++) {
        if (map[getCharIndex(s2[end])] > 0) charCount--;
        map[getCharIndex(s2[end])]--;

        if (charCount === 0) return true;

        while (end - start + 1 === s1.length) {
            if (map[getCharIndex(s2[start])] >= 0) charCount++;
            map[getCharIndex(s2[start])]++;
            start++;
        }
    }
    return false;
};

// let s1 = "ab", s2 = "eidbaooo";
let s1 = "mark", s2 = "wqartisgramkeat";
console.log(checkInclusion(s1, s2));