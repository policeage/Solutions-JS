const string = 'One Funny Looking Dog Can\'t Walk !@#$&_ Walk'
const string2 = " '' ' "
const newString = string.replace(/[^a-zA-Z' ]/gi, '')

const arr1 = newString.split(/[^\w']+/)
const arr2 = [1, 2, 3, 3, 3, 4]

const set1 = new Set(arr2)
const set2 = new Set(newString.trim().split(' '))


const map1 = new Map([ ['word', '0'], ['other', '0'] ])

map1.set('word', arr2.reduce((acc, cur) => acc + cur, 1))

const set3 = new Set(string.split(/[^a-zA-Z']+/))

const string2test = string2.replace(/[^a-zA-Z' ]/gi, '')

const text5 = "  , e   ..  '  "

const stringCheck1 = new Set((text5.replace(/[^a-zA-Z' ]/gi, '').trim().split(/[^\w']+/)))
const checkArr1 = [ ...stringCheck1 ]
const test = /[a-zA-Z]/g
const test1 = 'Word'
const test4 = /[A-Za-z]+('[A-Za-z]+)?/g

const uniqueWords = new Set(Array.from(text5.matchAll(test)))

const test3 = [ ...uniqueWords ]


console.log(map1)

let text2 = "a a a  b  c c  d d d d  e e e e e"

function topThreeWords(text) {
    const stringCheck = new Set((text.replace(/[^a-zA-Z' ]/gi, '').trim().split(/[^\w']+/)))
    const checkArr = [ ...stringCheck ]
    const test = /[A-Za-z]+('[A-Za-z]+)?/g
    if (!test.test(checkArr[0])) {
      return []
    }
    const uniqueWords = new Set(text.toLowerCase().match(test))
    let uniqueWordArr = [ ...uniqueWords ]
    const wordMap = new Map()
    const stringArr = (text.toLowerCase().match(test))
    
    uniqueWordArr.forEach(word => {
      wordMap.set(word, stringArr.filter(word1 => word == word1).length)
    })
    
    uniqueWordArr.sort((a,b) => wordMap.get(a) < wordMap.get(b))
    
    while (uniqueWordArr.length > 3) {
      uniqueWordArr.pop()
    }
    return uniqueWordArr
  }

  console.log(topThreeWords(text2))