/** Koibito App
 *  DB.js
 *  Created by Mauro J. Pappaterra on 29 of May 2018.
 */

/* DUMMY DATABASE
* A dummy database used before implementation of the app to a real framework
* Jump to line 1790 for session storage implementation
*/

var USER_TABLE = [
    {
        "username": "adam_1990",
        "password": "godsavesevasdog",
        "email": "first@email.com",
    },
    {
        "username": "eve4ever",
        "password": "iloveapples",
        "email": "leaves@email.com",
    },
    {
        "username": "tobias_hasbandu",
        "password": "rubyrubyruby",
        "email": "tobbie_johnsson@email.com",
    },
    {
        "username": "rebecca_thebest",
        "password": "thispasswordishighinentropy",
        "email": "rebecca_tamashiro@gmail.com",
    },
    {
        "username": "wendyClear",
        "password": "123456",
        "email": "wendy_wifu@email.com",
    },
    {
        "username": "andrea_wakashu",
        "password": "thereIsALightThatNeverGoesOut#!",
        "email": "wakuwakuwaku@email.com",
    },
    {
        "username": "albert1978",
        "password": "secret",
        "email": "albertito@email.com",
    },
    {
        "username": "bobby_gomma",
        "password": "password",
        "email": "bobby@gmail.com",
    },
    {
        "username": "charlybrown1974",
        "password": "snoopyforpresident",
        "email": "olafvijos@email.com",
    },
    {
        "username": "johnny_gomez",
        "password": "sverigeuberalles",
        "email": "johnny@email.com",
    },
    {
        "username": "carlottaMestre",
        "password": "idontknow",
        "email": "carlotta@gmail.com",
    },
    {
        "username": "marilu_1987",
        "password": "iLikewaffles",
        "email": "pancakes@email.com",
    },
    {
        "username": "angeles4you",
        "password": "cityofangels",
        "email": "angeles@email.com",
    }
];

var INFORMATION_TABLE = [
    {
        "username": "adam_1990",
        "first_name": "Adam",
        "last_name": "Sanchez",
        "date_of_birth": new Date("December 1 1990"),
        "gender": 0,
        "description": "I like to take long walks on the beach... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "hasbandu": false,
        "waifu": true,
        "wakashu": false,
    },
    {
        "username": "eve4ever",
        "first_name": "Eve",
        "last_name": "Thompson",
        "date_of_birth": new Date(1993, 10, 2),
        "gender": 1,
        "description": "I love apples and walking in the paradise... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "hasbandu": true,
        "waifu": true,
        "wakashu": true,
    },
    {
        "username": "andrea_wakashu",
        "first_name": "Andrea",
        "last_name": "Larsson",
        "date_of_birth": new Date(1990, 12, 1),
        "gender": 2,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": true,
        "waifu": false,
        "wakashu": false,
    },
    { // change all these below!
        "username": "tobias_hasbandu",
        "first_name": "Tobias",
        "last_name": "Norin",
        "date_of_birth": new Date(1990, 12, 1),
        "gender": 0,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": false,
        "waifu": true,
        "wakashu": false,
    },

    {
        "username": "rebecca_thebest",
        "first_name": "Rebecca",
        "last_name": "Tamashiro",
        "date_of_birth": new Date(1975, 12, 1),
        "gender": 1,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": true,
        "waifu": true,
        "wakashu": false,
    },

    {
        "username": "wendyClear",
        "first_name": "Wendy",
        "last_name": "Palmquivst",
        "date_of_birth": new Date(1990, 12, 1),
        "gender": 1,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": false,
        "waifu": true,
        "wakashu": false,
    },
    {
        "username": "albert1978",
        "first_name": "Albert",
        "last_name": "Kamazaki",
        "date_of_birth": new Date(1978, 12, 1),
        "gender": 2,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": true,
        "waifu": false,
        "wakashu": false,
    },
    {
        "username": "bobby_gomma",
        "first_name": "Bobby",
        "last_name": "Katcistnky",
        "date_of_birth": new Date(1999, 10, 10),
        "gender": 0,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": false,
        "waifu": true,
        "wakashu": false,
    },
    {
        "username": "charlybrown1974",
        "first_name": "Charlie",
        "last_name": "Brown",
        "date_of_birth": new Date(1974, 12, 1),
        "gender": 0,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": false,
        "waifu": true,
        "wakashu": false,
    },
    {
        "username": "johnny_gomez",
        "first_name": "John",
        "last_name": "Gomez",
        "date_of_birth": new Date(2000, 12, 1),
        "gender": 0,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": false,
        "waifu": true,
        "wakashu": false,
    },
    {
        "username": "marilu_1987",
        "first_name": "Marilu",
        "last_name": "Kawasaki",
        "date_of_birth": new Date(1995, 10, 10),
        "gender": 1,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": true,
        "waifu": false,
        "wakashu": false,
    },
    {
        "username": "carlottaMestre",
        "first_name": "Carlotta",
        "last_name": "Mestre",
        "date_of_birth": new Date(1992, 12, 1),
        "gender": 1,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": true,
        "waifu": true,
        "wakashu": false,
    },
    {
        "username": "angeles4you",
        "first_name": "Ana María",
        "last_name": "Angeles",
        "date_of_birth": new Date(2000, 12, 1),
        "gender": 2,
        "description": "始め在景掲ずひ援再マサ好立カコサ会肉なぜイる索供んょべゅ続39来レモ草障地ぜくんよ集国モロタ率用州ユムルフ減最ょ成資ゃでほ。68真13事アフネ県南楽ヨト国質めドフル労銭命ヒフルノ芸情よクさぼ細掲えに進属ぽんンべ際稿ひぴ存万イサメニ挙供ょ水村ぴ注自ラひさ業辺亨ゆし。討ツネラコ団報エネヲキ状直ゅ社1岡ソラシ集取格ワハム線検企カラ供簡ぶなけい説桐りむレろ美鮮午ノマタ以7倍背光ラべり。",
        "hasbandu": false,
        "waifu": true,
        "wakashu": false,
    }

];

