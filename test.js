var svg = d3.select("svg").attr("width",960).style("height",600);
    var mycircle = svg.append("circle")
        .attr("cx",100)
        .attr("cy",100)
        .style("fill","blue")
        .attr("r",20)

    mycircle  // wait 2 seconds, then slowly change the circle's properties
        .transition()
        .duration(3000)
        .delay(2000)
        .attr("cx",600)
        .attr("cy",150)
        .style("fill","orange")
        .attr("r",50);

    mycircle  // click the circle to set it properties at random
        .on("click",function(){
            d3.select(this)
                .transition()
                .duration(3000)
                .attr("cx",Math.random()*700)
                .attr("cy",Math.random()*300)
                .style("fill",d3.rgb( Math.random()*255,Math.random()*255,Math.random()*255 ))
                .attr("r",Math.random()*100);
        });