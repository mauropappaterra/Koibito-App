/** Koibito App
 *  profile.js
 *  Created by Mauro J. Pappaterra on 24 of April 2018.
 */

/* PROFILE PAGE SCRIPTS
* All scripts related to the profile page. Each page has their own scripts in a single js document.
* The methods translate() is unique for each individual page.
*/

/*Retrieve login information from localStorage*/
var login_data = localStorage.getItem("login_data");

var requested_deeds = []; // keep track of the endorsed deeds, also used for undo functionality
var selected_deeds = []; // keep track of the pending deeds selected, also used for undo functionality
var redo = []; // keep track of undone processes for redo functionality

var user_deed_history = []; // retrieve all user's deeds from HISTORY_TABLE
var user_points = 0; // calculate points

var binding_requests = [];
var binding_index = 0;

if (login_data == null){
    window.location.href = "index.html";
} else {
    login_data = JSON.parse(login_data); // parse string back to JSON...
    user_information = getUserInfo(login_data.username);// ... and retrieve user information
    //alert("Log in as " + login_data.username);
    //alert(JSON.stringify(user_information));

    /*Load User and SO information into page*/
    $("#profile_picture").attr("src","img/users/"+ login_data.username +".jpg");
    $(".firstname").text(user_information.first_name);
    $(".lastname").text(user_information.last_name);
    $("#description").text(user_information.description);
    /*Gender will be used for different CSS styling*/
    var user_gender = getGender(user_information.gender);
    $(".gender").text(user_gender);
    $(".user_css").addClass(user_gender);

    if (hasSO(login_data.username)){ // check if user is in a relations ship, print info to DOM accordingly
        $("#ask_points").removeClass("hidden");
        $("#review_points").removeClass("hidden");

        var so_information = getUserInfo(getSO(login_data.username));

        $("#relationship_info").html("<b>Current "+ getGender(so_information.gender) +": </b>" + so_information.first_name + " <i class='fa fa-heart red'></i>");
        $(".so_name").text(so_information.first_name);
        $(".so_gender").text(getGender(so_information.gender));

    } else {
        $("#relationship_info").html("<b><i>Looking for a new koibito! </i></b><i class='fa fa-heart-o red'></i>");
        $("#relationship_info").attr("href", "");
        $("#ask_points").addClass("hidden");
        $("#review_points").addClass("hidden");
        $(".link_so").addClass("hidden");
        $("#relationship_tab").addClass("hidden"); // this tab should be disable

        // Check for binding requests!
        binding_requests = getBindingRequests(login_data.username);
        if (binding_requests.length > 0){
            //alert ("You got binding requests from: " + binding_requests.toString());
            loadProspectWindow(binding_requests[binding_index])
        } /*else {
            alert ("You got no binding requests!");
        }*/
    }
    /*Retrieve all users deeds from HISTORY_TABLE and calculate points, print to DOM*/
    user_deed_history = getUserDeeds(login_data.username);
    user_points = calculatePoints(user_deed_history);

    $(".total_points").text(user_points);
    $("#stars").html(userStars(user_points, 1));
    $("#returnLabel").text(returnLabel(user_points));

    /*Load User Overview into page, this loop prints to DOM in chronological order the last 6 deeds completed*/
    $.each(user_deed_history.slice(-6) , function(element){ // fill in deeds table
        $("#deeds_overview").prepend(
            "<div class='deed " + user_gender +"'>" +
            "<img src='img/deeds/"+ this.deed +".png'>" +
            "<h3 class='title'>" + user_information.first_name + " " + deedDescription(this.deed) + "</h3>" +
            "<h6 class='date'>Endorsed by <span class='link_anon "+ this.endorsed_by +" link_white'>" + getFirstname(this.endorsed_by) + "</span> <i class='fa fa-heart red'></i> on "+ formatDate(this.date) +"</h6>" +
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
        $("#" + this.id).find(".multiplier").text("(x"+ checkRepeated(this.id, requested_deeds) +")");
    }
    requested_deeds.push(this.id);
    //alert(requested_deeds.toString());
    $("#total_points").text(updatePoints(requested_deeds));

    redo = []; // empty redo array every time a new item is added!
    $("#redo").addClass("greyed_out");
    $("#undo").removeClass("greyed_out");
    $("#resetPoints").removeClass("greyed_out");
    $("#submitRequest").removeClass("greyed_out");
});

/*Undo/Redo Functions*/
$("#undo").click(function(){
    var undo_this = requested_deeds.pop();
    //alert("Undoing last deed: " + undo_this);

    // PRINT CHANGES TO DOM HERE
    if (checkRepeated(undo_this, requested_deeds) > 1){
        $("#" + undo_this).find(".multiplier").text("(x"+ (checkRepeated(undo_this, requested_deeds) - 1) +")");
    } else {
        $("#" + undo_this).removeClass("selected");
        $("#" + undo_this).find(".multiplier").empty();
    }

    $("#total_points").text(updatePoints(requested_deeds));

    if (requested_deeds.length < 1){
        $("#undo").addClass("greyed_out");
        $("#resetPoints").addClass("greyed_out");
        $("#submitRequest").addClass("greyed_out");
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
        $("#" + redo_this).find(".multiplier").text("(x"+ checkRepeated(redo_this, requested_deeds) +")");
    }
    requested_deeds.push(redo_this); // add deed back to array

    $("#total_points").text(updatePoints(requested_deeds));

    if (redo.length < 1){
        $("#redo").addClass("greyed_out");
    }
    $("#undo").removeClass("greyed_out");
    $("#resetPoints").removeClass("greyed_out");
    $("#submitRequest").removeClass("greyed_out");
    //alert("Deeds Array:\n" + endorsed_deeds.toString());
});

$("#submitRequest").click(function(){

    if (requested_deeds.length == 0){
        alert("You must select at least one deed before you can submit your request")
    } else {
        //alert(requested_deeds.toString());
        requested_deeds.forEach(function(item) {
            // Duplication of requested deeds workaround
            var nonce = Math.floor((Math.random() * 100000) + 100000); // generate 6 digit nonce
            var new_record = {
                "username": user_information.username,
                "endorsed_by": so_information.username,
                "deed": item * 1000000 + nonce, // concatenates deed id with nonce
                "date": null
            };
            //alert(JSON.stringify(new_record));
            SESSION_HISTORY_TABLE.push(new_record)
        });
        //**SAVE TO DATABASE HERE**
        sessionStorage.setItem("SESSION_HISTORY_TABLE", JSON.stringify(SESSION_HISTORY_TABLE));

        alert("SUCCESS! You have requested " + updatePoints(requested_deeds) + " " + getGender(user_information.gender) + " points!.\n(Points need to be approved by " + so_information.first_name + " " + so_information.last_name + " before they appear in your profile)");
        window.location.href = "profile.html";
    }
});

/*$(".link_profile").click(function(){
    alert("this is happening!");
});*/

$("#resetPoints").click(function(){
    resetRequestPointsWindow();
});

function resetRequestPointsWindow() { // resets give points window
    requested_deeds = [];
    redo = [];
    $("#deeds_list").empty();

    /*Load Deeds list into page*/
    $.each(DEEDS_TABLE, function(element){ // fill in deeds table
        //alert(JSON.stringify(this))
        $("#deeds_list").append(
            "<div class='deed wakashu clickable' id='"+ this.deed +"'>" +
            "<img src='img/deeds/"+this.deed+".png'>" +
            "<h3 class='title'>I " + this.description + "</h3>" +
            "<h4 class='points'><b>"+ this.points +" points <span class='multiplier'></span></b></h4>" +
            "</div>"
        )
    });

    $("#redo").addClass("greyed_out");
    $("#undo").addClass("greyed_out");
    $("#resetPoints").addClass("greyed_out");
    $("#submitRequest").addClass("greyed_out");

    $("#total_points").text(0);
}

/*All review points window functionalities*/
$(document).on('click','.pending',function(){
    //alert("You have clicked on a  pending deed " + this.id);
    if (!($("#" + this.id).hasClass("selected"))){
        $("#" + this.id).addClass("selected");
        selected_deeds.push(this.id);
    } else {
        $("#" + this.id).removeClass("selected");
        selected_deeds.pop(this.id);
    }
    //alert(selected_deeds.toString());
    $("#selected_points").text(updatePointsNonce(selected_deeds));

    redo = []; // empty redo array every time a new item is selected!
    $("#redoSelection").addClass("greyed_out");
    $("#undoSelection").removeClass("greyed_out");
    $("#acceptPoints").removeClass("greyed_out");
    $("#declinePoints").removeClass("greyed_out");

});

$("#acceptPoints").click(function(){

    if (selected_deeds.length == 0){
        alert("You must select at least one deed!")
    } else {
        //alert(requested_deeds.toString());
        selected_deeds.forEach(function(item) {
            $.each(SESSION_HISTORY_TABLE , function(element){ // fill in deeds table
                if (this.endorsed_by == user_information.username && this.date == null && this.deed == item){
                    //alert("found! " +  JSON.stringify(this));
                    this.deed = Math.floor(item / 1000000);
                    this.date = new Date();
                    //alert(JSON.stringify(this));
                    return 0;
                }
            });
        });
        //**SAVE TO DATABASE HERE**
        sessionStorage.setItem("SESSION_HISTORY_TABLE", JSON.stringify(SESSION_HISTORY_TABLE));
        alert("SUCCESS! You have accepted the requested points selected!");
        window.location.href = "profile.html";
    }
});

$("#declinePoints").click(function(){

    if (selected_deeds.length == 0){
        alert("You must select at least one deed!")
    } else {

        selected_deeds.forEach(function(item) {
            $.each(SESSION_HISTORY_TABLE , function(element){ // fill in deeds table
                if (this.endorsed_by == user_information.username && this.date == null && this.deed == item){
                    //alert("found! " +  JSON.stringify(this));
                    var deleteMe = SESSION_HISTORY_TABLE.indexOf(this);
                    SESSION_HISTORY_TABLE.splice(deleteMe,1);
                    //alert(JSON.stringify(this));
                    return 0;
                }
            });
        });
        //alert(JSON.stringify(SESSION_HISTORY_TABLE));
        //**SAVE TO DATABASE HERE**
        sessionStorage.setItem("SESSION_HISTORY_TABLE", JSON.stringify(SESSION_HISTORY_TABLE));
        alert("SUCCESS! You have rejected the requested points selected!");
        window.location.href = "profile.html";
    }
});

/*Undo/Redo Functions*/

$("#undoSelection").click(function(){
    var undo_this = selected_deeds.pop();
    //alert("Undoing last deed: " + undo_this);

    // PRINT CHANGES TO DOM HERE
    $("#" + undo_this).removeClass("selected");
    $("#selected_points").text(updatePointsNonce(selected_deeds));

    if (selected_deeds.length < 1){
        $("#undoSelection").addClass("greyed_out");
        $("#acceptPoints").addClass("greyed_out");
        $("#declinePoints").addClass("greyed_out");
    }

    redo.push(undo_this); // add undone deed to redo array
    $("#redoSelection").removeClass("greyed_out");
});

$("#redoSelection").click(function(){
    //alert("Redo array:\n" + redo.toString())
    var redo_this = redo.pop();
    //alert("Redoing last deed undone: " + redo_this);

    // PRINT CHANGES TO DOM HERE
    $("#" + redo_this).addClass("selected");

    selected_deeds.push(redo_this); // add deed back to array

    $("#selected_points").text(updatePointsNonce(selected_deeds));

    if (redo.length < 1){
        $("#redoSelection").addClass("greyed_out");
    }

    $("#undoSelection").removeClass("greyed_out");
    $("#acceptPoints").removeClass("greyed_out");
    $("#declinePoints").removeClass("greyed_out");
    //alert("Deeds Array:\n" + selected_deeds.toString());
});

function resetReviewPointsWindow() { // resets review points window
    selected_deeds = [];
    redo = [];
    $("#review_list").empty();

    /*Load points that need review*/
    $.each(SESSION_HISTORY_TABLE , function(element){ // fill in deeds table
        if (this.endorsed_by == user_information.username && this.date == null){
            //alert(JSON.stringify(this))
            var deed_id = Math.floor(this.deed / 1000000);  // eliminate nonce, return real deed id
            $("#review_list").prepend(
                "<div class='wakashu pending clickable' id='"+ this.deed +"'>" +
                "<img src='img/deeds/"+ deed_id +".png'>" +
                "<h3 class='title'>" + getFirstname(this.username) + " " + deedDescription(deed_id) + "</h3>" +
                "<h4 class='points'><b>"+ deedPoints(deed_id) +" points</b></h4>" +
                "</div>"
            )
        }
    });

    $("#redoSelection").addClass("greyed_out");
    $("#undoSelection").addClass("greyed_out");
    $("#acceptPoints").addClass("greyed_out");
    $("#declinePoints").addClass("greyed_out");

    $("#selected_points").text(0);
}

$(".view_partner").click(function() {
    //alert("Redirecting to partners profile now!");
    window.location.href = "partner.html";
});

function loadProspectWindow (username){
    var prospect_information = getUserInfo(username);
    var prospect_points = getUserPoints(prospect_information.username);

    $(".prospectName").html(prospect_information.first_name);
    $("#prospectPicture").attr("src","img/users/"+ prospect_information.username +".jpg");
    $("#prospectPicture").addClass("link_anon " + prospect_information.username + " prospectPicture");
    $("#prospectStars").html(userStars(prospect_points,1));
    $("#prospectLabel").html(returnLabel(prospect_points));
    $("#prospectGender").html(getGender(prospect_information.gender));

    resetClasses();

    $("#bindingWindow").addClass(getGender(prospect_information.gender));
    $("#acceptBinding").addClass(getGender(prospect_information.gender));
    $("#declineBinding").addClass(getGender(prospect_information.gender));
    $("#decideLater").addClass(getGender(prospect_information.gender));

    $("#bindingWindow").removeClass("hidden");
    $("#overlay").removeClass("hidden");
}

function resetClasses(){
    $("#bindingWindow").removeClass('hasbandu');
    $("#acceptBinding").removeClass('hasbandu');
    $("#declineBinding").removeClass('hasbandu');
    $("#decideLater").removeClass('hasbandu');

    $("#bindingWindow").removeClass('waifu');
    $("#acceptBinding").removeClass('waifu');
    $("#declineBinding").removeClass('waifu');
    $("#decideLater").removeClass('waifu');

    $("#bindingWindow").removeClass('wakashu');
    $("#acceptBinding").removeClass('wakashu');
    $("#declineBinding").removeClass('wakashu');
    $("#decideLater").removeClass('wakashu');
}

$("#decideLater").click(function() {
    nextProspect();
});

function nextProspect() {
    binding_index += 1;

    if (binding_index >= binding_requests.length){
        binding_index = 0;
        $("#bindingWindow").addClass("hidden");
        $("#overlay").addClass("hidden");
    } else {
        loadProspectWindow(binding_requests[binding_index])
    }
}

$("#acceptBinding").click(function() {
    //alert("Accept binding to " + binding_requests[binding_index]);
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if (this.B == login_data.username && this.date_started == null){
            if (this.A == binding_requests[binding_index]){
                this.date_started = new Date(); // start relationship
            } else {
                var deleteMe = SESSION_RELATIONSHIPS_TABLE.indexOf(this);
                SESSION_RELATIONSHIPS_TABLE.splice(deleteMe,1);
            }
        }
    });

    binding_requests = [];
    binding_index = 0;

    //**SAVE TO DATABASE HERE**
    sessionStorage.setItem("SESSION_RELATIONSHIPS_TABLE", JSON.stringify(SESSION_RELATIONSHIPS_TABLE));
    alert("Congratulations! Your profiles are now bind!");
    location.reload();
});

