/* set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margi

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/4_ThreeNum.csv", function(data){
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 45000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(3));

  // Add X axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height+50 )
      .text("Gdp per Capita");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([35, 90])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add Y axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -20 )
      .text("Life expectancy")
      .attr("text-anchor", "start")
}
*/
var clusters  = prompt("Enter amount of clusters you want");
console.log(clusters);

for (i=0; i < clusters; i++) {

    //Make an SVG Container
    var svgContainer = d3.select("body").append("svg")
                                        .attr("width", 200)
                                        .attr("height", 200);
    //Draw the Circle
    var circle = svgContainer.append("circle")
                                .transition()
                                .duration(5000)
                                .attr("cx",Math.random()*100)
                                .attr("cy",Math.random()*100)
                                //.attr("cx", 30)           // position the x-centre
                                //.attr("cy", 30)           // position the y-centre
                                .attr("r", 20)             // set the radius
                                .style("fill",d3.rgb( Math.random()*255,Math.random()*255,Math.random()*255 ));   // set the fill colour
                            
}