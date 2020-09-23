let users = [
    {
        username: "juat",
        fName: "juat",
        lName: "tan",
        role: "STUDENT"
    },
    {
        username: "lwheels",
        fName: "larry",
        lName: "wheels",
        role: "STUDENT"
    },
    {
        username: "stupid",
        fName: "your",
        lName: "mom",
        role: "FACULTY"
    }
];

let $template;


function renderUsers(users) {
    users.forEach(usr => {
        const user = usr;
        const username = usr.username;
        const fName = usr.fName;
        const lName = usr.lName;
        const role = usr.role;

        const $trClone = $template.clone();
    })
}

function init() {
    $template = jQuery(".wbdv-template");
    renderUsers(users);

}

jQuery(init)