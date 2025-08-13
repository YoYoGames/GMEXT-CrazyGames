
crazy_user_get_user_token(
		function(token)
		{
			show_message_async_ext(token)
		},
		function(e)
		{
			show_debug_message($"Failed: {e}")
		}
	)
