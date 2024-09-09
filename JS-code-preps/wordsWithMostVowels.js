// Given a list of words, print the words with most unique vowels in it.
// Ex: 
// Input: Welcome to Arctic Wolf. Lead the way. 
// Output: Welcome Arctic Lead

console.log('Hello world');


const vowels = ['a', 'e', 'i', 'o', 'u'];

function wordsWithMostVowels(str) {
    if (!str) return "";
    
    const getVowelCount = (word) => {
        const count = {};
        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i].toLowerCase())) {
                count[word[i]] = (count[word[i]] || 0) + 1;
            }
        }
        return Object.keys(count).length || 0;
    };    
    
    const arr = str.split(" ");
    const freqmap = {}
    for (let word of arr) {
        const count = getVowelCount(word);
        if (!freqmap[count]) freqmap[count] = [];
        freqmap[count].push(word);
        // console.log(freqmap);
        
    }
    let max = 0;
    Object.keys(freqmap).forEach((key) => {
        max = Math.max(parseInt(key, 10), max);
    });
    return freqmap[max];
}

const result = wordsWithMostVowels("Welcome to Arctic Wolf. Lead the way.");
console.log(result);