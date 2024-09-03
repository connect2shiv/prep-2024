var convert = function (s, numRows) {
    let z = Array(numRows).fill(0).map(a => []);
    let i = 0, j = 0, d = false;
    for (let k of s) {
        if (!d) {
            z[i++][j] = k;
            if (i === numRows) {
                d = true;
                i = numRows - 1;
            }
        } else {
            z[--i][++j] = k;
            if (i === 0) {
                i = 1;
                d = false; 
            }
        }
    }
    let result = [];
    z.forEach((item) => {
        const r = item.filter((i) => {
            return !(/[a-zA-Z],./).test(i);
        }).join('');
        result.push(r);
    });
    console.log(result.join(''));
    return result;
};

convert("PAYPALISHIRING", 4)
