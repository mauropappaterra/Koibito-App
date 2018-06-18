/** Koibito App
 *  scripts.js
 *  Created by Mauro J. Pappaterra on 27 of May 2018.
 */

/* ALL COMMON SCRIPTS
* All scripts shared among all pages that make the main functionalities of the webapp.
*/

/**
 * These three functions redirect to corresponding view when clicking on a user profile link:
 * profile.html, partner.html or anon_user.html accordingly
 */
$(document).on('click','.link_profile',function(){
    window.location.href = "profile.html";
});

$(document).on('click','.link_so',function(){
    window.location.href = "partner.html";
});

$(document).on('click','.link_anon',function(){
    var redirect = this.classList;
    //alert(myClass[1]);

    localStorage.setItem("anon_username",redirect[1]);
    window.location.href = "anon_user.html";
});

function userStars (points, size){
    /**This method calculates individual starts based on points and returns
     * the corresponding amount of starts to print into DOM. The size of the stars is given
     * by the argument size */
    var stars = "";

    if (points < 1000) {
        stars = returnStars(1,size);
    } else {
        if (points < 4000){
            stars = returnStars(2,size);
        }else {
            if (points < 7000){
                stars = returnStars(3,size);
            }else {
                if (points < 10000){
                    stars = returnStars(4,size);
                } else {
                    if (points >= 10000){
                        stars = returnStars(5,size);
                    }
                }
            }
        }
    }
    return stars;
}

function returnStars (number, size){
    /**This method returns a number of stars of a given size */
    switch (size){
        case(0):
            return ("<i class='fa fa-star fa stars'></i> ").repeat(number); // small stars
        case(1):
            return ("<i class='fa fa-star fa-2x stars'></i> ").repeat(number); // medium stars
        case(2):
            return ("<i class='fa fa-star fa-5x stars'></i> ").repeat(number); // big stars
    }
}

function returnLabel (points){
    /**This method returns the corresponding label to print to DOM, given an amount of points */
    var label = "";

    if (points < 1000) {
        label = "a lice-infested";
    } else {
        if (points < 4000){
            label = "a lousy";
        }else {
            if (points < 7000){
                label = "an average";
            }else {
                if (points < 10000){
                    label = "an excellent";
                } else {
                    if (points >= 10000){
                        label = "an amazing";
                    }
                }
            }
        }
    }
    return label;
}

function deedDescription (deed){
    /**Given an index as argument, this method returns the deed's description from the DB */
    var description = "";
    $.each(DEEDS_TABLE, function(element){
        if (this.deed == deed){
            description = this.description;
            return;
        }
    });
    return description;
};

function deedPoints (deed){
    /**Given an index as argument, this method returns the deed's points from the DB */
    var points = "";
    $.each(DEEDS_TABLE, function(element){
        if (this.deed == deed){
            points = this.points;
            return;
        }
    });
    return points;
};

function getFirstname (username){
    /**Given an username as argument, this method returns the first name of from the DB */
    var first_name = "";
    $.each(SESSION_INFORMATION_TABLE, function(element){
        if (this.username == username){
            first_name = this.first_name;
            return;
        }
    });
    return first_name;
};

function getGender (index){
    /**Given an index denoting a gender, this method returns the label as a String */
    switch(index) {
        case 0:
            return "hasbandu";
        case 1:
            return "waifu";
        case 2:
            return "wakashu";
    }
}

function formatDate (date) {
    /**Returns formatted date as follows:  YYYY/MM/DD at 19:30 hs
     * e.g.: "2018/03/19 at 21:00:00 hs" */
        //alert(date);
    var date = new Date(date);
    var dd = date.getDate();
    var mm = formatMonth(date.getMonth());
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var formatted_date = mm + " " + dd  + " " + yyyy +" at "+ hh +":"+ min +":"+ sec + " hs";
    //alert(formatted_date);
    return formatted_date;
}

