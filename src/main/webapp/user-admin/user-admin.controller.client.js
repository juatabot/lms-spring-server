let users;
let $template;
let tbody;

function deleteUser(event) {
    // remove table row
    const deleteBtn = event.currentTarget;
    const $deleteBtn = $(deleteBtn);
    const $tr = $deleteBtn.closest("tr");

    const username = $tr.find(".wbdv-username").html();
    const trIndex = $tr.index();
    console.log(users.length);
    const userId = users[trIndex]["_id"];
    users.splice(trIndex, 1);
    console.log(users.length);

    userService.deleteUser(userId)
        .then(resp => {
            console.log(resp);
        })
    $tr.remove();
}

function createUser(event) {
    // create new user from fields
    const username = $("#usernameFld").val();
    const firstName = $("#firstNameFld").val();
    const lastName = $("#lastNameFld").val();
    const role = $("#roleFld").val();
    const newUser = {
        username,
        firstName,
        lastName,
        role
    };

    userService.createUser(newUser)
        .then(svrUser => {
            users.push(svrUser);
            renderUsers(users);
        })
}

function updateUser(event) {
    const newUsername = $("#usernameFld").val();
    const newFirstName = $("#firstNameFld").val();
    const newLastName = $("#lastNameFld").val();
    const newRole = $("#roleFld").val();

    const newFields = {
        "username": newUsername,
        "firstName": newFirstName,
        "lastName": newLastName,
        "role": newRole
    }
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
    $inputForm.find("#roleFld")
        .find('role')
        .remove()
        .end()
        .val(role);
}

function renderUsers(users) {
    tbody.empty();
    // render users in user dict
    const keys = Object.keys(users);
    keys.forEach(key => {
        const usr = users[key];
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

    $(".wbdv-create").click((event) => createUser(event));
    $(".wbdv-update").click((event) => updateUser(event));


    userService.findAllUsers()
        .then(allUsers => {
            users = allUsers;
            renderUsers(users);
        })
}

$(init)