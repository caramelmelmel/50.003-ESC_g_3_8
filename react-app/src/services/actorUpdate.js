var actor = "staff"

export function getActor(){
    return actor;
}

export function setActor(setter) {
    if (setter == "staff" || setter == "tenant") {
        actor = setter;
    } else {
        actor = "staff" };
}
