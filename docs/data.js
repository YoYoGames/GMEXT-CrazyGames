// FUNCTIONS

/**
 * @func crazy_data_clear
 * @desc Clears all stored data for the current user on CrazyGames.
 *
 * @example
 * ```gml
 * crazy_data_clear();
 * show_debug_message("All stored CrazyGames data has been cleared.");
 * ```
 * @func_end
 */

/**
 * @func crazy_data_get_item
 * @desc Retrieves a stored data item from CrazyGames.
 *
 * @param {string} key The key of the data item to retrieve.
 * @returns {any|undefined} The stored value, or `undefined` if not found or not initialized.
 *
 * @example
 * ```gml
 * var playerScore = crazy_data_get_item("highscore");
 * if (playerScore != undefined) {
 *     show_debug_message("High score: " + string(playerScore));
 * } else {
 *     show_debug_message("No high score found.");
 * }
 * ```
 * @func_end
 */

/**
 * @func crazy_data_set_item
 * @desc Stores a data item on CrazyGames.
 *
 * @param {string} key The key under which to store the value.
 * @param {any} value The value to store.
 * @returns {string} The stored value as a string, or an empty string if null.
 *
 * @example
 * ```gml
 * crazy_data_set_item("highscore", 2500);
 * show_debug_message("High score saved!");
 * ```
 * @func_end
 */

/**
 * @func crazy_data_remove_item
 * @desc Removes a specific data item from CrazyGames storage.
 *
 * @param {string} key The key of the data item to remove.
 *
 * @example
 * ```gml
 * crazy_data_remove_item("highscore");
 * show_debug_message("High score removed from CrazyGames storage.");
 * ```
 * @func_end
 */

/**
 * @module data
 * @title Data
 * @desc The data module allows to save and retrieve user data for logged in CrazyGames users. The data will also be synced on all the devices where the user plays the game.
 *
 * If the user is not logged in, the data module will store the game data in LocalStorage. If the user logs in later, the LocalStorage game data will be synced and backed up on the user's account.
 * 
 * [[NOTE: Make sure to call ${func.crazy_init} before stating to use the extension.]]
 * 
 * [[WARNING: If you intend to use the data module, don't forget to select the appropriate toggle in the "Does your game save progress?" form when submitting the game. The data module will be disabled otherwise.]]
 * 
 * @section_func Functions
 * @desc The following module functions are available: 
 * @ref crazy_data_*
 * @section_end
 * 
 * @module_end
 */
