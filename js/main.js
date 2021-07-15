// $getJson('lang/lang.json', function() {
// });

'use strict';


function showText(lang) {
    fetch('lang/lang.json').then(
        response => {return response.json()}
    ).then(
        jotason => {
            insertText(jotason.lang);
        }
    );
}

function insertText(jotason) {
    Object.keys(jotason).forEach(keyValue => {
        let fields = document.querySelectorAll('.lang');
        fields.forEach(field => {
                console.log(field.getAttribute('key'));
                if(field.getAttribute('key') == keyValue) {
                    field.innerHTML = jotason[keyValue];
                }
            }
        );
        // console.log(jotason[keyValue]);
        // console.log(keyValue);
        // console.log(jotason.keyValue);
    })
} 