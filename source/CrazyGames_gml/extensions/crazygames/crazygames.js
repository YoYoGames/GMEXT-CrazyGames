
var bCrazyStarted = false;

function INTERNAL_crazy_execute_callback(_callback) {
	const _args = Array.prototype.slice.call(arguments, 1);

	// If this is a function call it normally
	if (typeof _callback === "function") {
		return _callback(null, null, ..._args);
	}

	// If this is not a function, it might be a script (try to get it from runner)
	if (GMS_API.get_function) {
		const _cb = GMS_API.get_function(_callback);
		if (_cb) {
			// Call the function with null self or other
			return _cb(null, null, ..._args);
		}
	}

	// Print some helpful message to the console
	console.log("Callback argument is not a method (scripts are not supported on this GM version)");
}

function INTERNAL_crazy_gml_value_to_js_value(_value) {
	const value_type = Object.prototype.toString.call(_value);
	if (value_type === '[object Object]') {
		var obj = {};
		for (const [key, value] of Object.entries(_value)) {
			obj[key.replace("gml", "")] = INTERNAL_crazy_gml_value_to_js_value(value);
		}
		return JSON.parse(JSON.stringify(obj));
	}
	else if (value_type === '[object Array]') {
		var array = [];
		_value.forEach(function (item, index) {
			array[index] = INTERNAL_crazy_gml_value_to_js_value(item);
		});
		return array;
	}
	return _value
}

