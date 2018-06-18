/** Koibito App
 *  anon_user.js
 *  Created by Mauro J. Pappaterra on 24 of April 2018.
 */

/* ANON_USER PAGE SCRIPTS
* All scripts related to the anon user page (profile other than user or partner).
* Each page has their own scripts in a single js document.
* The methods translate() is unique for each individual page.
*/

/*Retrieve login information from localStorage*/
var login_data = JSON.parse(localStorage.getItem("login_data"));
var anon_username = localStorage.getItem("anon_username");

if (anon_username == null){ // if there is no user to display, return to profile page
    window.location.href = "profile.html";
} else {

    var anon_information = getUserInfo(anon_username); // retrieve anon and user information from DB
    var user_information = getUserInfo(login_data.username);

    if (activeRelationship(anon_information.username, user_information.username)){
        window.location.href = "partner.html"; // if anon == partner redirect to corresponding view
    }
    if( user_information.username == anon_information.username){
        window.location.href = "profile.html"; // if anon == user redirect to corresponding view
    }

    //alert(checkBindingRequested(user_information.username, anon_information.username));

    if (checkBindingRequested(user_information.username, anon_information.username)){ // check if binding request already sent
        $("#bind").append(
            "<i class='fa fa-heart-o fa-3x grey'></i><br>Binding Request Sent<br>");
        $("#bind").addClass("greyed_out");
    } else {
        if (checkBindingRequested(anon_information.username, user_information.username)){
            $("#bind").append(
                "<i class='fa fa-heart fa-3x red'></i>Respond to Request<br>");
            $("#bind").addClass("needs_response");
        }else {
            if (hasSO(anon_information.username)){
                $("#bind").append(
                    "<i class='fa fa-heart fa-3x grey'></i><br>Already has a koibito!<br>");
                $("#bind").addClass("greyed_out");
            } else {
                $("#bind").append(
                    "<i class='fa fa-heart-o fa-3x red'></i>Request Binding<br>");
            }
        }
    }
    //alert("You are looking at anonymous " + anon_information.username);

    /*Print anon information into DOM*/
    $("#profile_picture").attr("src","img/users/"+ anon_information.username +".jpg");
    $(".firstname").text(anon_information.first_name);
    $(".lastname").text(anon_information.last_name);
    $("#description").text(anon_information.description);
    /*Gender will be used for different CSS styling*/
    var gender = getGender(anon_information.gender);
    $(".gender").text(gender);
    $(".anon_css").addClass(gender);

    /*Print anon relationship information into DOM*/
    if (hasSO(anon_information.username)){

        var so_information = getUserInfo(getSO(anon_username));

        $("#relationship_info").html("<b>Current "+ getGender(so_information.gender) +": </b>" + so_information.first_name + " <i class='fa fa-heart red'></i>");
        $("#relationship_info").addClass("link_anon");
        $("#relationship_info").addClass(so_information.username);
        $("#relationship_info").addClass("link_white");
        //localStorage.setItem("anon_information", JSON.stringify(so_information));
        //$("#relationship_info").attr("href", "anon_user.html");
    } else {
        $("#relationship_info").html("<b><i>Looking for a new koibito! </i></b><i class='fa fa-heart-o red'></i>");
        $("#relationship_info").addClass("link_white");
    }

    /*Retrieve anon deeds from HISTORY_TABLE and calculate points, print to DOM*/
    var anon_deed_history = getUserDeeds(anon_username);
    var anon_points = calculatePoints(anon_deed_history);

    $(".total_points").text(anon_points);
    $("#stars").html(userStars(anon_points, 1));
    $("#returnLabel").text(returnLabel(anon_points));

    /*Load Anon Overview into page, this loop prints to DOM in chronological order the last 6 deeds completed*/
    $.each(anon_deed_history.slice(-6), function(element){ // fill in deeds table
        $("#deeds_overview").prepend(
            "<div class='deed " + gender +"'>" +
            "<img src='img/deeds/"+ this.deed +".png'>" +
            "<h3 class='title'>" + anon_information.first_name + " " + deedDescription(this.deed) + "</h3>" +
            "<h6 class='date'>Endorsed by <span class='link_anon "+ this.endorsed_by+" link_white'>" +getFirstname(this.endorsed_by)  + "</span> <i class='fa fa-heart red'></i> on "+ formatDate(this.date) +"</h6>" +
            "<h4 class='points'><b>" + deedPoints(this.deed)+" points</b></h4>" +
            "</div>"
        )
    });
}

