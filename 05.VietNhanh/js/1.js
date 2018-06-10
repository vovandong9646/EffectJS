// cho chuyển động tất cả các button cùng 1 lúc

var cd = anime({
	targets : ".btn",
	translateY : "300px",
	delay:function(ele, i) { return i * 100; },
	// duration:function(ele, i) { return i * 100; }
})

// thuộc tính delay: 
	// nếu sử dụng delay: 100 => thì tất cả các button sẽ delay 500
	// muốn từng button delay 100 => ta sẽ sử dụng function giống ở trên


// thuộc tính duration:
	// ta cũng có thể làm duration giống delay
	// bằng cách thay delay thành duration