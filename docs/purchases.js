// FUNCTIONS

/**
 * @func crazy_analytics_track_order
 * @desc This function tracks an in-game purchase order with CrazyGames analytics, using Xsolla as the payment provider.
 * 
 * When using Xsolla, you will mostly deal with 3 order statuses:
 *  
 * - new
 * - done
 * - canceled
 * 
 * Every time an order has been successfully completed (done), call our analytics module.
 *
 * @param {struct} order GML structure containing the order details (e.g., product ID, price, currency).
 *
 * @example
 * ```gml
 * // comes from the xsolla purchase
 * var orderData = {};
 * crazy_analytics_track_order(orderData);
 * show_debug_message("Purchase order tracked in CrazyGames analytics.");
 * ```
 * @func_end
 */

/**
 * @function crazy_xsolla_open_paystation
 * @desc This function opens Xsolla Pay Station (embedded) and forwards ALL widget events to a single GML callback
 * as a `{ type, payload }` object. Call this function from a direct user gesture (e.g., a button click).
 * 
 * [[Note: You need to code all interaction with Xsolla yourself using calls to ${function.http_request} 
 * that communicate with their [REST API](https://developers.xsolla.com/api/getting-started).]]
 *
 * @param {string} token Xsolla purchase token (payment token for a specific SKU/order).
 * @param {function} callback Single GML callback function receiving `{type, payload}`.
 * @param {struct} options A struct containing options to pass to the Xsolla widget ({ sandbox: false, queryParams: {...} })
 * 
 * @example
 * ```gml
 * // 1) Get user token (e.g., crazy_user_get_xsolla_user_token) then:
 * // 2) Use http_request() calls to:
 * //   * List owned items: GET https://store.xsolla.com/api/v2/project/{project_id}/user/inventory/items
 * //       - Requires Bearer user token (in the header DS map set _header[? "Authentication"] = "Bearer <token>").
 * //       - Shows items the current user owns.
 * //       - Supports filtering (by SKU, group, type) and pagination (see Xsolla docs).
 * //   * List available items: GET https://store.xsolla.com/api/v2/project/{project_id}/items/virtual_items
 * //       - Returns a paged list of all virtual items in your store.
 * //       - Pass Bearer user token if you want personalized results (promotions, restricted items).
 * //       - Supports optional query params (see Xsolla docs).
 * //   * Request a payment token: POST https://store.xsolla.com/api/v2/project/{project_id}/payment/item/{item_sku}
 * //       - Requires Bearer user token.
 * //       - Use body to pass extra params: { "quantity": 5, "sandbox": true }.
 * //       - The HTTP Async Event will return the payment token.
 * // 3) After you have a payment token open the paystation using the helper method:
 * var cb = function(evt) {
 *     switch (evt.type) {
 *         case CRAZY_XSOLLA_EVENT_INIT:   show_debug_message("IAP init"); break;
 *         case CRAZY_XSOLLA_EVENT_OPEN:   show_debug_message("IAP open"); break;
 *         case CRAZY_XSOLLA_EVENT_LOAD:   show_debug_message("IAP load"); break;
 *         case CRAZY_XSOLLA_EVENT_STATUS: show_debug_message("IAP status: " + json_stringify(evt.payload)); break;
 *         case CRAZY_XSOLLA_EVENT_STATUS_INVOICE: show_debug_message("IAP invoice: " + json_stringify(evt.payload)); break;
 *         case CRAZY_XSOLLA_EVENT_STATUS_DELIVERING: show_debug_message("IAP delivering: " + json_stringify(evt.payload)); break;
 *         case CRAZY_XSOLLA_EVENT_STATUS_DONE:
 *             show_debug_message("IAP done: " + json_stringify(evt.payload));
 *             // Optionally track the order with CrazyGames analytics:
 *             // crazy_analytics_track_order({ order_id: evt.payload?.order_id, status: "done" });
 *             break;
 *         case CRAZY_XSOLLA_EVENT_CLOSE:  show_debug_message("IAP close"); break;
 *         case CRAZY_XSOLLA_EVENT_ERROR:  show_debug_message("IAP error: " + json_stringify(evt.payload)); break;
 *     }
 * };
 *
 * crazy_xsolla_open_paystation(global.xsolla_token, cb, { sandbox: true });
 * ```
 * @function_end
 */

/**
 * @function crazy_xsolla_close_paystation
 * @desc This is a helper function to programmatically close the Pay Station lightbox.
 * @example
 * ```gml
 * crazy_xsolla_close_paystation();
 * ```
 * @function_end
 */

/**
 * @constant CRAZY_XSOLLA_EVENT
 * @desc This set of macros represents the possible IAP event types.
 * @member CRAZY_XSOLLA_EVENT_INIT Event on widget initialization
 * @member CRAZY_XSOLLA_EVENT_OPEN Event on opening of the widget
 * @member CRAZY_XSOLLA_EVENT_LOAD Event after payment interface (Pay Station) was loaded
 * @member CRAZY_XSOLLA_EVENT_CLOSE Event after payment interface (Pay Station) was closed
 * @member CRAZY_XSOLLA_EVENT_STATUS Event when the user was moved on the status page
 * @member CRAZY_XSOLLA_EVENT_STATUS_INVOICE Event when the user was moved on the status page, but the payment is not yet completed
 * @member CRAZY_XSOLLA_EVENT_STATUS_DELIVERING Event when the user was moved on the status page, payment was completed, and Xsolla is sending payment notification
 * @member CRAZY_XSOLLA_EVENT_STATUS_DONE Event when the user was moved on the status page, and the payment was completed successfully
 * @member CRAZY_XSOLLA_EVENT_STATUS_TROUBLED Event when the user was moved on the status page, but the payment failed
 * @member CRAZY_XSOLLA_EVENT_USER_COUNTRY Event when Pay Station has determined the user's country
 * @member CRAZY_XSOLLA_EVENT_FCP Event when fcp occurs in Pay Station
 * @member CRAZY_XSOLLA_EVENT_ERROR Event when a payment flow error occurs
 * @constant_end
 */

/**
 * @module purchases
 * @title In-game Purchases
 * @desc Crazy Games have partnered with Xsolla to offer you the possibility to integrate in-game purchases more conveniently.
 * 
 * [[NOTE: Make sure to call ${func.crazy_init} before stating to use the extension.]]
 * 
 * @section_func Functions
 * @desc The following functions can be used to control IAPs inside your game: 
 * @ref crazy_user_get_xsolla_user_token
 * @ref crazy_analytics_track_order
 * @ref crazy_xsolla_*
 * @section_end
 * 
 * @section_const Constants
 * @desc The following constants are available when using IAPs inside your game:
 * @ref CRAZY_XSOLLA_EVENT
 * @section_end
 * 
 * @module_end
 */

