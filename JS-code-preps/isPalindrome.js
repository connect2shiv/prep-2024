var isPalindrome = function(s) {
    if (s.length === 1) return true;
    let i = 0, j = s.length - 1;
    while (i < j) {
        const ch1 = s[i].toLowerCase();
        const ch2 = s[j].toLowerCase();
        if (ch1 < 'a' || ch1 > 'z') {
            i++;
            continue;
        }
        if (ch2 < 'a' || ch2 > 'z') {
            j--;
            continue;
        }
        if (ch1 !== ch2) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};

const test1 = "A man, a plan, a canal: Panama";
const test2 = "race a car";

console.log(isPalindrome(test1));