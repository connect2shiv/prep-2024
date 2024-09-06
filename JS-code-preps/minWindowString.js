var minWindow = function(s, t) {
    if (s === t) return s;
    if (s.length < t.length) return "";

    const map = {};
    for (let ch of t) map[ch] = (map[ch] || 0) + 1;

    let start = 0, minStart = 0, count = t.length;
    let minLen = Number.POSITIVE_INFINITY;

    for (let end = 0; end < s.length; end++) {
        if (map[s[end]] > 0) count--;
        map[s[end]] = (map[s[end]] || 0) - 1;

        while (count === 0) {
            if (end - start + 1 < minLen) {
                minStart = start;
                minLen = end - start + 1;
            }

            if (map[s[start]] === 0) count++;
            map[s[start]]++;
            start++;
        }
    }
    return minLen === Number.POSITIVE_INFINITY ? "" : s.substring(minStart, minStart + minLen);
};


let s = "ADOBECODEBANC", t = "ABC";

console.log(minWindow(s, t));