/** Koibito App
 *  partner.js
 *  Created by Mauro J. Pappaterra on 24 of April 2018.
 */

/* PARTNER PAGE SCRIPTS
* All scripts related to the partner page. Each page has their own scripts in a single js document.
* The methods translate() is unique for each individual page.
*/

/*Retrieve login information from localStorage*/
var login_data = JSON.parse(localStorage.getItem("login_data"));
var endorsed_deeds = []; // keep track of the endorsed deeds, also used for undo functionality
var redo = []; // keep track of undone processes for redo functionality

//alert (JSON.stringify(SESSION_RELATIONSHIPS_TABLE));
if (!hasSO(login_data.username)){
    window.location.href = "profile.html";
} else {
    var user_information = getUserInfo(login_data.username); // retrieve user and partner info form DB
    var so_information = getUserInfo(getSO(login_data.username));
    //alert("You are looking at your partners profile " + so_information.first_name);

    /*Print User information into DOM*/
    $(".user_firstname").text(user_information.first_name);
    $(".user_gender").text(getGender(user_information.gender));

    /*Print SO information to DOM*/
    $("#profile_picture").attr("src","img/users/"+ so_information.username +".jpg");
    $(".firstname").text(so_information.first_name);
    $(".lastname").text(so_information.last_name);
    $("#description").text(so_information.description);
    /*Gender will be used for different CSS styling*/
    var so_gender = getGender(so_information.gender);
    $(".so_gender").text(so_gender);
    $(".so_css").addClass(so_gender);

    /*Retrieve SO deeds from HISTORY_TABLE and calculate points, print to DOM*/
    var partners_deed_history = getUserDeeds(so_information.username);
    var points = calculatePoints(partners_deed_history);

    $(".total_points").text(points);
    $("#stars").html(userStars(points, 1));
    $("#returnLabel").text(returnLabel(points));

    /*Load Partners Overview into page, this loop prints to DOM in chronological order the last 6 deeds completed*/
    $.each(partners_deed_history.slice(-6), function(element){
        $("#deeds_overview").prepend(
            "<div class='deed " + so_gender +"'>" +
            "<img src='img/deeds/"+ this.deed +".png'>" +
            "<h3 class='title'>" + so_information.first_name + " " + deedDescription(this.deed) + "</h3>" +
            "<h6 class='date'>Endorsed by <span class='link_anon "+ this.endorsed_by +" link_white'>" + getFirstname(this.endorsed_by) + "</span>  <i class='fa fa-heart red'></i> on "+ formatDate(this.date) +"</h6>" +
            "<h4 class='points'><b>+"+ deedPoints(this.deed)+" points</b></h4>" +
            "</div>"
        )
    });
}

/*Deed Selection functions*/
$(document).on('click','.deed',function(){
    //alert("You have clicked on a deed no. " + this.id);
    if (!($("#" + this.id).hasClass("selected"))){
        $("#" + this.id).addClass("selected");
    } else {
        //alert ("Item " + this.id + " has been selected " + checkRepeated(this.id, give_points) + " times!");
        $("#" + this.id).find(".multiplier").text("(x"+ checkRepeated(this.id, endorsed_deeds) +")");
    }
    endorsed_deeds.push(this.id);
    //alert(endorsed_deeds.toString());
    $("#total_points").text(updatePoints(endorsed_deeds));

    redo = []; // empty redo array every time a new item is added!
    $("#redo").addClass("greyed_out");
    $("#undo").removeClass("greyed_out");
    $("#resetPoints").removeClass("greyed_out");
    $("#submitPoints").removeClass("greyed_out");
});

function resetGivePointsWindow () { // resets give points window
    endorsed_deeds = [];
    redo = [];
    $("#deeds_list").empty();

    /*Load Deeds list into page*/
    $.each(DEEDS_TABLE, function(element){ // fill in deeds table
        //alert(JSON.stringify(this))
        $("#deeds_list").append(
            "<div class='deed wakashu clickable' id='"+ this.deed +"'>" +
            "<img src='img/deeds/"+this.deed+".png'>" +
            "<h3 class='title'>" + so_information.first_name + " " + this.description + "</h3>" +
            "<h4 class='points'><b>"+ this.points +" points <span class='multiplier'></span></b></h4>" +
            "</div>"
        )
    });

    $("#resetPoints").addClass("greyed_out");
    $("#submitPoints").addClass("greyed_out");
    $("#undo").addClass("greyed_out");
    $("#redo").addClass("greyed_out");


    $("#total_points").text(0); // print to DOM
}

