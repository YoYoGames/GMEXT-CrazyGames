
crazy_get_user(
		function(user)
		{
			show_message_async_ext(user)
		},
		function(e)
		{
			show_debug_message($"Failed: {e}")
		}
	)
