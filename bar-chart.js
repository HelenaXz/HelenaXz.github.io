var dataset = [ 80, 120, 140, 30, 50, 190, 70, 12, 170 ];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;
var barWidth = (svgWidth / dataset.length)

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);


var myColor = d3.scaleLinear().domain([1,15])
    .range(["white", "blue"]);

var barchart = svg.selectAll('rect')
    .data(dataset) // provide the data in waiting state
    .enter() // enter method takes the dataset and complete futher operations
    .append('rect') //bars are rectangles
    .attr('y', function(d) { // 
        return svgHeight - d
    })
    .attr('height', function(d) {
        return d
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d, i) {
        var translate = [barWidth * i, 0]; // barwidht * i būs nobīde uz labo pusi uz x ass
        return "translate(" + translate + ")"; //takes two argument x and y for the location of the object
    })
    .attr("fill", function(d){return myColor(d) });