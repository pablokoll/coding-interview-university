function sym(args) {
  let symmetricList = args.filter((element, index) => args.indexOf(element) === index);

  const listsLength = arguments.length;

  for (let i = 1; i < listsLength; i++) {
    let list = arguments[i].filter((element, index) => arguments[i].indexOf(element) === index);
    ;

    list.forEach((element) => {
      if (symmetricList.includes(element)) {
        symmetricList = symmetricList.filter(el => el !== element);
      } else {
        symmetricList.push(element);
      }


    })
  }
  return symmetricList.sort((a, b) => a - b);
}

// console.log(sym([1, 2, 3], [5, 2, 1, 4])); //should return [3, 4, 5];
// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); //should return [3, 4, 5];
console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); //should return [3, 4, 5];

