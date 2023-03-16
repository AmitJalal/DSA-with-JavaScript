const hash = new Map();
hash["bls"] = "bla"
hash["bla"] = "bla2"

// console.log(hash);



const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
// console.log(contacts.get('Jessie') );// {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true


// console.log(contacts.size) 



let myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ])
//   console.log(myMap);

let am = new Map();
am.set({"1":0, "2":9}, 23)
console.log(am);