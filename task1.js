/*
* In this task, a random string (variable s) is passed to our testRegExp function
* as the first parameter, and the second is a random substring (variable sub_s)
* that you want to use as a regular expression pattern. You need to return a string
* from the function, which will list all matches of the template with the first line
* separated by semicolons.
* */

function testRegExp(s, sub_s) {
    const r = new RegExp(sub_s, "g")
    return (sub_s + ";").repeat(s.match(r).length).replace(/;$/,"");
}

console.log(testRegExp("Anbutdsirbutdbutbutareviewbutobutverman", "but"));
console.log(testRegExp("Insoiposmpossibleappospearanposceconsideposredmr", "pos"));