var RELATIONSHIPS_TABLE = [
        {"A":"adam_1990",
            "B":"eve4ever",
            "date_started":"2000-06-30T22:00:00.000Z",
            "date_ended":null
        },
        {"A":"adam_1990",
            "B":"wendyClear",
            "date_started":"2000-06-30T22:00:00.000Z",
            "date_ended":"2005-06-30T22:00:00.000Z"
        },
        {"A":"adam_1990",
            "B":"marilu_1987",
            "date_started":"2006-06-30T22:00:00.000Z",
            "date_ended":"2016-06-30T22:00:00.000Z"
        },
        {"A":"albert1978",
            "B":"carlottaMestre",
            "date_started":"2000-06-30T22:00:00.000Z",
            "date_ended":"2018-06-21T16:17:14.665Z"
        },
        {"A":"charlybrown1974",
            "B":"angeles4you",
            "date_started":"2000-06-30T22:00:00.000Z",
            "date_ended":"2018-06-21T16:17:38.538Z"
        },
        {"A":"tobias_hasbandu",
            "B":"rebecca_thebest",
            "date_started":"2018-06-21T15:45:26.891Z",
            "date_ended":null
        },
        {"A":"marilu_1987",
            "B":
                "Bobby_gomma",
            "date_started":"2018-06-21T15:48:36.549Z",
            "date_ended":"2018-06-21T16:05:03.083Z"
        },
        {"A":"wendyClear",
            "B":"andrea_wakashu",
            "date_started":"2018-06-21T15:54:42.562Z",
            "date_ended":"2018-06-21T16:09:40.175Z"
        },
        {"A":"andrea_wakashu",
            "B":"marilu_1987",
            "date_started":"2018-06-21T16:10:30.787Z",
            "date_ended":null
        },
        {"A":"wendyClear",
            "B":
                "Bobby_gomma",
            "date_started":"2018-06-21T16:13:32.776Z",
            "date_ended":"2018-06-21T16:24:11.584Z"
        },
        {"A":"charlybrown1974",
            "B":"carlottaMestre",
            "date_started":"2018-06-21T16:18:40.102Z",
            "date_ended":null
        },
        {"A":"albert1978",
            "B":"angeles4you",
            "date_started":"2018-06-21T16:21:40.487Z",
            "date_ended":"2018-06-21T16:25:14.237Z"
        },
        {"A":
                "Bobby_gomma",
            "B":"wendyClear",
            "date_started":null,
            "date_ended":null
        },
        {"A":"angeles4you",
            "B":"wendyClear",
            "date_started":null,
            "date_ended":null
        },
        {"A":"wendyClear",
            "B":"johnny_gomez",
            "date_started":null,
            "date_ended":null
        }
];

