import { getCookie, setCookie } from "cookies-next";

// Handles all incoming form actions (Save, Update, Delete)
export default function deliveryHandler(req: any, res: any) {
  var tempCookieObject = [];

  //try to get existing deliveries out of cookie
  var existingCookies = getCookie("deliveries", { req, res })?.toString();

  //parse to object
  if (existingCookies) {
    tempCookieObject = JSON.parse(existingCookies);
  }

  //Choose which action got called from the form
  //Delete and Update need the item index within the array
  //TODO: If list can be ordered we need another solution for the index
  if (req.body.delete && req.body.index) {
    tempCookieObject.splice(req.body.index, 1);
  } else if (req.body.update && req.body.index) {
    tempCookieObject[req.body.index].orderNumber = req.body.orderNumber;
    tempCookieObject[req.body.index].orderStatus = req.body.orderStatus;
  } else if (req.body.save) {
    tempCookieObject.push({ orderNumber: req.body.orderNumber, orderStatus: req.body.orderStatus });
  }

  //Save the updated Cookie to the browser and reload Home
  setCookie("deliveries", JSON.stringify(tempCookieObject), { req, res, maxAge: 60 * 6 * 24 });
  return res.redirect("/");
}
