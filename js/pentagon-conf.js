//雷达图
var svgPentagon = $('#J-svg-pentagon');
var points = {
	base : ["6", "1", "10.7552826", "4.45491503", "8.93892626", "10.045085", "3.06107374", "10.045085", "1.24471742", "4.45491503"],
	pointsAbility : []
};
var setPentagon = function(num) {
	for (i=1;i<=num;i++) {
		var pointsChildren = 'points' + i;
		points[pointsChildren] = [];
		for (var j=0;j<points.base.length;j++) {
			points[pointsChildren].push((parseFloat(points.base[j]) * (6 + i * 4)).toFixed(2));
			points[pointsChildren][j] = parseFloat(points[pointsChildren][j]) - (i * 24);
		}
		svgPentagon.find('.pentagon-' + i).attr('points', points[pointsChildren].join(' '));
	}
};
setPentagon(5);
//5参数
var setPentagonAbility = function(p1, p2, p3, p4, p5) {
	var pentagonAbility = svgPentagon.find('.pentagonAbility');
	var pentagonAbilityPoints = points['points' + p1][0] + ' ' + points['points' + p1][1] + ' ' +
		points['points' + p2][2] + ' ' + points['points' + p2][3] + ' ' +
		points['points' + p3][4] + ' ' + points['points' + p3][5] + ' ' +
		points['points' + p4][6] + ' ' + points['points' + p4][7] + ' ' +
		points['points' + p5][8] + ' ' + points['points' + p5][9];
	svgPentagon.find('.pentagonAbility').attr('points', pentagonAbilityPoints);
};
setPentagonAbility(1, 3, 2 ,3, 4);