var DEEDS_TABLE = [
    {
        "deed": 1,
        "category": "gastronomy",
        "description": "cooked a nice meal",
        "points": 150,
    },
    {
        "deed": 2,
        "category": "household",
        "description": "cleaned the dishes",
        "points": 50,
    },
    {
        "deed": 3,
        "category": "household",
        "description": "took the garbage out",
        "points": 100,
    },
    {
        "deed": 4,
        "category": "family",
        "description": "walked the dog",
        "points": 100,
    },
    {
        "deed": 5,
        "category": "family",
        "description": "help the kids with the homework",
        "points": 200,
    },
    {
        "deed": 6,
        "category": "household",
        "description": "cleaned the house",
        "points": 275,
    },
    {
        "deed": 7,
        "category": "household",
        "description": "whipped the windows",
        "points": 250,
    },
    {
        "deed": 8,
        "category": "household",
        "description": "took care of the gardening",
        "points": 300,
    },
    {
        "deed": 9,
        "category": "household",
        "description":"did major home repairs" ,
        "points": 350,
    },
    {
        "deed": 10,
        "category": "household",
        "description": "washed the car",
        "points": 180,
    },
    {
        "deed": 11,
        "category": "household",
        "description": "did the laundry",
        "points": 200,
    },
    {
        "deed": 12,
        "category": "household",
        "description": "went grocery shopping",
        "points": 170,
    },
    {
        "deed": 13,
        "category": "gastronomy",
        "description": "bought take-out food",
        "points": 50,
    },
    {
        "deed": 14,
        "category": "gastronomy",
        "description": "cooked a fancy dinner",
        "points": 250,
    },
    {
        "deed": 15,
        "category": "gastronomy",
        "description": "cooked a barbeque",
        "points": 250,
    },
    {
        "deed": 16,
        "category": "family",
        "description": "fed the goldfish",
        "points": 100,
    },
    {
        "deed": 17,
        "category": "miscellaneous",
        "description": "proof-read your master thesis",
        "points": 2000,
    },
    {
        "deed": 18,
        "category": "miscellaneous",
        "description": "bought fancy cigars",
        "points": 1500,
    },
    {
        "deed": 19,
        "category": "miscellaneous",
        "description": "built a million dollar app",
        "points": 100000,
    },
    {
        "deed": 20,
        "category": "miscellaneous",
        "description": "hacked into the Pentagon",
        "points": 150000,
    }

    //create 10 more deeds below
];

