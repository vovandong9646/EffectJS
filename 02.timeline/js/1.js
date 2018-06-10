// Timeline: cơ chế hoạt đông:
	// tưởng tượng:
		// B1: tạo ra 1 trục ox
		// B2: add thêm điểm lên trục ox

	// Thực tế:

// B1: tạo ra trục ox (khai báo timeline)
var trucOx = anime.timeline();

// B2: add thêm điểm lên trục ox (Add phần tử vào timeline)
trucOx.add({
	// trong này khai báo giống keyframes
	targets:".nut1",
	translateY:[
		{value: 200, duration: 1000, easing: "easeOutElastic"}
	],
	translateX: [
		{value : 500, duration: 1000, delay:1000}
	]
})

trucOx.add({
	targets: ".nut2",
	translateX: 500,
	translateY: [
		{value: 200, duration:1000, delay: 1000}
	]
})

trucOx.add({
	targets: ".nut3",
	translateX: 500,
	translateY:200
})

trucOx.add({
	targets: ".nut4",
	translateX:[
		{value: 1000, duration:500, delay:200},
		{value: 500, duration:500,delay:200}
	],
	translateY:[
		{value: 200, duration:400, delay:300}
	]
})
