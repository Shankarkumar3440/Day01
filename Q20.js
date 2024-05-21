// How do you redeclare variables in switch block without an error ?

// To redeclare variables within different cases of a switch block without encountering a SyntaxError, you need to create separate block scopes for each case. This can be done using curly braces { } to create a block scope for each case. Here's how you can achieve that:


switch (x) {
    case 1: {
        let x = 'Case 1';
        console.log(x); // Outputs: 'Case 1'
        break;
    }
    case 2: {
        let x = 'Case 2';
        console.log(x); // Outputs: 'Case 2'
        break;
    }
    case 3: {
        let x = 'Case 3';
        console.log(x); // Outputs: 'Case 3'
        break;
    }
    default: {
        let x = 'Default case';
        console.log(x); // Outputs: 'Default case'
    }
}
