

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];//Array to store the names of the days of week and months
window.onload = function () { //function that executes the app and makes it ready to use by halting for the images to load.
    formListItem();//function that shows up all the example todo list items in order
    document.querySelector(".form").style.transform = 'translateY(-100%)';//removes form and moves it to the top, hence making it out of sight.
    document.querySelector(".preloader").style.transform = 'translateY(-100%)';//removes the preloader page after the app is ready for use.
    var date = new Date();//Date object to get basic date data
    document.querySelector(".date").innerHTML = date.getDate();
    document.querySelector(".daymonthyear").innerHTML = days[date.getDay()] + "<br>" + month[date.getMonth()] + ", " + date.getFullYear();
    var firstDayOfWeek = date.getDate() - date.getDay();

    for (var i = 0; i <= 6; i++) {//to set the week calendar on the app
        var wDate = new Date(date.getFullYear(), date.getMonth(), firstDayOfWeek++);//increasing dates
        if (wDate.getDate() == date.getDate())
            document.querySelector("#d" + (i + 1)).innerHTML = "<div class = 'circle'>" + wDate.getDate() + '</div>';
        else
            document.querySelector("#d" + (i + 1)).innerHTML = wDate.getDate();
    }
}

//End of Date 
var itemsTitles = []//Array for item titles
    , itemsTime = []//Array for item time targets
    , itemsDesc = []//Array for items' description;
itemsTitles.push()
function addItem() {//initializes every field to a blank value and brings the form in sight.
    document.querySelector(".titleInp").value = '';
    document.querySelector(".timeInp").value = '';
    document.querySelector(".descInp").value = '';

    document.querySelector(".form").style.transform = 'translateY(0)';
}

function submit() {
    if ((document.querySelector(".titleInp").value).trim() != '' 
    && (document.querySelector(".timeInp").value).trim() != '' 
    && (document.querySelector(".descInp").value).trim() != '') {
        itemsTitles.push(document.querySelector(".titleInp").value);

        itemsTime.push("At " + document.querySelector(".timeInp").value);
        itemsDesc.push(document.querySelector(".descInp").value);
        document.querySelector(".form").style.transform = 'translateY(-100%)';
        document.querySelector(".todolist").innerHTML = "";
        formListItem();
    }//submits data and refreshes the lists after adding all details only if all data in the form have some valid value.
}

function formListItem() {
    for (var i = 0; i < itemsTitles.length; i++) {
        document.querySelector(".todolist").innerHTML += "<div class='li1'><div class='title'>" + 
        itemsTitles[i] + "</div><div class='time'>" + 
        itemsTime[i] + "</div><br><marquee class='desc'>" + 
        itemsDesc[i] + "</marquee><img onclick='deleteItem(" + i + ")' src=\"https://static.thenounproject.com/png/236306-200.png\" class=\"del\"><img class='tick' src='https://image.flaticon.com/icons/png/512/60/60727.png' onclick='strike(" + i + ")' style='position: relative;height: 23px;bottom: 60px;filter:invert(1);left:0;'></div><br>";
    }
}//forms the list item by basic html and designed using CSS above.

function deleteItem(c) {
    itemsTitles.splice(c, 1);
    itemsTime.splice(c, 1);
    itemsDesc.splice(c, 1);
    document.querySelector(".todolist").innerHTML = '';
    formListItem();
}//Delete item of the list and refresh the lists
function strike(c) {
    if (itemsTitles[c].includes("<strike>")) {
        itemsTitles[c] = itemsTitles[c].replace("<strike>", "");
        itemsTitles[c] = itemsTitles[c].replace("</strike>", "");
    }
    else {
        itemsTitles[c] = "<strike>" + itemsTitles[c] + "</strike>";
    }
    document.querySelector(".todolist").innerHTML = '';
    formListItem();
}//Strike the particular task to denote that the user is done with the task and refresh the lists
function closeForm() {
    document.querySelector(".form").style.transform = 'translateY(-100%)';
}//Close the form or take the form out of sight in case the user might have opened the form by mistake or does not want to add a new item.
