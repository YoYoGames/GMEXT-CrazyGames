
if(!loaded)
{
	crazy_request_static_banner(0,300,250,CRAZYGAMES_BANNER_POSITION.CENTER_MIDDLE,
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
	crazy_clear_static_banner(0)
	loaded = false
}
