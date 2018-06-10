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
	offset: 0
})

// giải thích thuộc tính offset:
	// khác với relative ở chỗ là:
		// relative : -=
		// absolute : cố định time
	// offset: 0 : bắt đầu bằng 0ms => thằng nut2 sẽ chuyển động=> cùng lúc với nut1
	// còn nếu sử dụng relative : thì ta phải tính toán để trừ thời gian chạy và thời gian delay 

