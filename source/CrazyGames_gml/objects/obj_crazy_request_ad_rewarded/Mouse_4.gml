
crazy_ad_request_ad("rewarded",

		function(){
			show_debug_message("AD Started")
		},
		function(e){
			show_debug_message("AD Error")
		},
		function(){
			show_debug_message("AD Finished")
		}
	)
