// FUNCTIONS

/**
 * @func crazy_banner_request_banner
 * @desc This function requests a static banner ad from the CrazyGames SDK.
 *
 * @param {real} banner_id Unique ID for the banner (0-9).
 * @param {real} width Banner width in pixels.
 * @param {real} height Banner height in pixels.
 * @param {constant.CRAZY_BANNER_POSITION} position Banner position.
 * @param {function} callback_success Called when the banner loads successfully.
 * @param {function} callback_failed Called if the banner fails to load, with error info.
 *
 * @example
 * ```gml
 * crazy_banner_request_banner(
 *     0,
 *     300, 250,
 *     CRAZY_BANNER_POSITION.CENTER_MIDDLE,
 *     function() { show_debug_message("Static banner loaded!"); },
 *     function(err) { show_debug_message("Banner failed: " + json_stringify(err)); }
 * );
 * ```
 * @func_end
 */

/**
 * @func crazy_banner_request_responsive_banner
 * @desc This function requests a responsive banner ad from the CrazyGames SDK.
 *
 * @param {real} banner_id Unique ID for the banner (0-9).
 * @param {real} width Reserved width for banner positioning.
 * @param {real} height Reserved height for banner positioning.
 * @param {constant.CRAZY_BANNER_POSITION} position Banner position.
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
 * @desc This function clears a static banner ad from the screen and from the CrazyGames SDK.
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
 * @desc This function clears a responsive banner from the screen and from the CrazyGames SDK.
 *
 * @param {real} banner_id Unique ID of the banner to clear (0-9).
 *
 * @example
 * ```gml
 * crazy_banner_clear_responsive_banner(0);
 * ```
 * @func_end
 */

/**
 * @func crazy_banner_clear_all_banners
 * @desc This function clears all banners (static and responsive) from the screen and from the CrazyGames SDK.
 *
 * @example
 * ```gml
 * crazy_banner_clear_all_banners();
 * ```
 * @func_end
 */

/**
 * @const CRAZY_BANNER_POSITION
 * @desc This enumeration holds the different banner positioning constants for CrazyGames banners.
 * @member LEFT_TOP Top-left corner of the game area.
 * @member CENTER_TOP Top-center of the game area.
 * @member RIGHT_TOP Top-right corner of the game area.
 * @member LEFT_MIDDLE Center-left side of the game area.
 * @member CENTER_MIDDLE Exact center of the game area.
 * @member RIGHT_MIDDLE Center-right side of the game area.
 * @member LEFT_BOTTOM Bottom-left corner of the game area.
 * @member CENTER_BOTTOM Bottom-center of the game area.
 * @member RIGHT_BOTTOM Bottom-right corner of the game area.
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
 * @desc The following constants are available:
 * @ref CRAZY_BANNER_POSITION
 * @section_end
 * 
 * @module_end
 */