/*Undo/Redo Functions*/

$("#undo").click(function(){
    var undo_this = endorsed_deeds.pop();
    //alert("Undoing last deed: " + undo_this);

    // PRINT CHANGES TO DOM HERE
    if (checkRepeated(undo_this, endorsed_deeds) > 1){
        $("#" + undo_this).find(".multiplier").text("(x"+ (checkRepeated(undo_this, endorsed_deeds) - 1) +")");
    } else {
        $("#" + undo_this).removeClass("selected");
        $("#" + undo_this).find(".multiplier").empty();
    }

    $("#total_points").text(updatePoints(endorsed_deeds));

    if (endorsed_deeds.length < 1){
        $("#undo").addClass("greyed_out");
        $("#resetPoints").addClass("greyed_out");
        $("#submitPoints").addClass("greyed_out");
    }

    redo.push(undo_this); // add undone deed to redo array
    $("#redo").removeClass("greyed_out");
});

$("#redo").click(function(){
    //alert("Redo array:\n" + redo.toString())
    var redo_this = redo.pop();
    //alert("Redoing last deed undone: " + redo_this);

    // PRINT CHANGES TO DOM HERE
    if (!($("#" + redo_this).hasClass("selected"))){
        $("#" + redo_this).addClass("selected");
    } else {
        $("#" + redo_this).find(".multiplier").text("(x"+ checkRepeated(redo_this, endorsed_deeds) +")");
    }
    endorsed_deeds.push(redo_this); // add deed back to array

    $("#total_points").text(updatePoints(endorsed_deeds));

    if (redo.length < 1){
        $("#redo").addClass("greyed_out");

    }
    $("#undo").removeClass("greyed_out");
    $("#resetPoints").removeClass("greyed_out");
    $("#submitPoints").removeClass("greyed_out");
    //alert("Deeds Array:\n" + endorsed_deeds.toString());
});

$("#submitPoints").click(function(){

    if (endorsed_deeds.length == 0){
        alert("You must select at least one deed before you can submit your endorsement")
    } else {
        //alert(endorsed_deeds.toString());
        endorsed_deeds.forEach(function(item) {
            var new_record = {
                "username": so_information.username,
                "endorsed_by": user_information.username,
                "deed": item,
                "date": new Date()
            };
            //alert(JSON.stringify(new_record));
            SESSION_HISTORY_TABLE.push(new_record)
        });

        //**SAVE TO DATABASE HERE**
        sessionStorage.setItem("SESSION_HISTORY_TABLE", JSON.stringify(SESSION_HISTORY_TABLE));

        alert("SUCCESS! You have endorsed " + so_information.first_name + " with " + updatePoints(endorsed_deeds) + " " + so_gender + " points!");
        window.location.href = "partner.html";
    }
});

$("#resetPoints").click(function(){
    resetGivePointsWindow();
});

$("#confirmUnbind").click(function(){
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if (((user_information.username == this.A && so_information.username == this.B) || (so_information.username == this.A && user_information.username == this.B)) && this.date_ended == null){
            this.date_ended = new Date();
            //alert (JSON.stringify(this));
            alert("You have successfully unbind your profile from " + so_information.first_name);
            return false;
        }
    });

    //**SAVE TO DATABASE HERE**
    sessionStorage.setItem("SESSION_RELATIONSHIPS_TABLE", JSON.stringify(SESSION_RELATIONSHIPS_TABLE));

    localStorage.setItem("anon_username", so_information.username);
    window.location.href = "anon_user.html";

});

$("#cancelUnbind").click(function(){
    $("#overlay").addClass("hidden");
    $("#unbindWindow").addClass("hidden")
});

/*Pop up windows*/
$("#give_points").click(function() {
    $("#overlay").removeClass("hidden");
    $("#giveWindow").removeClass("hidden");
    resetGivePointsWindow();
});

$("#unbind").click(function() {
    $("#overlay").removeClass("hidden");
    $("#unbindWindow").removeClass("hidden")
});

$(".close").click(function() {
    $("#overlay").addClass("hidden");
    $("#giveWindow").addClass("hidden")
    $("#unbindWindow").addClass("hidden")
});

/*Language Translation index*/
if (localStorage.getItem("index") == null){
    localStorage.setItem("index",0)
}

function translate (index) {
    $("#page_title").text(page_title[index]);
}