function INTERNAL_crazy_games_js_value_to_gml_value(_value) {
	try{
		const value_type = _value.constructor.name;
		if (value_type == "Object") {
			var struct = {};
			for (const [key, value] of Object.entries(_value)) {
				struct["gml" + key] = INTERNAL_crazy_games_js_value_to_gml_value(value);
			}
			return JSON.parse(JSON.stringify(struct));
		}
		else if (value_type == "Array") {
			var array = [];
			_value.forEach(function (item, index) {
				array[index] = INTERNAL_crazy_games_js_value_to_gml_value(item);
			});
			return array;
		}
		return _value
	}catch(e)
	{
		return {}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////

// Introduction
function crazy_init(callback_success,callback_failed) {
    window.CrazyGames.SDK.init({
        wrapper: {
          engine: 'gamemaker',
          sdkVersion: window.__gamemaker_runtimeVersion
        }
      }).then(() => {bCrazyStarted = true; INTERNAL_crazy_execute_callback(callback_success)}).catch((e) => callback_failed(INTERNAL_crazy_games_js_value_to_gml_value(e)));
}

function crazy_get_environment() {
	if(!bCrazyStarted) return;
    return window.CrazyGames.SDK.environment;
}

function crazy_started()
{
	return bCrazyStarted;
}

//Game


function crazy_game_settings() {
	if(!bCrazyStarted) return INTERNAL_crazy_games_js_value_to_gml_value({});
	
    return INTERNAL_crazy_games_js_value_to_gml_value(window.CrazyGames.SDK.game.settings);
}

function crazy_gameplay_start() {
	if(!bCrazyStarted) return;
    window.CrazyGames.SDK.game.gameplayStart();
}

function crazy_gameplay_stop() {
	if(!bCrazyStarted) return;
    window.CrazyGames.SDK.game.gameplayStop();
}

function crazy_game_loading_start() {
	if(!bCrazyStarted) return;
    window.CrazyGames.SDK.game.loadingStart();
}

function crazy_game_loading_stop() {
	if(!bCrazyStarted) return;
    window.CrazyGames.SDK.game.loadingStop();
}

function crazy_happytime() {
	if(!bCrazyStarted) return;
    window.CrazyGames.SDK.game.happytime();
}

function crazy_is_instant_multiplayer() {
	if(!bCrazyStarted) return;
	return window.CrazyGames.SDK.game.isInstantMultiplayer;
}

function crazy_invite_link(_struct) {
	if(!bCrazyStarted) return;
	return window.CrazyGames.SDK.game.inviteLink(INTERNAL_crazy_gml_value_to_js_value(_struct));
}

function crazy_get_invite_param(key) {
	if(!bCrazyStarted) return;
	return window.CrazyGames.SDK.game.getInviteParam(key);
}

function crazy_show_invite_button(_struct) {
	if(!bCrazyStarted) return;
	const link = window.CrazyGames.SDK.game.showInviteButton(INTERNAL_crazy_gml_value_to_js_value(_struct));
	
	return link;
}


function crazy_hide_invite_button() {
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.game.hideInviteButton();
}


//Video ads
function crazy_request_ad(type,callback_started,callback_error,callback_finished){
	if(!bCrazyStarted) return;
	const callbacks = {
		adStarted: callback_started,
		adError: callback_error,
		adFinished: callback_finished
	};

    window.CrazyGames.SDK.ad.requestAd(type,callbacks);
}

function crazy_has_ad_block(callback_success,callback_failed){
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.ad.hasAdblock().then((result) => INTERNAL_crazy_execute_callback(callback_success,result)).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}


//Banners
function banner_pos(banner_id,w,h,position)
{
	const banner = document.getElementById(banner_id);

	banner.style.position = "absolute";
	banner.style.zIndex = "1000";

	banner.style.width = w+"px";
	banner.style.height = h+"px";

	// Reset all positioning and transform
	banner.style.top = "";
	banner.style.bottom = "";
	banner.style.left = "";
	banner.style.right = "";
	banner.style.transform = "";

	switch (position) {
		case 0: banner.style.top = "0"; banner.style.left = "0";break;
		case 1: banner.style.top = "0"; banner.style.left = "50%"; banner.style.transform = "translateX(-50%)"; break;
		case 2: banner.style.top = "0"; banner.style.right = "0";break;
		case 10: banner.style.top = "50%"; banner.style.left = "0"; banner.style.transform = "translateY(-50%)"; break;
		case 11: banner.style.top = "50%"; banner.style.left = "50%"; banner.style.transform = "translate(-50%, -50%)";break;
		case 12: banner.style.top = "50%"; banner.style.right = "0"; banner.style.transform = "translateY(-50%)"; break;
		case 20: banner.style.bottom = "0"; banner.style.left = "0"; break;
		case 21: banner.style.bottom = "0"; banner.style.left = "50%"; banner.style.transform = "translateX(-50%)"; break;
		case 22: banner.style.bottom = "0"; banner.style.right = "0"; break;
		default: console.warn("Unknown banner position:", position);
	}	
}

function banner_clear(banner_id)
{
	const banner = document.getElementById(banner_id);
	if(banner_id != null)
	{
		banner.style.position = "absolute";
		banner.style.zIndex = "1000";

		banner.style.width = "0px";
		banner.style.height = "0px";

		// Reset all positioning and transform
		banner.style.top = "";
		banner.style.bottom = "";
		banner.style.left = "";
		banner.style.right = "";
		banner.style.transform = "";	
	}
}

function crazy_request_static_banner(banner_id,w,h,position,callback_success,callback_failed) {
	if(!bCrazyStarted) return;
	
	banner_pos("crazy_banner_static_" + banner_id,w,h,position);
	window.CrazyGames.SDK.banner.requestBanner({id: "crazy_banner_static_" + banner_id,width: w,height: h,}).then(() => INTERNAL_crazy_execute_callback(callback_success)).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}

function crazy_request_responsive_banner(banner_id,w,h,position,callback_success,callback_failed) {
	if(!bCrazyStarted) return;
	
	banner_pos("crazy_banner_responsive_" + banner_id,w,h,position);
    window.CrazyGames.SDK.banner.requestResponsiveBanner("crazy_banner_responsive_" + banner_id).then(() => INTERNAL_crazy_execute_callback(callback_success)).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}

function crazy_clear_static_banner(banner_id) {
  banner_clear("crazy_banner_static_" + banner_id);
  
	if(!bCrazyStarted) return;
		window.CrazyGames.SDK.banner.clearBanner("crazy_banner_static_" + banner_id);
}

function crazy_clear_responsive_banner(banner_id) {
	banner_clear("crazy_banner_responsive_" + banner_id);
	
	if(!bCrazyStarted) return;
		window.CrazyGames.SDK.banner.clearBanner("crazy_banner_responsive_" + banner_id);
}

function crazy_clear_all_banners()
{
	for(var i = 0 ; i < 10 ; i++)
	{
		crazy_clear_static_banner(i);
		crazy_clear_responsive_banner(i);
	}
}

//User

function crazy_is_user_account_available() {
	if(!bCrazyStarted) return;
	return window.CrazyGames.SDK.user.isUserAccountAvailable;
}

function crazy_get_user(callback_success,callback_failed) {
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.user.getUser().then((user) => INTERNAL_crazy_execute_callback(callback_success,INTERNAL_crazy_games_js_value_to_gml_value(user))).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}


function crazy_get_user_system_info() {
	if(!bCrazyStarted) return;
	return INTERNAL_crazy_games_js_value_to_gml_value(window.CrazyGames.SDK.user.systemInfo);
}


function crazy_get_user_token(callback_success,callback_failed) {
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.user.getUserToken().then((token) => INTERNAL_crazy_execute_callback(callback_success,token)).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}


function crazy_user_show_auth_prompt(callback_success,callback_failed) {
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.user.showAuthPrompt().then((user) => INTERNAL_crazy_execute_callback(callback_success,INTERNAL_crazy_games_js_value_to_gml_value(user))).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}




var mAuthListener = null; // const mAuthListener = (user) => console.log("User changed", user);
function crazy_user_add_auth_listener(callback) {
	if(!bCrazyStarted) return;
	
	if(mAuthListener == null)
	{
		mAuthListener = callback;
		window.CrazyGames.SDK.user.addAuthListener(mAuthListener);
	}
}

function crazy_user_remove_auth_listener() {
	if(!bCrazyStarted) return;
	if(mAuthListener != null)
	window.CrazyGames.SDK.user.removeAuthListener(mAuthListener);
	mAuthListener = null;
}


function crazy_user_show_account_link_prompt(callback_success,callback_failed) {
	if(!bCrazyStarted) return;
		window.CrazyGames.SDK.user.showAccountLinkPrompt().then((response) => INTERNAL_crazy_execute_callback(callback_success,INTERNAL_crazy_games_js_value_to_gml_value(response))).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}




///Data
function crazy_data_clear() {
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.data.clear();
}

function crazy_data_get_item(key) {
	if(!bCrazyStarted) return;
	return window.CrazyGames.SDK.data.getItem(key);
}

function crazy_data_set_item(key,value) {
	if(!bCrazyStarted) return;
	let ret = window.CrazyGames.SDK.data.setItem(key,value);
	if(ret == null)
		return "";
	else
		return ret;
}

function crazy_data_remove_item(key) {
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.data.removeItem(key);
}



//in-game purchses
function crazy_get_xsolla_user_token(callback_success,callback_failed) {
	if(!bCrazyStarted) return;
	window.CrazyGames.SDK.user.getXsollaUserToken().then((token) => INTERNAL_crazy_execute_callback(callback_success,token)).catch((e) => INTERNAL_crazy_execute_callback(callback_failed,INTERNAL_crazy_games_js_value_to_gml_value({message:e.message,code:e.code})));
}

function crazy_analytics_track_order(order) {
	return window.CrazyGames.SDK.analytics.trackOrder("xsolla", INTERNAL_crazy_gml_value_to_js_value(order));
}

