let word1 = "palindrome";
let word2 = "madam";

function tocheckPalindrome(word){
 //let splittedword =   word.split("");
let size = word.length;
let newstring = "";
for (i=size-1;i>=0;i--){
    newstring = newstring + word[i];
    console.log("the value of newstring is: " +newstring)
}
if(newstring === word)
{
    console.log("given word is palindrome")
}
else{
    console.log("its not a palindrome")
}

}
tocheckPalindrome(word1)
tocheckPalindrome(word2)
