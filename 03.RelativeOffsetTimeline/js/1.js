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
	],
	offset: "-=2000ms"
})

// giải thích thuộc tính offset:
	// khi nut1 chuyển động 1s
	// nút 2 delay 1s mới chuyển động
	// ta muốn cho nút 2 chuyển động đông thời với nút 1: thì ta sẽ trừ đi 2s
	// trừ 2s: 1s delay và 1s chuyển động

