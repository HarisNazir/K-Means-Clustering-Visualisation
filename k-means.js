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
              "translate(" + margin.left + "," + margin.top + ")")

//Read the data
d3.csv("data/Mall_Customers.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 0])
    .range([ 0, width ]);
  svg.append("g")
    .attr("class", "myXaxis")   // Note that here we give a class to the X axis, to be able to call it later and modify it
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .attr("opacity", "0")

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Age); } )
      .attr("cy", function (d) { return y(d.Spending_Score); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

  // new X axis
  x.domain([0, 100])
  svg.select(".myXaxis")
    .transition()
    .duration(2000)
    .attr("opacity", "1")
    .call(d3.axisBottom(x));

  svg.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*3)})
    .duration(2000)
    .attr("cx", function (d) { return x(d.Age); } )
    .attr("cy", function (d) { return y(d.Spending_Score); } )
})