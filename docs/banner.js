// FUNCTIONS

/**
 * @func crazy_banner_request_banner
 * @desc Requests a static banner ad from the CrazyGames SDK.
 *
 * @param {real} banner_id Unique ID for the banner (0-9).
 * @param {number} w Banner width in pixels.
 * @param {number} h Banner height in pixels.
 * @param {constant.CRAZYGAMES_BANNER_POSITION} position Banner position.
 * @param {function} callback_success Called when the banner loads successfully.
 * @param {function} callback_failed Called if the banner fails to load, with error info.
 *
 * @example
 * ```gml
 * crazy_banner_request_banner(
 *     0,
 *     300, 250,
 *     CRAZYGAMES_BANNER_POSITION.CENTER_MIDDLE,
 *     function() { show_debug_message("Static banner loaded!"); },
 *     function(err) { show_debug_message("Banner failed: " + json_stringify(err)); }
 * );
 * ```
 * @func_end
 */

/**
 * @func crazy_banner_request_responsive_banner
 * @desc Requests a responsive banner ad from the CrazyGames SDK.
 *
 * @param {real} banner_id Unique ID for the banner (0-9).
 * @param {number} w Reserved width for banner positioning.
 * @param {number} h Reserved height for banner positioning.
 * @param {constant.CRAZYGAMES_BANNER_POSITION} position Banner position.
 * @param {function} callback_success Called when the banner loads successfully.
 * @param {function} callback_failed Called if the banner fails to load, with error info.
 *
 * @example
 * ```gml
 * crazy_banner_request_responsive_banner(
 *     0,
 *     160, 600,
 *     CRAZYGAMES_BANNER_POSITION.CENTER_MIDDLE,
 *     function() { show_debug_message("Responsive banner loaded!"); },
 *     function(err) { show_debug_message("Responsive banner failed: " + json_stringify(err)); }
 * );
 * ```
 * @func_end
 */

/**
 * @func crazy_banner_clear_banner
 * @desc Clears a static banner from the screen and from the CrazyGames SDK.
 *
 * @param {real} banner_id Unique ID of the banner to clear (0-9).
 *
 * @example
 * ```gml
 * crazy_banner_clear_banner(0);
 * ```
 * @func_end
 */

/**
 * @func crazy_banner_clear_responsive_banner
 * @desc Clears a responsive banner from the screen and from the CrazyGames SDK.
 *
 * @param {real} banner_id Unique ID of the banner to clear (0-9.
 *
 * @example
 * ```gml
 * crazy_banner_clear_responsive_banner(0);
 * ```
 * @func_end
 */

/**
 * @func crazy_banner_clear_all_banners
 * @desc Clears all banners (static and responsive) from the screen and from the CrazyGames SDK.
 *
 * @example
 * ```gml
 * crazy_banner_clear_all_banners();
 * ```
 * @func_end
 */

/**
 * @const CRAZYGAMES_BANNER_POSITION
 * @desc Banner positioning constants for CrazyGames banners.
 * @member CRAZYGAMES_BANNER_POSITION.LEFT_TOP Top-left corner of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.CENTER_TOP Top-center of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.RIGHT_TOP Top-right corner of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.LEFT_MIDDLE Center-left side of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.CENTER_MIDDLE Exact center of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.RIGHT_MIDDLE Center-right side of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.LEFT_BOTTOM Bottom-left corner of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.CENTER_BOTTOM Bottom-center of the game area.
 * @member CRAZYGAMES_BANNER_POSITION.RIGHT_BOTTOM Bottom-right corner of the game area.
 * @const_end
 */

/**
 * @module banner
 * @title Banner
 * @desc The banner module contains functionality for displaying banners within your game.
 * 
 * [[NOTE: Make sure to call ${func.crazy_init} before stating to use the extension.]]
 * 
 * @section_func Functions
 * @desc The following module functions are available: 
 * @ref crazy_banner_*
 * @section_end
 * 
 * @section_const
 * @ref CRAZYGAMES_BANNER_POSITION
 * @section_end
 * 
 * @module_end
 */
