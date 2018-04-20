//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
var data;

 var Paises = [
    {name:'Venezuela',Migrants:18},
    {name:'Colombia',Migrants:17},
    {name:'Perú',Migrants:15},
    {name:'Argentina',Migrants:12}
  ];

var w = 450;
var h = 450;
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#E6EAEE");

 d3.selectAll('circle')
    .data(Paises)
    .attr('fill','#28539B')
    .attr('r', function(d) {
      return d.Migrants * 1,5
    })

 d3.selectAll('text')
    .data(Paises)
    .attr('fill','#28539B')                      
    .text(function(d) {
      return ". " + d.name;
    });