// $getJson('lang/lang.json', function() {
// });

'use strict';

// var json_data = require('lang/lang.json');

// console.log(json_data);

fetch('lang/lang.json').then(
    response => {return response.json()}
).then(
    jotason => {
        console.log(jotason);
    }
);