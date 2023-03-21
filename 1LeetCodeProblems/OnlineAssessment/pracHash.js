myObject["John Doe"]
myOtherObject.foo

for (const property in myObject) {
    const value = myObject[property];
    console.log(`myObject[${property}] = ${value}`);
}

for (const [property, value] of Object.entries(myObject)) {
    console.log(`${property} = ${value}`);
}