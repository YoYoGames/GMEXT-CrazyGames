
crazy_user_show_auth_prompt(
		function(token)
		{
			show_message_async_ext(token)
		},
		function(e)
		{
			show_debug_message($"Failed: {e}")
		}
	)
