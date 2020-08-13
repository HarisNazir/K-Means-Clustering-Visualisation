// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
var url = "https://gist.githubusercontent.com/d3byex/520e6dcb30e673c149cc/raw/432623f00f6740021bdc13141612ac0b6196b022/corr_aapl_msft.csv";
    d3.csv(url, function(data) {
//d3.csv("https://github.com/holtzy/D3-graph-gallery/blob/master/DATA/data_IC.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 4000])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})
/*
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
                            
}*/