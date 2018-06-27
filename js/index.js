/** Koibito App
 *  history.js
 *  Created by Mauro J. Pappaterra on 24 of April 2018.
 */

/*INDEX PAGE SCRIPTS
* All scripts related to the index page. Each page has their own scripts in a single js document.
* The methods translate() is unique for each individual page.
*/

/*Login Scripts*/
function loginScript (login_data){
    var username = login_data.user_name.value; // "adam_1990";
    var password = login_data.password.value; // "godsavesevasdog";
    var exist = false;

    //alert("Login in as " + username + " with password " + password);

    $.each(SESSION_USER_TABLE, function(element){
        if (this.username == username){ // check if username exists
            exist = true;
            if (this.password == password){ // check if password matches
                //alert("SUCCESS! Username and password match!\n" + JSON.stringify(this));
                localStorage.setItem("login_data", JSON.stringify(this));
                window.location.replace("profile.html");
            } else {
                alert ("ERROR! Password is incorrect!")
                return false;
            }
        }
    });
    if (!exist){
        alert ("ERROR! Username is not registered in Koibito")
    }
};

function signupScript (signup_data){

    var username = signup_data.username.value;
    var password = signup_data.password.value;
    var password_repeat = signup_data.password_repeat.value;
    var email = signup_data.email.value;

    var gender = parseInt(signup_data.gender.value);

    var hasbandu = false;
    var waifu = false;
    var wakashu = false;

    $("input:checkbox[name=looking]:checked").each(function(){
        //alert ("selected: " + $(this).val());
        if ($(this).val() == "hasbandu"){
            hasbandu = true;
        }
        if ($(this).val() == "waifu"){
            waifu = true;
        }
        if ($(this).val() == "wakashu"){
            wakashu = true;
        }
    });

    //var image_file = $('#new_avatar').prop('files')[0]; //fetch profile picture
    //var image_file = signup_data.avatar;

    /* VERY IMPORTANT!
    Add Encapsulation and Data sanitation routine here!!
    */

    var first_name = signup_data.first_name.value;
    var last_name = signup_data.last_name.value;
    var DOB = signup_data.DOB.value;
    var description = signup_data.description.value;

    var new_user = {
        "username": username,
        "password": password,
        "email": email,
    };
    //alert (JSON.stringify(new_user));

    //**SAVE TO DATABASE HERE**
    SESSION_USER_TABLE.push(new_user);
    sessionStorage.setItem("SESSION_USER_TABLE", JSON.stringify(SESSION_USER_TABLE));

    var new_info = {
        "username": username,
        "first_name": first_name,
        "last_name": last_name,
        "date_of_birth": DOB,
        "gender": gender,
        "description": description,
        "hasbandu": hasbandu,
        "waifu": waifu,
        "wakashu": wakashu,
    };
    //alert (JSON.stringify(new_info));

    /* Upload avatar image to server */
    uploadImage(image_file, new_info.username);

    //**SAVE TO DATABASE HERE**
    SESSION_INFORMATION_TABLE.push(new_info);
    sessionStorage.setItem("SESSION_INFORMATION_TABLE", JSON.stringify(SESSION_INFORMATION_TABLE));

    alert("You have successfully created your Koibito profile!");

    $("#overlay").addClass("hidden");
    $("#signupWindow").addClass("hidden");
}

function uploadImage (imageFile, fileName){
    //alert("this is happening!");

    var file = imageFile; //$('#new_avatar').prop('files')[0];
    var form_data = new FormData();
    form_data.append('file', file);
    form_data.append('name', fileName);
    //alert(form_data);

    $.ajax({
        url: 'upload.php', // point to server-side PHP script
        type: 'POST',      // Type of request to be send, called as method
        cache: false,
        contentType: false,
        processData: false,
        data: form_data/*,
        success: function(php_script_response){
            alert("PHP server says: " + php_script_response); // display response from the PHP script, if any
        }*/
    });
}

function nextPage(){
    $("#page_1").addClass("hidden");
    $("#page_2").removeClass("hidden");
}

function previousPage(){
    $("#page_2").addClass("hidden");
    $("#page_1").removeClass("hidden");
}

/*Pop up windows*/
$("#login_button").click(function() {
    $("#overlay").removeClass("hidden");
    $("#loginWindow").removeClass("hidden");
});

$("#signup_button").click(function() {
    $("#overlay").removeClass("hidden");
    $("#signupWindow").removeClass("hidden");
    $("#page_1").removeClass("hidden");
    $("#page_2").addClass("hidden");
});

$("#give_points").click(function() {
    $("#overlay").removeClass("hidden");
    $("#giveWindow").removeClass("hidden");
});

$(".close").click(function() {
    $("#overlay").addClass("hidden");
    $("#loginWindow").addClass("hidden");
    $("#signupWindow").addClass("hidden");
});

/*Language Translation index*/
if (localStorage.getItem("index") == null){
    localStorage.setItem("index",0)
}

function translate (index) {
    $("#page_title").text(page_title[index]);
    $("#mission").text(mission[index]);
    $("#login_button").text(login_button[index]);
    $("#signup_button").text(signup_button[index]);
}