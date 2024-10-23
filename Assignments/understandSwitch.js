

function grade(value) 

    {

    switch (value) {

        case "above 90":
            {
                console.log("Student grade :Grade 1")
                break
            }
        case "above 75 below 89":
            {

                console.log("Student grade :Grade 2")
                break
            }
        case "above 50 below 74":
            {
                console.log("Student grade :Grade 3")
                break

            }
            default :
            {
                console.log("Passed category")
                
            }


    }


}


let passedmarks1 ="above 90";
let passedmarks2 ="above 75 below 89";
let passedmarks3 ="above 50 below 74";

grade(passedmarks1);
grade(passedmarks2);
grade(passedmarks3);