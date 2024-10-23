function stringLength() {

    let s = "Hello World";
    let splitword = s.split(" ");
    let wordsize = splitword.length;
    console.log("size is "+ wordsize)
    for(i=0;i<=wordsize-1;i++)
    {
        console.log(splitword[i]);
    }
    let y = splitword[wordsize-1];
    let ne = y.length;

   console.log("Size of the string is: "+ne)
}

function findLength() {

    let s = " fly me to the moon ";
    s= s.trim();
    let splitword = s.split(" ");
    let wordsize = splitword.length;
    console.log("size is "+ wordsize)

    for(i=0;i<=wordsize-1;i++)
        {
            console.log(splitword[i]);
        }
        let y = splitword[wordsize-1];
        let ne = y.length;
    
       console.log("Size of the string is: "+ne)
}

function findLength() {

    let s = " fly me to the moon ";
    s= s.trim();
    let splitword = s.split(" ");
    let wordsize = splitword.length;
    console.log("size is "+ wordsize)

    for(i=0;i<=wordsize-1;i++)
        {
            console.log(splitword[i]);
        }
        let y = splitword[wordsize-1];
        let ne = y.length;
    
       console.log("Size of the string is: "+ne)
}


function anagram(a,b){
    a= a.toLowerCase();
    b =b.toLowerCase();
    let splitword = a.split("").sort();
    let splitword2 = b.split("").sort();
    let s =splitword.length;
    let t=splitword2.length;
   
   if(s!=t)
   {
    console.log("given words are not anagram")
   }
   else
   {
    
   for(i=0;i<=s-1;i++)
   {
    if(splitword[i] != splitword2[i] )
    {
        console.log("its not Anagram")
    }
    else{
        console.log("its not Anagram")
    }
   }
    console.log("word is : "+a)
    console.log("word is : "+b)

   }
    

}

// stringLength();
// findLength();
anagram("test","west");