function formatMonth (index){
    /** Given an index denoting a month of the year, returns corresponding label as string */
    switch (index){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

function timeTogether (start_date, finish_date){
    /** Given the start and finish date of a relationship as an argument, this method calculates
     * and returns the time together in the relationship. Ongoing relationships have today's date
     * as finish date*/
    var start = new Date(start_date);
    var finish = new Date(finish_date);

    var total_years = finish.getFullYear() - start.getFullYear();
    var total_months = finish.getMonth() - start.getMonth();
    var total_days = finish.getDate() - start.getDate();

    return (total_years + " years " + total_months + " months " + " and " + total_days + " days" );
}

function calculatePoints (deeds_array){
    /** Given an array of deeds as argument, this method calculates the total points of all
     * deeds contain in the array */
    var points = 0;
    $.each(deeds_array, function(element){ // calculate points
        points += deedPoints(this.deed);
    });
    return points;
}

function updatePoints (deeds_array){
    /** Given an array of deeds as argument, this method calculates the total points of all
     * deeds contain in the array */
    var total_points = 0;

    deeds_array.forEach(function(item) {

        $.each(DEEDS_TABLE, function(element){

            if (this.deed == item){
                total_points += this.points;
                return 0;
            }
        });
    });

    return total_points;
}

function updatePointsNonce (deeds_array){
    /** Given an array of deeds as argument, this method calculates the total points of all
     * deeds contain in the array considering a nonce concatenated on each deed (requested points) */
    var total_points = 0;

    deeds_array.forEach(function(item) {

        var deed_id = Math.floor(item / 1000000); // eliminate nonce, return real deed id, before calculating points
        $.each(DEEDS_TABLE, function(element){

            if (this.deed == deed_id){
                total_points += this.points;
                return 0;
            }
        });
    });

    return total_points;
}

function checkRepeated (deed, deeds_array){
    /** Given a deed index and an array of deeds as argument, this method returns the number of times
     * the deed is contained */
    var multiplier = 1;
    deeds_array.forEach(function(item) {
        if(deed == item){
            multiplier += 1;
        }
    });

    return multiplier;
}

function activeRelationship (username_a, username_b){
    /** Given two usernames as argument, this method returns true if both users are in an active
     * relationship and false otherwise */
    if (getSO(username_a) == username_b){
        return true;
    }
}

function hasSO (username){
    /** Given a username as argument, this method returns true if the user is in an active
     * relationship and false otherwise */
    var result = false;
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if (this.A == username || this.B == username){
            if (this.date_ended == null && this.date_started != null){
                result = true;
            }
        }
    });
    return result;
}

function getSO (username){
    /** Given a username as argument, this method returns the SO (significant other) username */
    var so_username = null;
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if ((this.A == username || this.B == username) && this.date_ended == null && this.date_started != null){
            if (this.A == username){
                so_username = this.B;
            } else {
                so_username = this.A;
            }
        }
    });
    return so_username;
}

function getBindingRequests (username){
    /** Given a username as argument, this method returns an array with all usernames
     * that requested binding*/
    var requested = [];
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if (this.B == username && this.date_started == null){
            if (!hasSO(this.A)){
                requested.push(this.A)
            }
        }
    });
    return requested;
}

function checkBindingRequested (username_a, username_b){
    /** Given two usernames as argument, checks if username_a sent a binding request to username_b*/
    var requested = false;
    //alert("Checking if " + username_a +" sent request to " + username_b);
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if ((this.A == username_a && this.B == username_b) && this.date_started == null){
            requested = true;
        }
    });
    return requested;
}

function getRelationshipStartDate (username_a, username_b){
    /** Given two usernames as argument, this method returns the date the relationship started */
    var start_date = null;

    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if ((this.A == username_a && this.B == username_b) || (this.B == username_a && this.A == username_b)){
            start_date = this.date_started;
        }
    });
    return (new Date (start_date));
}

function getRelationshipEndDate (username_a, username_b){
    /** Given two usernames as argument, this method returns the date the relationship ended */
    var end_date = null;

    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if ((this.A == username_a && this.B == username_b) || (this.B == username_a && this.A == username_b)){
            if (this.date_ended == null){
                end_date = this.date_ended;
            }
        }
    });
    return (new Date (end_date));
}