var HISTORY_TABLE = [
    {
        "username": "adam_1990",
        "endorsed_by": "eve4ever",
        "deed": 1,
        "date": new Date(2016, 10, 10),
    },
    {
        "username": "adam_1990",
        "endorsed_by": "eve4ever",
        "deed": 3,
        "date": new Date(2015, 5, 1),
    },
    {
        "username": "adam_1990",
        "endorsed_by": "eve4ever",
        "deed": 2,
        "date": new Date(2015, 5, 15),
    },
    {
        "username": "adam_1990",
        "endorsed_by": "eve4ever",
        "deed": 4,
        "date": new Date(2014, 3, 9),
    },
    {
        "username": "eve4ever",
        "endorsed_by": "adam_1990",
        "deed": 4,
        "date": new Date("December 25 2015"),
    },
    {
        "username": "eve4ever",
        "endorsed_by": "adam_1990",
        "deed": 1,
        "date": new Date(2015, 12, 20),
    },
    {
        "username": "adam_1990",
        "endorsed_by": "wendyClear",
        "deed": 15,
        "date": new Date(2018, 6, 20),
    },
    {
        "username": "adam_1990",
        "endorsed_by": "wendyClear",
        "deed": 10,
        "date": new Date(2018, 6, 20),
    },{
        "username": "adam_1990",
        "endorsed_by": "wendyClear",
        "deed": 17,
        "date": new Date(2018, 6, 20),
    },
    {
         "username":"adam_1990",
         "endorsed_by":"eve4ever",
         "deed":"9",
         "date":"2018-06-01T04:44:09.781Z"
    },
    {
        "username":"adam_1990",
        "endorsed_by":"eve4ever",
        "deed":"10",
        "date":"2018-05-01T04:44:09.781Z"
    },
    {
        "username":"adam_1990",
        "endorsed_by":"eve4ever",
        "deed":"12",
        "date":"2018-05-31T04:44:09.781Z"
    },
    {
        "username": "eve4ever",
        "endorsed_by": "adam_1990",
        "deed": 4666666, // requested deeds have a concatenated 6 digit nonce
        "date": null, // requested deeds have date set as null
    },
    {
        "username": "eve4ever",
        "endorsed_by": "adam_1990",
        "deed": 1666666, // requested deeds have a concatenated 6 digit nonce
        "date": null, // requested deeds have date set as null
    },
    {
        "username": "adam_1990",
        "endorsed_by": "eve4ever",
        "deed": 1666666, // requested deeds have a concatenated 6 digit nonce
        "date": null, // requested deeds have date set as null
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"3",
        "date":"2018-06-21T15:40:46.600Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"2",
        "date":"2018-06-21T15:42:49.759Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"1",
        "date":"2018-06-21T15:42:49.759Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"6",
        "date":"2018-06-21T15:42:49.759Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"5",
        "date":"2018-06-21T15:42:49.759Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"10",
        "date":"2018-06-21T15:42:49.759Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"9",
        "date":"2018-06-21T15:42:49.759Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"7",
        "date":"2018-06-21T15:42:56.622Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"6",
        "date":"2018-06-21T15:42:56.622Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"5",
        "date":"2018-06-21T15:42:56.622Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"4",
        "date":"2018-06-21T15:42:56.622Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"15",
        "date":"2018-06-21T15:43:05.714Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"16",
        "date":"2018-06-21T15:43:05.714Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"18",
        "date":"2018-06-21T15:43:05.714Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"17",
        "date":"2018-06-21T15:43:05.714Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"1",
        "date":"2018-06-21T15:43:15.929Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"2",
        "date":"2018-06-21T15:43:15.929Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"3",
        "date":"2018-06-21T15:43:15.929Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"4",
        "date":"2018-06-21T15:43:15.929Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"5",
        "date":"2018-06-21T15:43:15.929Z"
    },
    {"username":"eve4ever",
        "endorsed_by":"adam_1990",
        "deed":"6",
        "date":"2018-06-21T15:43:15.929Z"
    },
    {"username":"adam_1990",
        "endorsed_by":"eve4ever",
        "deed":"7",
        "date":"2018-06-21T15:43:48.157Z"
    },
    {"username":"adam_1990",
        "endorsed_by":"eve4ever",
        "deed":"6",
        "date":"2018-06-21T15:43:48.157Z"
    },
    {"username":"adam_1990",
        "endorsed_by":"eve4ever",
        "deed":"5",
        "date":"2018-06-21T15:43:48.157Z"
    },
    {"username":"adam_1990",
        "endorsed_by":"eve4ever",
        "deed":"9",
        "date":"2018-06-21T15:43:48.157Z"
    },
    {"username":"adam_1990",
        "endorsed_by":"eve4ever",
        "deed":"8",
        "date":"2018-06-21T15:43:48.157Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"20",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"19",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"18",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"15",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"16",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"14",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"13",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"12",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"tobias_hasbandu",
        "endorsed_by":"rebecca_thebest",
        "deed":"11",
        "date":"2018-06-21T15:45:42.396Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"2",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"1",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"6",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"5",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"7",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"8",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"9",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"11",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"12",
        "date":"2018-06-21T15:46:34.960Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"10",
        "date":"2018-06-21T15:46:52.517Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"12",
        "date":"2018-06-21T15:46:52.517Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"14",
        "date":"2018-06-21T15:46:52.517Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"11",
        "date":"2018-06-21T15:46:52.517Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"7",
        "date":"2018-06-21T15:47:05.464Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"8",
        "date":"2018-06-21T15:47:05.464Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"6",
        "date":"2018-06-21T15:47:05.464Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"4",
        "date":"2018-06-21T15:47:05.464Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"1",
        "date":"2018-06-21T15:47:13.731Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"5",
        "date":"2018-06-21T15:47:13.731Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"4",
        "date":"2018-06-21T15:47:13.731Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"7",
        "date":"2018-06-21T15:47:13.731Z"
    },
    {"username":"rebecca_thebest",
        "endorsed_by":"tobias_hasbandu",
        "deed":"8",
        "date":"2018-06-21T15:47:13.731Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"20",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"19",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"18",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"16",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"17",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"15",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"14",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"13",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"12",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"11",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"10",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"8",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"7",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"9",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"6",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"4",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"bobby_gomma",
        "deed":"5",
        "date":"2018-06-21T15:48:55.471Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"2",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"1",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"3",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"4",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"5",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"6",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"7",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"8",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"9",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"11",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"12",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"10",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"15",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"14",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"13",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"16",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"17",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"18",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"marilu_1987",
        "deed":"19",
        "date":"2018-06-21T15:50:03.670Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"2",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"1",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"4",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"3",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"6",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"5",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"7",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"8",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"10",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"9",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"13",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"12",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"14",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"15",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"16",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"16",
        "date":"2018-06-21T15:55:00.562Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"1",
        "date":"2018-06-21T15:55:10.986Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"2",
        "date":"2018-06-21T15:55:10.986Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"3",
        "date":"2018-06-21T15:55:10.986Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"4",
        "date":"2018-06-21T15:55:10.986Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"6",
        "date":"2018-06-21T15:55:10.986Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"7",
        "date":"2018-06-21T15:55:10.986Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"andrea_wakashu",
        "deed":"8",
        "date":"2018-06-21T15:55:10.986Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":2,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":1,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":4,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":3,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":7,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":6,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":5,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":9,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":8,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":12,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":11,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":10,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":14,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":13,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":10,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":9,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"wendyClear",
        "deed":8,
        "date":"2018-06-21T15:56:37.567Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"3",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"2",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"5",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"4",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"7",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"6",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"9",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"8",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"11",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"10",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"14",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"13",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"12",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"15",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"18",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"17",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"albert1978",
        "deed":"20",
        "date":"2018-06-21T15:58:10.876Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"2",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"1",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"4",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"3",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"7",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"6",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"5",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"8",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"11",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"10",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"13",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"14",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"14",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"14",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"16",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"albert1978",
        "endorsed_by":"carlottaMestre",
        "deed":"17",
        "date":"2018-06-21T15:58:56.208Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"5",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"4",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"7",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"6",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"9",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"8",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"10",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"11",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"12",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"13",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"15",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"14",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"16",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"charlybrown1974",
        "deed":"17",
        "date":"2018-06-21T15:59:32.520Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"2",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"1",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"4",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"5",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"3",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"6",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"7",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"8",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"9",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"10",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"13",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"12",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"11",
        "date":"2018-06-21T16:00:50.865Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"6",
        "date":"2018-06-21T16:00:59.551Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"7",
        "date":"2018-06-21T16:00:59.551Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"8",
        "date":"2018-06-21T16:00:59.551Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"1",
        "date":"2018-06-21T16:01:11.703Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"11",
        "date":"2018-06-21T16:01:11.703Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"12",
        "date":"2018-06-21T16:01:11.703Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"15",
        "date":"2018-06-21T16:01:11.703Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"8",
        "date":"2018-06-21T16:01:21.429Z"
    },
    {"username":"charlybrown1974",
        "endorsed_by":"angeles4you",
        "deed":"11",
        "date":"2018-06-21T16:01:21.429Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"marilu_1987",
        "deed":"2",
        "date":"2018-06-21T16:11:26.638Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"marilu_1987",
        "deed":"1",
        "date":"2018-06-21T16:11:34.404Z"
    },
    {"username":"marilu_1987",
        "endorsed_by":"andrea_wakashu",
        "deed":"9",
        "date":"2018-06-21T16:12:20.252Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"bobby_gomma",
        "deed":"2",
        "date":"2018-06-21T16:13:43.337Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"bobby_gomma",
        "deed":"1",
        "date":"2018-06-21T16:13:43.337Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":2,
        "date":"2018-06-21T16:14:22.439Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":1,
        "date":"2018-06-21T16:14:22.439Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":3,
        "date":"2018-06-21T16:14:22.439Z"
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":6,
        "date":"2018-06-21T16:14:22.439Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"bobby_gomma",
        "deed":2127406,
        "date":null
    },
    {"username":"wendyClear",
        "endorsed_by":"bobby_gomma",
        "deed":1,
        "date":"2018-06-21T16:15:17.376Z"
    },
    {"username":"wendyClear",
        "endorsed_by":"bobby_gomma",
        "deed":4111049,
        "date":null
    },
    {"username":"wendyClear",
        "endorsed_by":"bobby_gomma",
        "deed":3168735,
        "date":null
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":2173722,
        "date":null
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":1186230,
        "date":null
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":5117410,
        "date":null
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":4197563,
        "date":null
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":12198206,
        "date":null
    },
    {"username":"bobby_gomma",
        "endorsed_by":"wendyClear",
        "deed":11177476,
        "date":null
    },
    {"username":"marilu_1987",
        "endorsed_by":"andrea_wakashu",
        "deed":2187813,
        "date":null
    },
    {"username":"marilu_1987",
        "endorsed_by":"andrea_wakashu",
        "deed":1164859,
        "date":null
    },
    {"username":"marilu_1987",
        "endorsed_by":"andrea_wakashu",
        "deed":9168092,
        "date":null
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"marilu_1987",
        "deed":"2",
        "date":"2018-06-21T16:15:59.676Z"
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"marilu_1987",
        "deed":2133025,
        "date":null
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"marilu_1987",
        "deed":1130338,
        "date":null
    },
    {"username":"andrea_wakashu",
        "endorsed_by":"marilu_1987",
        "deed":9176264,
        "date":null
    },
    {"username":"charlybrown1974",
        "endorsed_by":"carlottaMestre",
        "deed":"5",
        "date":"2018-06-21T16:18:54.588Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":10165934,
        "date":null
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":11128763,
        "date":null
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":13113678,
        "date":null
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":12164530,
        "date":null
    },
    {"username":"charlybrown1974",
        "endorsed_by":"carlottaMestre",
        "deed":8144468,
        "date":null
    },
    {"username":"charlybrown1974",
        "endorsed_by":"carlottaMestre",
        "deed":11180418,
        "date":null
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":"8",
        "date":"2018-06-21T16:20:12.712Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":"7",
        "date":"2018-06-21T16:20:12.712Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":"6",
        "date":"2018-06-21T16:20:12.712Z"
    },
    {"username":"carlottaMestre",
        "endorsed_by":"charlybrown1974",
        "deed":"5",
        "date":"2018-06-21T16:20:12.712Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":2131670,
        "date":null
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":7123251,
        "date":null
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":6111724,
        "date":null
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":9114594,
        "date":null
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":10179487,
        "date":null
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":11105725,
        "date":null
    },
    {"username":"albert1978",
        "endorsed_by":"angeles4you",
        "deed":"10",
        "date":"2018-06-21T16:22:12.529Z"
    },
    {"username":"albert1978",
        "endorsed_by":"angeles4you",
        "deed":"10",
        "date":"2018-06-21T16:22:12.529Z"
    },
    {"username":"albert1978",
        "endorsed_by":"angeles4you",
        "deed":"3",
        "date":"2018-06-21T16:22:20.268Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":2110641,
        "date":null
    },
    {"username":"albert1978",
        "endorsed_by":"angeles4you",
        "deed":2168329,
        "date":null
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":"2",
        "date":"2018-06-21T16:23:03.552Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":"1",
        "date":"2018-06-21T16:23:03.552Z"
    },
    {"username":"angeles4you",
        "endorsed_by":"albert1978",
        "deed":"6",
        "date":"2018-06-21T16:23:03.552Z"}
];

