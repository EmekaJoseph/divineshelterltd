import auth from "./end_points/auth";
import visitor from "./end_points/visitor";
import company from "./end_points/company";
import blog from "./end_points/blog";
import quote from "./end_points/quote";
import projects from "./end_points/projects";
import buildingMaterials from "./end_points/building_materials";

export default {
    ...auth,
    ...visitor,
    ...company,
    ...blog,
    ...quote,
    ...projects,
    ...buildingMaterials,
}