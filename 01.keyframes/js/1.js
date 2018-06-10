var chuyendong = anime({
	targets: ".cd",
	translateX:[
		{ value : 500, duration: 700, delay: 300 }, // keyframes1
		{ value : 300, duration: 700, delay: 300 }, // keyframes2
		{ value : 100, duration: 700, delay: 300 }, // keyframes3
		{ value : 0, duration: 700, delay: 300 } 	// keyframes4
	],
	translateY:[
		{ value : 200, duration: 700, delay: 300 }, // keyframes1
		{ value : 300, duration: 700, delay: 300 }, // keyframes2
		{ value : 100, duration: 700, delay: 300 }, // keyframes3
		{ value : 0, duration: 700, delay: 300 }	// keyframes4
	],
	scale: [
		{ value : 3, duration: 700, delay: 300 },	// keyframes1
		{ value : 2, duration: 700, delay: 300 },	// keyframes2
		{ value : 1.5, duration: 700, delay: 300 },	// keyframes3
		{ value : 1, duration: 700, delay: 300 }	// keyframes4
	]
});

// giải thích:
	// target: để chỉ class hay id mình muốn sử dụng
	// translateX, translateY, scale :  là các thuộc tính chuyển động
	// cơ chế:
		// sẽ chuyển động theo keyframes 
		// chuyển động đồng thời cả 3 cái tương ứng với keyframes1
		// nó sẽ thực hiện translateX của keyframe1 => translateY của keyframe1 => scale của keyframe1
		// xong sẽ thực hiện tiếp keyframe2
		// xong sẽ thực hiện tiếp keyframe3, 4
		// ta có thể để giá trị của keyframe2 giống keyframe1 nếu như không muốn cho nó chuyển động theo kiểu mới
		