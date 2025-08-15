
if(!loaded)
{
	crazy_banner_request_responsive_banner(0,300,250,CRAZY_BANNER_POSITION.CENTER_MIDDLE,
			function()
			{
				show_debug_message("BANNER SUCCESS")
				
				loaded = true
				show = true
			},
			function(e)
			{
				show_debug_message($"Failed: {e}")
			})
}
else
{
	crazy_banner_clear_responsive_banner(0)
	loaded = false
}
