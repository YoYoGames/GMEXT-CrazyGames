
show_debug_message("Domain: " + url_get_domain())

//Useful code for production enviroment
//if (
//	!debug_mode &&
//	string_pos( ".crazygames.", url_get_domain() ) == 0 &&
//	string_pos( ".1001juegos.com", url_get_domain() ) == 0
//){
//	game_end();
//}

started = false;
enviroment = undefined;
isInstantMultiplayer = false;
isUserAccountAvailable = false;
userSystemInfo = undefined;
settings = undefined;

crazy_init(
	function(){
		room_goto(rm_crazy_menu);
		show_debug_message("crazy_init() SUCCESS")
		
		started = crazy_started()
		enviroment = crazy_get_environment()
		isInstantMultiplayer = crazy_game_is_instant_multiplayer()
		isUserAccountAvailable = crazy_user_is_user_account_available()
		userSystemInfo = crazy_user_get_user_system_info()
		settings = crazy_game_settings();
		
		crazy_user_add_auth_listener(function(){
			
			show_message_async_ext("User Changed....")
			//call again crazy_user_get_user() (if you want :) )
			
		})
		
		crazy_user_get_user(
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
