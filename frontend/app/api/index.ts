import auth from "./end_points/auth";
import visitor from "./end_points/visitor";
import company from "./end_points/company";
import blog from "./end_points/blog";
import quote from "./end_points/quote";

export default {
    ...auth,
    ...visitor,
    ...company,
    ...blog,
    ...quote,
}