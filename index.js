// Path: index.js

exports.exportHtmlAdditionalTagsWithData = function(hook, pad, cb){
    var padId = pad.id;

    // Export <signature-field> tags with data 
    cb([`<signature-field data-pad-id="${padId}"></signature-field>`]);
};

