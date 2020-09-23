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
let tbody;


function renderUsers(users) {
    users.forEach(usr => {
        const user = usr;
        const username = usr.username;
        const fName = usr.fName;
        const lName = usr.lName;
        const role = usr.role;

        const $trClone = $template.clone();
        $trClone.removeClass("wbdv-hidden")

        const $username = $trClone.find(".wbdv-username")
        $username.html(username)
        const $firstName = $trClone.find(".wbdv-first-name")
        $firstName.html(fName)
        const $lastName = $trClone.find(".wbdv-last-name")
        $lastName.html(lName)
        // const $removeBtn = $trClone.find(".wbdv-remove")

        tbody.append($trClone)
    })
}

function init() {
    $template = jQuery(".wbdv-template");
    tbody = $("tbody.wbdv-tbody")
    renderUsers(users);
}

jQuery(init)