
draw_set_valign(fa_top)
draw_set_halign(fa_left)
draw_set_font(fnt_gm_15)
draw_text(10,100,$"Started: {crazy_started()}")
draw_text(10,120,$"Enviroment: {crazy_get_environment()}")
draw_text(10,140,$"IsInstantMultiplayer: {crazy_game_is_instant_multiplayer()}")
draw_text(10,160,$"IsUserAccountAvailable: {crazy_user_is_user_account_available()}")
draw_text(10,180,$"UserSystemInfo: {crazy_user_get_user_system_info()}")
draw_text(10,200,$"Settings: {crazy_game_settings()}")

