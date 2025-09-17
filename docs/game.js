// FUNCTIONS


/**
 * @func crazy_game_settings
 * @desc This function retrieves the game settings object from CrazyGames SDK.
 * 
 * @returns {struct}
 * 
 * @example
 * ```gml
 * var settings = crazy_game_settings();
 * show_debug_message("Game settings: " + json_stringify(settings));
 * ```
 * @func_end
 */

/**
 * @func crazy_game_gameplay_start
 * @desc This function signals the CrazyGames SDK that gameplay has started.
 * 
 * @example
 * ```gml
 * crazy_game_gameplay_start();
 * ```
 * @func_end
 */

/**
 * @func crazy_game_gameplay_stop
 * @desc This function signals the CrazyGames SDK that gameplay has stopped.
 * 
 * @example
 * ```gml
 * crazy_game_gameplay_stop();
 * ```
 * @func_end
 */

/**
 * @func crazy_game_loading_start
 * @desc This function signals the CrazyGames SDK that game loading has started.
 * 
 * @example
 * ```gml
 * crazy_game_loading_start();
 * ```
 * @func_end
 */

/**
 * @func crazy_game_loading_stop
 * @desc This function signals the CrazyGames SDK that game loading has finished.
 * 
 * @example
 * ```gml
 * crazy_game_loading_stop();
 * ```
 * @func_end
 */

/**
 * @func crazy_game_happytime
 * @desc This function triggers CrazyGames' "happy time" event, indicating a positive gameplay moment. Can be called on various player achievements (beating a boss, reaching a highscore, etc.). It makes the website celebrate (for example by launching some confetti). There is no need to call this when a level is completed, or an item is obtained.
 * 
 * @example
 * ```gml
 * crazy_game_happytime();
 * ```
 * @func_end
 */

/**
 * @func crazy_game_is_instant_multiplayer
 * @desc This function checks if the game is running in Instant Multiplayer mode.
 * 
 * @returns {bool}
 * 
 * @example
 * ```gml
 * if (crazy_game_is_instant_multiplayer()) {
 *     show_debug_message("Instant Multiplayer mode is active!");
 * }
 * ```
 * @func_end
 */

/**
 * @func crazy_game_invite_link
 * @desc This function creates a multiplayer invite link based on the provided parameters.
 * 
 * @param {string} _params A JSON-formatted string containing invite link parameters.
 * @returns {string|undefined} The generated invite link, or `undefined` if not initialised.
 * 
 * @example
 * ```gml
 * var inviteParams = { roomId: 12345 };
 * var link = crazy_game_invite_link(json_stringify(inviteParams));
 * show_debug_message("Invite link: " + link);
 * ```
 * @func_end
 */

/**
 * @func crazy_game_get_invite_param
 * @desc This function retrieves a specific invite parameter from the CrazyGames SDK.
 * 
 * @param {string} key The parameter key to retrieve.
 * @returns {string|undefined} The parameter value, or `undefined` if not initialised.
 * 
 * @example
 * ```gml
 * var roomCode = crazy_game_get_invite_param("roomId");
 * if (roomCode != undefined) {
 *     show_debug_message("Joined room: " + string(roomCode));
 * }
 * ```
 * @func_end
 */

/**
 * @func crazy_game_show_invite_button
 * @desc This feature allows you to display a button in the game footer, that opens a popup containing the invite link.
 * 
 * [[WARNING: The invite button should only be used to invite players to a multiplayer gaming session. Please avoid using it for other use cases, such as a Share button for example, as this may lead to a delayed submission check or even game rejection.]]
 * 
 * @param {string} params A JSON-formatted string defining link parameters.
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * // the returned link looks the same as the link
 * // returned by the crazy_game_invite_link method
 * var link_params = {
 *     roomId: 12345,
 *     param2: "value",
 *     param3: "value",
 * };
 * var link = crazy_game_show_invite_button(json_stringify(link_params));
 * ```
 * @func_end
 */

/**
 * @func crazy_game_hide_invite_button
 * @desc This function hides the CrazyGames multiplayer invite button.
 * 
 * @example
 * ```gml
 * crazy_game_hide_invite_button();
 * ```
 * @func_end
 */

/**
 * @module game
 * @title Game
 * @desc The game module contains various functionality related to the game.
 * 
 * [[NOTE: Make sure to call ${func.crazy_init} before stating to use the extension.]]
 * 
 * @section_func Functions
 * @desc The following module functions are available: 
 * @ref crazy_game_*
 * @section_end
 * 
 * @module_end
 */