function getSOHistory (username){
    /** Given a username as argument, this method returns an array containing the the usernames of
     * all SO that were ever in a relationship with the input username */
    var so_history = [];
    $.each(SESSION_RELATIONSHIPS_TABLE, function(element){
        if ((this.A == username || this.B == username) && this.date_ended != null){
            if (this.A == username){
                so_history.push(this.B);
            } else {
                so_history.push(this.A);
            }
        }
    });
    return so_history;
}

function getUserInfo (username){
    /** Given a username as argument, this method returns a JS objects containing all personal
     * information of the user */
    var information = null;
    $.each(SESSION_INFORMATION_TABLE, function(element){
        if (this.username == username){
            information = this;
        }
    });
    return information;
}

function getUserDeeds(username) {
    /** Given a username as argument, this method returns an array containing all deeds
     * done by the user */
    var user_deeds = [];
    $.each(SESSION_HISTORY_TABLE, function(element){ // fill in deeds table
        if (this.username == username && this.date != null && this.date != -1){ // find more elegant solution
            user_deeds.push(this)
        }
    });
    //alert(JSON.stringify(user_deeds));
    return user_deeds;
}

function getUserPoints (username) {
    /** Given a username as argument, this method returns the entire points given by endorsed deeds */
    var user_deeds = getUserDeeds(username);
    return calculatePoints(user_deeds);
}

function getRelationshipDeeds(username_a, username_b,) {
    /** Given two usernames as argument, this method returns an array containing all deeds
     * done by both users in a relationship */
    var relationship_deeds = [];
    $.each(SESSION_HISTORY_TABLE, function(element){ // fill in deeds table

        if (((this.username == username_a && this.endorsed_by == username_b) || (this.username == username_b && this.endorsed_by == username_a)) && (this.date != -1 && this.date != null)){// find more elegant solution
            relationship_deeds.push(this)
        }
    });
    return relationship_deeds;
}


function getUsersPoints(username, deedsArray) {
    /** Given a username and an array of deeds as argument, this method returns the total
     * points given by to the input username from the deeds array */
    var points = 0;
    $.each(deedsArray, function(element){ // calculate points
        if (this.username == username){
            points += deedPoints(this.deed);
        }
    });
    return points;
}

function percentage (points, total_points){
    /** Given a number of points from a total of points, returns the percentage */
    if (total_points == 0){
        return 0;
    }
    return Math.round(points * 100 / total_points);
}

function equalityRate (percentage_a, percentage_b){
    /** Given two percentages as argument, this method calculates the equality rate */
    var rate = 0;

    if ((percentage_a - percentage_b) == 0 || (percentage_b - percentage_a) == 0) {
        rate = 100.0;
    } else {
        rate = Math.round(100 / (Math.max(percentage_a, percentage_b) / Math.min(percentage_a, percentage_b)));
    }
    return rate;
}

function equalityDifference (percentage_a, percentage_b) {
    /** Given two percentages as argument, this method calculates the equality difference */
    var difference = Math.abs(percentage_a - percentage_b);
    return difference;
}

function relationshipStars (equality_difference, size) {
    /**This method calculates relationship starts based on equality difference and returns
     * the corresponding amount of starts to print into DOM. The size of the stars is given
     * by the argument size */
    var relationship_stars = "";

    if (equality_difference > 70){
        relationship_stars = returnStars(1,size);
    } else {
        if (equality_difference > 50){
            relationship_stars = returnStars(2,size);
        } else {
            if (equality_difference > 30){
                relationship_stars = returnStars(3,size);
            } else {
                if (equality_difference > 10){
                    relationship_stars = returnStars(4,size);
                } else {
                    relationship_stars = returnStars(5,size);
                }
            }
        }
    }
    return relationship_stars;
}

function relationshipLabel (equality_difference) {
    /**This method returns the corresponding label to print to DOM, given an amount the equality difference */
    var relationshipVeredict = "";
    if (equality_difference > 70){
        relationshipVeredict = "a pretty lousy";
    } else {
        if (equality_difference > 50){
            relationshipVeredict = "a lame";
        } else {
            if (equality_difference > 30){
                relationshipVeredict = "an average";
            } else {
                if (equality_difference > 10){
                    relationshipVeredict = "an amazing";
                } else {
                    relationshipVeredict = "an excellent";
                }
            }
        }
    }
    return relationshipVeredict;
}
