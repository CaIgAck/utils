import {isObject} from "../validation";

export default function (userObject) {
    if (isObject(userObject));
    const { first_name, second_name, third_name } = userObject;
    if (first_name && second_name) {
        return `${second_name} ${first_name} ${third_name ? third_name : ""}`;
    } else return "";
}
