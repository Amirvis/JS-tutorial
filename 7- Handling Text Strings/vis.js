const firstName = "Joe";
const year = 11;

// we wanna print: Joe is a web developer with 11 years of experience

// ----------------------------------------------------------------------

// first way: simple

const fullText = firstName + " is a web developer with " + year + " years of experience";
console.log(fullText);

// ----------------------------------------------------------------------

// second way: using backtick

const fullText2 = `${firstName} is a web developer with ${year} years of experience`;
console.log(fullText2);

// ----------------------------------------------------------------------

// first way also:

const fullText3 = firstName + " is a web developer\n\with " + year + " years of\n\experience";
console.log(fullText3);

// ----------------------------------------------------------------------

// second way also:

const fullText4 = `${firstName} is a web developer
with ${year} years of
experience`
console.log(fullText4);