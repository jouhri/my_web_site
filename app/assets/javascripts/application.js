// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require chart

//Get the context of the canvas element we want to select

$(function()
{

	//Get context with jQuery - using jQuery's .get() method.


	$("#myChart").css("color;white");

	// var ctx = $("#myChart").get(0).getContext("2d");

	var opt = {
	//Boolean - Whether we should show a stroke on each segment
	segmentShowStroke : false,
	
	//String - The colour of each segment stroke
	segmentStrokeColor : "#fff",
	
	//Number - The width of each segment stroke
	segmentStrokeWidth : 0,
	
	//The percentage of the chart that we cut out of the middle.
	percentageInnerCutout : 95,
	
	//Boolean - Whether we should animate the chart	
	animation : true,
	
	//Number - Amount of animation steps
	animationSteps : 100,
	
	//String - Animation easing effect
	animationEasing : "easeOutBounce",
	
	//Boolean - Whether we animate the rotation of the Doughnut
	animateRotate : true,

	//Boolean - Whether we animate scaling the Doughnut from the centre
	animateScale : false,
	
	//Function - Will fire on animation completion.
	onAnimationComplete : null
	}

	var data = [
		{
			value: 20,
			color:"#c0392b"
		},
		{
			value : 80,
			color : "#27ae60"
		}			
	];


	var canvas = document.getElementById("myChart_c");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);


	var data = [
		{
			value: 30,
			color:"#c0392b"
		},
		{
			value : 70,
			color : "#2ecc71"
		}			
	];
	
	var canvas = document.getElementById("myChart_cpp");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);



	var data = [
		{
			value: 30,
			color:"#c0392b"
		},
		{
			value : 70,
			color : "#2ecc71"
		}			
	];

	var canvas = document.getElementById("myChart_html5");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);



		var data = [
		{
			value: 50,
			color:"#c0392b"
		},
		{
			value : 50,
			color : "#2ecc71"
		}			
	];


	var canvas = document.getElementById("myChart_css3");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);



		var data = [
		{
			value: 80,
			color:"#c0392b"
		},
		{
			value : 20,
			color : "#2ecc71"
		}			
	];

	var canvas = document.getElementById("myChart_javascript");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);


		var data = [
		{
			value: 50,
			color:"#c0392b"
		},
		{
			value : 50,
			color : "#2ecc71"
		}			
	];


	var canvas = document.getElementById("myChart_ruby");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);


		var data = [
		{
			value: 20,
			color:"#c0392b"
		},
		{
			value : 80,
			color : "#2ecc71"
		}			
	];


	var canvas = document.getElementById("myChart_scrum");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);

		var data = [
		{
			value: 50,
			color:"#c0392b"
		},
		{
			value : 50,
			color : "#2ecc71"
		}			
	];


	var canvas = document.getElementById("myChart_ror");
	var ctx = canvas.getContext('2d');
	new Chart(ctx).Doughnut(data, opt);


});