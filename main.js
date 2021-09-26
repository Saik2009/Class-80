var name_of_students_array = [];
function submit(){
var display_student_array=[];
for(var j =1;j<=4;j++){
    var student_name= document.getElementById("name_of_the_student_"+j).value;
console.log(student_name);
name_of_students_array.push(student_name);
}
console.log(name_of_students_array);
var student_name_length= name_of_students_array.length;
console.log(student_name_length);
for(var k=0;k<student_name_length;k++){
    display_student_array.push("<h4>NAME-"+name_of_students_array[k]+"</h4>");
    console.log(display_student_array)
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas= display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_students_array.sort();
    console.log(name_of_students_array);

    var display_student_array_sorting=[];
    
    var student_name_length= name_of_students_array.length;
    console.log(student_name_length);
    for(var k=0;k<student_name_length;k++){
        display_student_array_sorting.push("<h4>NAME-"+name_of_students_array[k]+"</h4>");
        console.log(display_student_array_sorting)
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array_sorting;
    var remove_commas= display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
    }

