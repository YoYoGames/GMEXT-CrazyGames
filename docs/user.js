// FUNCTIONS

/**
 * @func crazy_user_is_user_account_available
 * @desc Checks if a user account is available on CrazyGames.
 *
 * @returns {bool|undefined} `true` if available, `false` if not, or `undefined` if not initialized.
 *
 * @example
 * ```gml
 * if (crazy_user_is_user_account_available()) {
 *     show_debug_message("User account features are available.");
 * } else {
 *     show_debug_message("User account features are not available.");
 * }
 * ```
 * @func_end
 */

/**
 * @func crazy_user_get_user
 * @desc Retrieves the currently logged-in user from CrazyGames.
 *
 * @param {function} callback_success Called with the user data on success.
 * @param {function} callback_failed Called with an error object on failure.
 *
 * @example
 * ```gml
 * crazy_user_get_user(
 *     function(user) { show_debug_message("User: " + json_stringify(user)); },
 *     function(err) { show_debug_message("Error: " + json_stringify(err)); }
 * );
 * ```
 * @func_end
 */

/**
 * @func crazy_user_get_user_system_info
 * @desc Retrieves system information about the current user.
 *
 * @returns {struct} GML structure containing user system information, or `undefined` if not initialized.
 *
 * @example
 * ```gml
 * var sysInfo = crazy_user_get_user_system_info();
 * show_debug_message("System info: " + json_stringify(sysInfo));
 * ```
 * @func_end
 */

/**
 * @func crazy_user_get_user_token
 * @desc Retrieves the CrazyGames user token for authentication.
 *
 * @param {function} callback_success Called with the token string on success.
 * @param {function} callback_failed Called with an error object on failure.
 *
 * @example
 * ```gml
 * crazy_user_get_user_token(
 *     function(token) { show_debug_message("Token: " + token); },
 *     function(err) { show_debug_message("Error getting token: " + json_stringify(err)); }
 * );
 * ```
 * @func_end
 */


/**
 * @func crazy_user_show_auth_prompt
 * @desc Shows the CrazyGames authentication prompt for the user to log in or sign up.
 *
 * @param {function} callback_success Called with the user data if login is successful.
 * @param {function} callback_failed Called with an error object on failure.
 *
 * @example
 * ```gml
 * crazy_user_show_auth_prompt(
 *     function(user) { show_debug_message("Logged in as: " + json_stringify(user)); },
 *     function(err) { show_debug_message("Auth failed: " + json_stringify(err)); }
 * );
 * ```
 * @func_end
 */


/**
 * @func crazy_user_add_auth_listener
 * @desc Adds a listener to detect user authentication changes.
 *
 * @param {function} callback Called whenever the user's authentication status changes.
 *
 * @example
 * ```gml
 * crazy_user_add_auth_listener(function(user) {
 *     show_debug_message("Auth status changed: " + json_stringify(user));
 * });
 * ```
 * @func_end
 */


/**
 * @func crazy_user_remove_auth_listener
 * @desc Removes the current authentication listener, if one exists.
 *
 * @example
 * ```gml
 * crazy_user_remove_auth_listener();
 * ```
 * @func_end
 */


/**
 * @func crazy_user_show_account_link_prompt
 * @desc Shows the CrazyGames account link prompt to connect accounts.
 *
 * @param {function} callback_success - Called with the link response on success.
 * @param {function} callback_failed - Called with an error object on failure.
 *
 * @example
 * ```gml
 * crazy_user_show_account_link_prompt(
 *     function(resp) { show_debug_message("Account linked: " + json_stringify(resp)); },
 *     function(err) { show_debug_message("Link failed: " + json_stringify(err)); }
 * );
 * ```
 * @func_end
 */

/**
 * @func crazy_user_get_xsolla_user_token
 * @desc Retrieves the Xsolla user token from CrazyGames for in-game purchases.
 * This token is used to authenticate the user with Xsolla's payment services.
 *
 * @param {function} callback_success Called with the token string on success.
 * @param {function} callback_failed Called with an error object on failure.
 *
 * @example
 * ```gml
 * crazy_user_get_xsolla_user_token(
 *     function(token) {
 *         show_debug_message("Xsolla Token: " + token);
 *     },
 *     function(err) {
 *         show_debug_message("Failed to get Xsolla token: " + json_stringify(err));
 *     }
 * );
 * ```
 * @func_end
 */


/**
 * @module user
 * @title User
 * @desc The user module provides various account functionality that you can use to authenticate a user in your game. This means that the CrazyGames players who are logged in on the platform will be able to play games that require a user account without having to register in the game. They will also be logged in automatically in the game on other devices where they use the same CrazyGames account.
 * 
 * [[NOTE: Make sure to call ${func.crazy_init} before stating to use the extension.]]
 * 
 * @section_func Functions
 * @desc The following module functions are available: 
 * @ref crazy_user_*
 * @section_end
 * 
 * @module_end
 */
