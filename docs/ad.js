// FUNCTIONS

/**
 * @func crazy_ad_request_ad
 * @desc Requests an advertisement from the CrazyGames SDK.
 * The ad type can be "midgame" or "rewarded". You can provide callbacks
 * to handle when the ad starts, fails, or finishes.
 *
 * @param {string} type The type of ad to request ("midgame" or "rewarded").
 * @param {function} callback_started Called when the ad starts.
 * @param {function} callback_error Called when there is an error showing the ad.
 * @param {function} callback_finished Called when the ad finishes.
 *
 * @example
 * ```gml
 * crazy_ad_request_ad(
 *     "rewarded",
 *     function() { show_debug_message("Ad started!"); },
 *     function(err) { show_debug_message("Ad error: " + string(err)); },
 *     function() { show_debug_message("Ad finished!"); }
 * );
 * ```
 * @func_end
 */

/**
 * @func crazy_ad_has_ad_block
 * @desc Checks if the user is using an ad blocker.
 * @param {function} callback_success Called when the results are ready.
 * @param {function} callback_failed Called if failed to check for ad blocker.
 * 
 * @example
 * ```gml
 * crazy_ad_has_ad_block(
 *     function(result) {
 *         if (result) {
 *             show_debug_message("Ad blocker detected!");
 *         } else {
 *             show_debug_message("No ad blocker detected.");
 *         }
 *     },
 *     function(error) {
 *         show_debug_message("Error checking ad blocker: " + json_stringify(error));
 *     }
 * );
 * ```
 * @func_end
 */

/**
 * @module ad
 * @title Ad
 * @desc The ad module contains functionality for displaying video ads and for detecting adblockers.
 * 
 * [[NOTE: Make sure to call ${func.crazy_init} before stating to use the extension.]]
 * 
 * @section_func Functions
 * @desc The following module functions are available: 
 * @ref crazy_ad_*
 * @section_end
 * 
 * @module_end
 */