$("#declineBinding").click(function() {
    //alert("Decline binding to " + binding_requests[binding_index]);
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if (this.B == login_data.username && this.A == binding_requests[binding_index] && this.date_started == null){
            var deleteMe = SESSION_RELATIONSHIPS_TABLE.indexOf(this);
            SESSION_RELATIONSHIPS_TABLE.splice(deleteMe,1);
            return false;
        }
    });
    binding_requests.splice(binding_index,1);
    //alert(binding_requests.toString());
    //**SAVE TO DATABASE HERE**
    sessionStorage.setItem("SESSION_RELATIONSHIPS_TABLE", JSON.stringify(SESSION_RELATIONSHIPS_TABLE));
    nextProspect();
});

$("#logoff").click(function() {
    localStorage.clear();
    window.location.href = "index.html";
});

/*Pop up windows*/
$("#ask_points").click(function() {
    $("#overlay").removeClass("hidden");
    $("#requestWindow").removeClass("hidden");
    resetRequestPointsWindow();
});

$("#review_points").click(function() {
    $("#overlay").removeClass("hidden");
    $("#reviewWindow").removeClass("hidden");
    resetReviewPointsWindow();
});

$(".close").click(function() {
    $("#overlay").addClass("hidden");
    $("#requestWindow").addClass("hidden");
    $("#reviewWindow").addClass("hidden");
    $("#bindingWindow").addClass("hidden");

});

/*Language Translation index*/
if (localStorage.getItem("index") == null){
    localStorage.setItem("index",0)
}

function translate (index) {
    $("#page_title").text(page_title[index]);
}
