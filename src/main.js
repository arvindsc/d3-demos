

//Once the document is ready we set javascript and page settings
$(document).ready(function () {

    //Keeps margins for examples not in iFrames.
    if (self == top) {
        d3.select("body").style("margin", "20px");
    }
    //Some house keeping for the display of test container for smaller screens
    else {
        d3.selectAll("li.logo").style("display","none");
        d3.selectAll("div.container").style("margin-top","-30px");
        d3.selectAll("i.mdi-navigation-menu").style("margin-top","-10px")
    }

    //Set display size based on window size.
    var rect = document.body.getBoundingClientRect();
    screenWidth = (rect.width < 960) ? Math.round(rect.width*.95) : Math.round((rect.width - 210) *.95)

    d3.select("#currentDisplay").attr("value", screenWidth + ",600").attr("selected", true).text(screenWidth + "px - 600px");
    $('select').material_select(); //Materialize.css setup
    $(".button-collapse").sideNav({menuWidth:210}); //
    viz_container = d3.selectAll("#et_container")
        .style("width",screenWidth + "px")
        .style("height","600px");


});











