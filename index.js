let obj = {
    name: 'Sigma',
    age: 67,
    cat: {
        name: 'Busya',
        age: '4 months idk',
        gender: 'female'
    },
    fruits: ['apple', 'banana', 'orange']
};

// parent-name: 'asd', Not allowed because -, unless ' ' is used
// 2asd: 'asd', Not allowed to start with number, unless ' ' is used
// Neither recommended, but if you will: console.log(obj['parent-name']);
// Just don't

//console.log(obj)
//console.log(obj.cat)
//console.log(obj.fruits)
//console.log(obj.fruits[2])
//console.log(Object.keys(obj));