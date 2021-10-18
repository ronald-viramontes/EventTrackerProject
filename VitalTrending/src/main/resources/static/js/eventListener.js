
function editRow(no)
{
 document.getElementById("editButton"+no).style.display="none";
 document.getElementById("saveButton"+no).style.display="block";
	
 let firstName = document.getElementById("firstNameRow"+no);
 let lastName = document.getElementById("lastNameRow"+no);
 let dateOfBirth = document.getElementById("dateOfBirthRow"+no);
 

 let firstNameData = firstName.innerHTML;
 let lastNameData = lastName.innerHTML;
 let dateOfBirthData = dateOfBirth.innerHTML;

	
 firstName.innerHTML="<input type='text' id='firstNameText"+no+"' value='"+firstNameData+"'>";
 lastName.innerHTML="<input type='text' id='lastNameText"+no+"' value='"+lastNameData+"'>";
 dateOfBirth.innerHTML="<input type='date' id='dateOfBirthDate"+no+"' value='"+dateOfBirthData+"'>";

}

function saveRow(no)
{
 let firstNameVal=document.getElementById("firstNameText"+no).value;
 let lastNameVal=document.getElementById("lastNameText"+no).value;
 let dateOfBirthVal=document.getElementById("dateOfBirthDate"+no).value;

 document.getElementById("firstNameRow"+no).innerHTML=firstNameVal;
 document.getElementById("lastNameRow"+no).innerHTML=lastNameVal;
 document.getElementById("dateOfBirthRow"+no).innerHTML=dateOfBirthVal;

 document.getElementById("editButton"+no).style.display="block";
 document.getElementById("saveButton"+no).style.display="none";
}

function deleteRow(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
