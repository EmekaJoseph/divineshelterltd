import auth from "./end_points/auth";
import visitor from "./end_points/visitor";
import company from "./end_points/company";

export default {
    ...auth,
    ...visitor,
    ...company,
}