// Rewrite the instructions in your own words

//Write the objectives and the tests 

/* Write the pseudocode
create a variable string of the user
create a variable a lenght of the text of the user
create loop over all the text
while looping it should take the first letter of the word in the text and 
it should store in a variable acronym.
print acronym
//paste your JS generated by blockly below here
 
var acronym, anyString, i;


acronym = '';
anyString = window.prompt('Enter your text').split(' ');
for (var i_index in anyString) {
  i = anyString[i_index];
  acronym += String(i.charAt(0));
}
window.alert(acronym.toUpperCase());