var noidung = document.getElementsByClassName("noidung")[0];

document.querySelector(".start").addEventListener("click", function() {

	var chuyendong = anime({
		targets : ".cd",
		translateX : 530,
		translateY : 150,
		scale:4,
		//duration: 3000,
		update : function(chuyendong) {
			console.log(chuyendong);
			noidung.innerHTML = "Thời gian đã chạy: "+ Math.round(chuyendong.currentTime) +"ms"+ "<br> Phần trăm tiến trình: "+Math.round(chuyendong.progress) +"%";
		}
	})
});

// giải thích:
	// hàm update => là 1 callback
	// dùng để ghi lại thời gian đã chạy
	// dùng để ghi lại tiến trình % đã chạy được
	// ,... => log cái argument của hàm update để xem các thuộc tính của nó

