//imenniy export

const value = 10;
const value2 = 20;

function add(a, b) { 
    console.log("value", value);
    return a + b;
}
 
class User { 
    constructor(name) { 
        this.name = name;
    }
}

export {
    add,
     User
}

// DEFAULT EXPORT
export default function add2(a1, b1) { 
    console.log('value2', value2);
    return a1 + b1;
}