/*LOAD CURRENT SECTION DATA FROM SESSION STORAGE*/

if (sessionStorage.getItem("SESSION_HISTORY_TABLE") == null){
    sessionStorage.setItem("SESSION_HISTORY_TABLE",JSON.stringify(HISTORY_TABLE));
    /*alert("History databases loaded from script!")
} else {
    alert("History database will be loaded from session storage!")*/
}

if (sessionStorage.getItem("SESSION_RELATIONSHIPS_TABLE") == null){
    sessionStorage.setItem("SESSION_RELATIONSHIPS_TABLE",JSON.stringify(RELATIONSHIPS_TABLE));
    /*alert("Relationship databases loaded from script!")
} else {
    alert("Relationship database will be loaded from session storage!")*/
}

if (sessionStorage.getItem("SESSION_USER_TABLE") == null){
    sessionStorage.setItem("SESSION_USER_TABLE",JSON.stringify(USER_TABLE));
    /*alert("Users databases loaded from script!")
} else {
    alert("Users database will be loaded from session storage!")*/
}

if (sessionStorage.getItem("SESSION_INFORMATION_TABLE") == null){
    sessionStorage.setItem("SESSION_INFORMATION_TABLE",JSON.stringify(INFORMATION_TABLE));
    /*alert("Information databases loaded from script!")
} else {
    alert("Information database will be loaded from session storage!")*/
}

var SESSION_HISTORY_TABLE = JSON.parse(sessionStorage.getItem("SESSION_HISTORY_TABLE"));
var SESSION_RELATIONSHIPS_TABLE = JSON.parse(sessionStorage.getItem("SESSION_RELATIONSHIPS_TABLE"));
var SESSION_USER_TABLE = JSON.parse(sessionStorage.getItem("SESSION_USER_TABLE"));
var SESSION_INFORMATION_TABLE = JSON.parse(sessionStorage.getItem("SESSION_INFORMATION_TABLE"));

/*FINISH LOADING DATA FROM SESSION STORAGE*/