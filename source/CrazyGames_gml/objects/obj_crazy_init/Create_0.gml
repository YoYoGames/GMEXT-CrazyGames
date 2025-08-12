
show_debug_message("Domain: " + url_get_domain())

//Useful code for production enviroment
//if (
//	!debug_mode &&
//	string_pos( ".crazygames.", url_get_domain() ) == 0 &&
//	string_pos( ".1001juegos.com", url_get_domain() ) == 0
//){
//	game_end();
//}

crazy_init(
	function(){
		
		show_debug_message("crazy_init() SUCCESS")
		
		started = crazy_started()
		enviroment = crazy_get_environment()
		isInstantMultiplayer = crazy_is_instant_multiplayer()
		isUserAccountAvailable = crazy_is_user_account_available()
		userSystemInfo = crazy_get_user_system_info()
		
		crazy_user_add_auth_listener(function(){
			
			show_message_async_ext("User Changed....")
			//call again crazy_get_user() (if you want :) )
			
		})
		
		crazy_get_user(
			function(user)
			{
				instance_create_depth(100,300,0,obj_crazy_user,user)
			},
			function(e)
			{
				show_debug_message($"Failed: {e}")
			})
		
	},function(){
		show_debug_message("crazy_init() FAILED")
	});


crazy_init(
	function(){
		//show_message_async_ext("crazy_init() SUCCESS")
		room_goto(rm_crazy_menu)
	},
	function(e)
	{
		show_message_async_ext($"crazy_init() Failed {e}")
	})
