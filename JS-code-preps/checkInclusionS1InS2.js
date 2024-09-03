/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const getCharIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0);

var checkInclusion = function(s1, s2) {    
    let map = Array(26).fill(0);
    for (let ch of s1) map[getCharIndex(ch)]++;

    let charCount = s1.length;
    let i = 0, j = 0;
    while (j < s2.length) {
        if (map[getCharIndex(s2[j])] > 0)
            charCount--;

        map[getCharIndex(s2[j])]--;
        j++;

        if (charCount === 0) return true;

        if (j - i === s1.length) {
            if (map[getCharIndex(s2[i])] >= 0)
                charCount++;
            map[getCharIndex(s2[i])]++;
            i++;
        }
    }
    return false;
};

// let s1 = "ab", s2 = "eidbaooo";
let s1 = "mark", s2 = "wqartisgramkeat";
console.log(checkInclusion(s1, s2));