// demo chuyển động truyền tham số delay, duration, loop thông qua html

// B1: lấy giá trị truyền qua bằng html

var button = document.querySelectorAll(".btn");
for(let i=0;i<button.length;i++){
	button[i].addEventListener("click", function() {
		
		// Note: nếu dùng var i=0;i<button.length => thì ta sẽ thay button[i] thành this
		var thoigian = button[i].getAttribute("data-thoigian");
		var delay = button[i].getAttribute("data-delay");
		var lap = button[i].getAttribute("data-lap");
		var dataCd = button[i].getAttribute("data-cd");
		
		// B2: ta sẽ gọi anime truyền vào tham số
		var cd = anime({
			targets : button[i],
			translateY : dataCd,
			direction: "alternate",
			duration: thoigian,
			delay: delay,
			loop: lap
		})

	});
}