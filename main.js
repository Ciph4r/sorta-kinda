/******************
 * YOUR CODE HERE *
 ******************/
const firstNumberIsLess = (num , num2) => {
  return num - num2
}

const   secondNumberIsLess = (num ,num2) =>{
  return num2-num
}

const firstNameIsFirstAlphabetically = (name, name2) => {
  if (name.split(' ')[0] === name2.split(' ')[0]){
    return 0
  }
  return name2.split(' ')[0] < name.split(' ')[0] ? 1 : -1
}

const firstLastNameIsFirstAlphabetically = (name, name2) => {
  if (name.split(' ')[1] === name2.split(' ')[1]){
    return 0
  }
  return name.split(' ')[1] > name2.split(' ')[1] ? 1 : -1
}

const sortByNumberAscending = (array) =>{
 const newarray = array.slice() 
return newarray.sort(firstNumberIsLess)
}

const sortByNumberDescending = (array) =>{
  const newarray = array.slice() 
 return newarray.sort(secondNumberIsLess)
 }

 const sortByNameAscending = (array) =>{
  const newarray = array.slice() 
 return newarray.sort(firstNameIsFirstAlphabetically)
 }

 const sortByLastNameAscending = (array) =>{
  const newarray = array.slice() 
 return newarray.sort(firstLastNameIsFirstAlphabetically)
 }


 const truesFirst = (array)=>{
   const newarray = array.slice()
   return newarray.sort((a,b) => a === b ? 0 : a ? -1 : 1)
 }
/************************
// ITERATION FUNCTIONS
 ************************/




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
