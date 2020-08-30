// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 50},
    width = 520 - margin.left - margin.right,
    height = 520 - margin.top - margin.bottom;

// append the svg object to the body of the page
var Svg = d3.select("#my_dataviz2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")



//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([4*0.95, 8*1.001])
    .range([ 0, width ])
  Svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(-height*1.3).ticks(10))
    .select(".domain").remove()

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([-0.001, 9*1.01])
    .range([ height, 0])
    .nice()
  Svg.append("g")
    .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
    .select(".domain").remove()

  // Customization
  Svg.selectAll(".tick line").attr("stroke", "#EBEBEB")

  // Add X axis label:
  Svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height + margin.top + 20)
      .text("Sepal Length");

  // Y axis label:
  Svg.append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left+20)
      .attr("x", -margin.top)
      .text("Petal Length")

  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["setosa", "versicolor", "virginica" ])
    .range([ "#402D54", "#D18975", "#8FD175"])

  // Add dots
  Svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Sepal_Length); } )
      .attr("cy", function (d) { return y(d.Petal_Length); } )
      .attr("r", 5)
      .style("fill", function (d) { return color(d.Species) } )

})
