'use strict';
function Cs142TemplateProcessor(template){
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary){

    dictionary = this.template.replace(
        /\{\{(.+?)\}\}/g,
        (match, tag) => dictionary[tag.trim()],
    );
    return dictionary;

};
