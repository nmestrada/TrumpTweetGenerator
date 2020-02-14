//const trumpData = require('./realdonaldtrump_short.json')

const parseText = (sentence) => {
    let sentenceArr = sentence.split(' ');
    //console.log(sentenceArr)
    let result = sentenceArr.map(word => {
        if(word.includes('@') || word.includes('/') || word.includes('&')){
            word = '';
        }else {
            word = word.toLowerCase().replace(/[)(?!,.]/g,"")
        }
        return word
    })
    return result.join(' ');
}

const parsedTrumpTweets = trumpData.map(tweet => parseText(tweet.text));

module.exports = parsedTrumpTweets