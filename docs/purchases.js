// FUNCTIONS

/**
 * @func crazy_analytics_track_order
 * @desc Tracks an in-game purchase order with CrazyGames analytics, using Xsolla as the payment provider.
 * 
 * When using Xsolla, you will mostly deal with 3 order statuses:
 *  
 * - new
 * - done
 * - canceled
 * 
 * Every time an order has been successfully completed (done), call our analytics module.
 *
 * @param {Struct} order GML structure containing the order details (e.g., product ID, price, currency).
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
 * @desc Opens Xsolla Pay Station (embedded) and forwards ALL widget events to a single GML callback
 * as a `{ type, payload }` object. Call from a direct user gesture (e.g., button click).
 *
 * @param {string} token Xsolla access token (payment token for a specific SKU/order).
 * @param {function} callback Single GML callback receiving `{type, payload}`.
 * @param {struct} options Options to pass to the Xsolla widget ({ sandbox: false, queryParams: {...} })
 * 
 * @example
 * ```gml
 * // 1) Get user token (e.g., crazy_user_get_xsolla_user_token) then:
 * // 2) use http_request() calls to:
 * //   * List owned items: GET https://store.xsolla.com/api/v2/project/${project_id}/user/inventory/items
 * //       - Requires Bearer user token.
 * //       - Shows items the current user owns.
 * //       - Supports filtering (by SKU, group, type) and pagination (see XSolla docs).
 * //   * List available items: GET https://store.xsolla.com/api/v2/project/{project_id}/items/virtual_items
 * //       - Returns a paged list of all virtual items in your store.
 * //       - Pass Bearer user token if you want personalized results (promotions, restricted items).
 * //       - Supports optional query params (see XSolla docs).
 * //   * Request a payement token: POST https://store.xsolla.com/api/v2/project/{project_id}/payment/item/{item_sku}
 * //       - Requires Bearer user token.
 * //       - Use body to pass extra params: { "quantity": 5, "sandbox": true }.
 * //       - The HTTP Async Event will return the payment token.
 * // 3) After you have a payment token open the paystation using the helper method:
 * var cb = function(evt) {
 *     switch (evt.type) {
 *         case "init":   show_debug_message("IAP init"); break;
 *         case "open":   show_debug_message("IAP open"); break;
 *         case "load":   show_debug_message("IAP load"); break;
 *         case "status": show_debug_message("IAP status: " + json_stringify(evt.payload)); break;
 *         case "status-invoice": show_debug_message("IAP invoice: " + json_stringify(evt.payload)); break;
 *         case "status-delivering": show_debug_message("IAP delivering: " + json_stringify(evt.payload)); break;
 *         case "status-done":
 *             show_debug_message("IAP done: " + json_stringify(evt.payload));
 *             // Optionally track the order with CrazyGames analytics:
 *             // crazy_analytics_track_order({ order_id: evt.payload?.order_id, status: "done" });
 *             break;
 *         case "close":  show_debug_message("IAP close"); break;
 *         case "error":  show_debug_message("IAP error: " + json_stringify(evt.payload)); break;
 *     }
 * };
 *
 * crazy_xsolla_open_paystation(global.xsolla_token, cb, { sandbox: true });
 * ```
 */

/**
 * @desc Helper to programmatically close the Pay Station lightbox.
 * @example
 * ```gml
 * crazy_xsolla_close_paystation();
 * ```
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
 * @module_end
 */