$("#confirmBind").click(function(){

    if (hasSO(user_information.username)){
        alert("You can't send a bind request if you are currently in a relationship! You must unbind from your current koibito first!");
        $("#overlay").addClass("hidden");
        $("#bindWindow").addClass("hidden")
    } else {
        if (hasSO(anon_information.username)){
            alert("You can't send a bind request to someone in a relationship! They must unbind from their current koibito first!");
            $("#overlay").addClass("hidden");
            $("#bindWindow").addClass("hidden");
        } else {
            var new_relationship = {
                "A": user_information.username,
                "B": anon_username,
                "date_started": null, // requested binding have no start date
                "date_ended": null,
            };
            //alert (JSON.stringify(new_relationship));
            SESSION_RELATIONSHIPS_TABLE.push(new_relationship);
            sessionStorage.setItem("SESSION_RELATIONSHIPS_TABLE", JSON.stringify(SESSION_RELATIONSHIPS_TABLE));

            alert("You have sent a bind request to " + anon_information.first_name +"!, now you must wait for their response!");
            //$("#overlay").addClass("hidden");
            //$("#bindWindow").addClass("hidden")
            location.reload();
        }
    }
});

$("#cancelBind").click(function(){
    $("#overlay").addClass("hidden");
    $("#bindWindow").addClass("hidden")
});

$("#bind").click(function() {
    $("#overlay").removeClass("hidden");

    if ($("#bind").hasClass("needs_response")){ // if anon already requested binding load corresponding window
        $("#reviewBindingWindow").removeClass("hidden");
    } else {
        $("#bindWindow").removeClass("hidden");
    }
});

$("#acceptBinding").click(function() {
    //alert("Accept binding to " + anon_username);
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if (this.B == login_data.username && this.date_started == null){
            if (this.A == anon_username){
                this.date_started = new Date(); // start relationship
            } else {
                var deleteMe = SESSION_RELATIONSHIPS_TABLE.indexOf(this)
                SESSION_RELATIONSHIPS_TABLE.splice(deleteMe,1);
            }
        }
    });
    //**SAVE TO DATABASE HERE**
    sessionStorage.setItem("SESSION_RELATIONSHIPS_TABLE", JSON.stringify(SESSION_RELATIONSHIPS_TABLE));
    alert("Congratulations! Your profiles are now bind!");

    window.location.href = "partner.html";
});

$("#declineBinding").click(function() {
    //alert("Decline binding to " + anon_username);
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if (this.B == login_data.username && this.A == anon_username && this.date_started == null){
            var deleteMe = SESSION_RELATIONSHIPS_TABLE.indexOf(this);
            SESSION_RELATIONSHIPS_TABLE.splice(deleteMe,1);
            return false;
        }
    });
    //**SAVE TO DATABASE HERE**
    sessionStorage.setItem("SESSION_RELATIONSHIPS_TABLE", JSON.stringify(SESSION_RELATIONSHIPS_TABLE));
    alert("You have rejected "+ anon_information.first_name +" bind request!");

    location.reload();
});

$(".close").click(function() {
    $("#overlay").addClass("hidden");
    $("#bindWindow").addClass("hidden");
    $("#reviewBindingWindow").addClass("hidden");
});

/*Language Translation index*/
if (localStorage.getItem("index") == null){
    localStorage.setItem("index",0)
}

function translate (index) {
    $("#page_title").text(page_title[index]);
}