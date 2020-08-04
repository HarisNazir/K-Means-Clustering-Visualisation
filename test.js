(function () {
    var data = ["#039BE5", "#00897B"];

    d3.select("#exit")
        .select(".apply")
        .on("click", function () {
            var div = d3.select("#exit")
                .select(".selection")
                .selectAll(".item")
                .data(data);

            div.exit()
                .remove();

            div
                .transition()
                .duration(500)
                .style("background-color", function (d) {
                    return d;
                });
        });
})();