//Function to check if the div is visible on the screen
$(function () {
    var loaded = false;
    var oTop = $('#rightSkills').offset().top - window.innerHeight;

    checkPosition();

    $(window).scroll(function () {
        checkPosition();
    });

    function checkPosition() {
        var pTop = $('body').scrollTop();
        if (pTop > oTop) {
            if (!loaded) {
                loaded = true;
                loadChart();
            }
        }
    }
});

//Data for left div
var dataLeft =
    [
         { "title": "Eagle", "progress": 30 }, 
         { "title": "Birdie", "progress": 21 }, 
         { "title": "Par", "progress": 39 }, 
         { "title": "Bogey", "progress": 11 }, 
    ];
       



anchorLeft = d3.select("#leftSkills");

//Bind data for left bars
var divLeft = anchorLeft.selectAll("#leftSkills div")
    .data(dataLeft);

//Add shadow for the left bars
divLeft.enter().append("div")
    .attr("class", "shadow");

//Create the bars
d3.select("body").selectAll(".shadow")
    .append("div")
    .attr("class", "bar");

//Create the path
d3.select("body").selectAll(".bar")
    .append("div")
    .attr("class", "path");

//Add the pattern for the bars
d3.select("body").selectAll(".path")
    .append("div")
    .attr("class", "pattern");

d3.select("body").selectAll(".path")
    .append("div")
    .attr("class", "title-container");
    
d3.select("body").selectAll(".title-container")
    .append("span")
    .attr("class", "left");

d3.select("body").selectAll(".title-container")
    .append("span")
    .attr("class", "right");

//Animate the bars when they are both visible on screen
function loadChart() {

    var start_val = 0;

    //add the percentage to the progress bar and transition the number
    d3.select("body").selectAll(".pattern")
        .append("div")
        // .text(start_val)
        .attr("class", "percentage")
        .transition()
        .delay(function (d, i) {
            return i * 200;
        })
        .duration(1000)
        .style("min-width", function (d, i) {
            return (d.progress * 3) / 2 + "px";           
        });
       

        d3.select("body").selectAll(".left")
        .html(function (d) {
           return d.title;
        });

        d3.select("body").selectAll(".right")
        .html(function (d) {
           return d.progress;
        });
              
                
              

    //transition the width of the path
    d3.select("body").selectAll(".path")
        .transition()
        .delay(function (d, i) {
            return i * 200;
        })
        .duration(1000)
        .style("width", function (d, i) {
            return d.progress * 3 + "px";
        });

    //transition between the different colors depending on the value
    d3.select("body").selectAll(".pattern")
        //transition to first color
        .transition()
        .delay(function (d, i) {
            return i * 200;
        })
        .duration(250)
        .style("background-color", function (d) {
            if (d.progress < 40) {
                return "#033EAA";
            }
            else {
                return "#033EAA";
            }
        })
        

    //transition the sadow under the progress bar
    d3.select("body").selectAll(".shadow")
        .transition()
        .delay(function (d, i) {
            return i * 200;
        })
        .duration(1000)
        .style("width", function (d, i) {
            return d.progress * 3 - 6 + "px";
        });
}