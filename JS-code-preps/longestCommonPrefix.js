var longestCommonPrefix = function (strs) {
    let prev = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let k = 0, curr = strs[i];
        while (prev[k] && curr[k] && prev[k] === curr[k]) k++;
        prev = prev.slice(0, k);
    }
    return prev.length === 0 ? "" : prev;
};


longestCommonPrefix(["flower","flow","flight"]);