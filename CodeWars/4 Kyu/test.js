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


let text2 = "a a a  b  c c  d d d d  e e e e e"

console.log(string.replace(/[A-Za-z]/g, ''))