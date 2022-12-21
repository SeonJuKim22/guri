$(document).ready(function(){
    jaAllReset();
    fullHeight(); // 전체화면 높이값
	//리사이징 체크를 위한 가로사이즈 
	var loadWidth = window.innerWidth;
	/* 레이어 팝업 */
	//$(".layer_popup").hide();
	$(".btn_layer").click(function(){
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		var el = $(this);
		$(".layer_overlay").show();
		var pop_name = $(this).data('pop_name')
		$("."+ pop_name +"").show();
		$(".layer_wrap").attr("tabindex", "0").focus().css('outline','0');
		el.attr('data-focus','on');
		var pop_height = $("."+ pop_name +" .layer_wrap").outerHeight();
		var pop_width = $("."+ pop_name +" .layer_wrap").outerWidth();
		return false;
	});
	
	$(".layer_popup .btn_pop_close").click(function(){
		$('html, body').css({'overflow': 'auto', 'height': 'auto'});
		$(".layer_popup").removeClass("mini_popup");
		$(".layer_overlay").hide();
		$(".layer_popup").hide();
		$("a[data-focus~=on]").focus();
		$("button[data-focus~=on]").focus();
		window.setTimeout(function(){
			$("a[data-focus~=on]").removeAttr("data-focus");
			$("button[data-focus~=on]").removeAttr("data-focus");
		},500);
		return false;
	});
	
	/* 메세지 닫기 버튼 */
	$(".layer_opp_manager2 .btn_cancel").click(function(){
        $(".layer_opp_manager2").hide();
    });

    /* 운행거리 버튼 */
	$(".layer_opp_manager3 .btn_cancel").click(function(){
        $(".layer_opp_manager3").hide();
    });

    /* 금일누계 버튼 */
	$(".layer_opp_manager4 .btn_cancel").click(function(){
        $(".layer_opp_manager4").hide();
    });
    
});
	





/* 전체 함수 호출 */
function jaAllReset(){
	fullHeight(); // 전체화면 높이값
}


/* 전체화면 높이값 */
function fullHeight() {
	var $winH = $(window).innerHeight();

	$('body').css({ 'height' : $winH });
}


