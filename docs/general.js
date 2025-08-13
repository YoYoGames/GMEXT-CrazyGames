// FUNCTIONS

/**
 * @func crazy_init
 * @desc Initializes the CrazyGames SDK for use within a GameMaker HTML5 export.
 * Must be called before using any other CrazyGames functions.
 *
 * @param {function} callback_success Function to execute if initialization succeeds.
 * @param {function} callback_failed Function to execute if initialization fails, receiving the error as a parameter.
 *
 * @example
 * ```gml
 * crazy_init(
 *     function() { show_debug_message("CrazyGames SDK initialized successfully!"); },
 *     function(error) { show_debug_message("Failed to initialize CrazyGames SDK: " + string(error)); }
 * );
 * ```
 * @func_end
 */

/**
 * @func crazy_get_environment
 * @desc Retrieves the current environment information from the CrazyGames SDK.
 * This may include values such as "local" or "crazygames".
 * 
 * @returns {string}
 * 
 * @example
 * ```gml
 * if (env != undefined) {
 *     show_debug_message("Running in CrazyGames environment: " + env);
 * } else {
 *     show_debug_message("CrazyGames SDK not initialized.");
 * }
 * ```
 * @func_end
 */

/**
 * @func crazy_started
 * @desc Checks whether the CrazyGames SDK has been successfully initialized.
 * 
 * @returns {boolean}
 * 
 * @example
 * ```gml
 * if (crazy_started()) {
 *     show_debug_message("CrazyGames SDK is ready!");
 * } else {
 *     show_debug_message("CrazyGames SDK is not initialized yet.");
 * }
 * ```
 * @func_end
 */


/**
 * @module general
 * @title General
 * @desc These module provides general purpose CrazyGames SDK functions.
 * 
 * [[NOTE: Make sure to call ${func.crazy_init} before stating to use the extension.]]
 * 
 * @section_func Functions
 * @desc The following module functions are available: 
 * @ref crazy_init
 * @ref crazy_get_environment
 * @ref crazy_started
 * @section_end
 * 
 * @module_end
 */
