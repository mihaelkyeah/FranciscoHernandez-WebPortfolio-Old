'use strict';
document.addEventListener("DOMContentLoaded", function(){ showText("es") });

document.getElementById("lang_button_es").addEventListener("click", ()=>
    { showText("es") }
);
document.getElementById("lang_button_en").addEventListener("click", ()=>
    { showText("en") }
);

function showText(locale_str) {
    fetch('lang/lang.json').then(
        response => {return response.json()}
    ).then(
        jsonFile => {insertText(jsonFile[locale_str])}
    );
}

function insertText(jsonLang) {
    Object.keys(jsonLang).forEach(keyValue => {
        let fields = document.querySelectorAll('.lang');
        fields.forEach(field => {
                if(field.getAttribute('key') == keyValue) {
                    field.innerHTML = jsonLang[keyValue];
                }
            }
        );
    })
}