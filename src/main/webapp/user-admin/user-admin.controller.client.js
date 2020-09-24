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

function deleteUser(event) {
    // remove table row
    const deleteBtn = event.currentTarget;
    const $deleteBtn = $(deleteBtn);
    const $tr = $deleteBtn.closest("tr");
    $tr.remove();
}

function editForm(event) {
    // populate edit form with table row data
    const editBtn = event.currentTarget;
    const $editBtn = $(editBtn);
    const $tr = $editBtn.closest("tr");

    const username = $tr.find(".wbdv-username").text();
    const firstName = $tr.find(".wbdv-first-name").text();
    const lastName = $tr.find(".wbdv-last-name").text();
    const role = $tr.find(".wbdv-role").text();

    const $inputForm = $(".wbdv-form");

    $inputForm.find("#usernameFld").val(username);
    $inputForm.find("#firstNameFld").val(firstName);
    $inputForm.find("#lastNameFld").val(lastName);

    const $selectForm = $inputForm.find("#roleFld");

    const $selected = $selectForm.find(role);
    console.log($selected);
    $inputForm.find("#roleFld")
        .find('role')
        .remove()
        .end()
        .append('<option selected value="role"></option>'.replace("role", role))
        .val(role);
}

function renderUsers(users) {
    users.forEach(usr => {
        const user = usr;
        const username = usr.username;
        const fName = usr.fName;
        const lName = usr.lName;
        const role = usr.role;

        const $trClone = $template.clone();
        $trClone.removeClass("wbdv-hidden");

        const $username = $trClone.find(".wbdv-username");
        $username.html(username);
        const $firstName = $trClone.find(".wbdv-first-name");
        $firstName.html(fName);
        const $lastName = $trClone.find(".wbdv-last-name");
        $lastName.html(lName);
        const $role = $trClone.find(".wbdv-role");
        console.log($role);
        $role.html(role);

        const $removeBtn = $trClone.find(".wbdv-remove");
        $removeBtn.click((event) => deleteUser(event));
        const $editBtn = $trClone.find(".wbdv-update");
        $editBtn.click((event) => editForm(event));

        tbody.append($trClone);
    })
}

function init() {
    $template = jQuery(".wbdv-template");
    tbody = $("tbody.wbdv-tbody");
    renderUsers(users);
}

$(init)