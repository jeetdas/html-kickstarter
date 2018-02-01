// loader.js
/*
   ***Instructions on how to create templates and add them into your html files***

   1. Create your html file inside the `templates` folder. This is a template so you do not need DOCTYPE, <html>,
      <head>, or <body> tags. Simply create a <script type="text/x-handlebars-template"> tag and give it an id. You
      will need this id in order to load the template.
   2. Add to the provided data.json file, or create a new one if desired. Follow standard JSON formatting.
   3. In your main html file, e.g. `index.html`, include a <script src="js/loader.js"> tag. You will need two more
      attributes to complete this tag.
      - data-json: This attribute is the path to your json file you will use for your handlebars template.
      - data-templates: this will be a comma-separated list of the template files you want to use file. Do not include
        .html file extension. (You can leave this blank and everything from the templates folder will be loaded).
   4. Additionally, to guarantee your templates are loaded in the order you want, add a <div data-placeholder="">
      tag where the value is equal to the name of the tmeplate.

   ***For more questions about this process, contact me at mattcd96@gmail.com***
*/
var templatesDirectory = "~/templates/";
var jsonPath = "";
var templates = [];
try {
    jsonPath = document.currentScript.getAttribute('data-json');
    templates = document.currentScript.getAttribute('data-templates').split(',');
} catch (e) {
    console.warn("Something went wrong when trying to load one or more templates.");
    throw new Error(e);
}

$(document).ready(function() {
    console.info("Fetching data from server...");
    var startTime = new Date().getTime();
    $.ajax({
        type: 'GET',
        url: jsonPath,
        dataType: 'json',
        success: function(data) {
            console.info("...complete (" + (new Date().getTime() - startTime) + "ms).");
            console.log(templates);
        },
        failure: function(data) {
            throw new Error("Failed to load data from server.");
        }
    });
});

function loadTemplates(templates, data) {
    var source, template;
    if (templates.length > 0) {
        for (var i = 0; i < template.length; i++) {
            $.get(templatesDirectory + templates[i] + ".html", function(html) {
                console.log(html);
            });
        }
    }
}
