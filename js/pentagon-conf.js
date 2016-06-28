$(document).ready(function () {
	var w = 350,
		h = 300;

	var data	 = [
		[
			{axis: "Versatility", value: 0.25},
			{axis: "Curiosity", value: 0.4},
			{axis: "Consistancy", value: 0.25},
			{axis: "Productivity", value: 0.25},
			{axis: "Responsiveness", value: 0.3}
		], [
			{axis: "Versatility", value: 0.66},
			{axis: "Curiosity", value: 0.66},
			{axis: "Consistancy", value: 0.66},
			{axis: "Productivity", value: 0.60},
			{axis: "Responsiveness", value: 0.2}
		]
	];

//Options for the Radar chart, other than default
	var cfg = {
		radius: 3,
		w: 400,
		h: 400,
		factor: 1,
		factorLegend: 0.9,
		levels: 3,
		maxValue: 1.5,
		radians: 2 * Math.PI,
		opacityArea: 0.5,
		ToRight: 5,
		TranslateX: 89,
		TranslateY: 30,
		ExtraWidthX: 176,
		ExtraWidthY: 21,
		color: d3.scale.category20()
	};

//Call function to draw the Radar chart
//Will expect that data is in %'s
	RadarChart.draw("#chart", data, cfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

	d3.select('#chart')
		.selectAll('text')
		.data(data)
		.enter()
		.append("text")
		.attr("x", w)
		.attr("y", h)
		.attr("font-size", "16px")
		.attr("fill", "#737373")
		.text(function (data) {
			return data;
		})
	;
});