function isLongPressedName(name, typed) {
    let nameFreq = {};
    let typedFreq = {};

    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        nameFreq[char] ? nameFreq[char] += 1 : nameFreq[char] = 1;
    }

    for (let i = 0; i < typed.length; i++) {
        let char = typed[i];
        typedFreq[char] ? typedFreq[char] += 1 : typedFreq[char] = 1;
    }
    console.log(nameFreq);
    console.log(typedFreq);


      let flag =true;
   while()
    

//     return flag;
}; 
isLongPressedName("alex", "aaleex");