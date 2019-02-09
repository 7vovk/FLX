let user = prompt('Enter your login', ''),
    password;

if (user === null || user.length === 0) {
    alert('Canceled.');
} else if (user.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (user === 'Admin' || user === 'User') {
    password = prompt('Enter your password', '');
    if (password === '' || password === null) {
        alert('Canceled.');
    } else if (user === 'User' && password === 'UserPass') {
        if (new Date().getHours() >= 20) {
            alert('Good evening, dear User!');
        } else {
            alert('Good day, dear User!');
        }
    } else if (user === 'Admin' && password === 'RootPass') {
        if (new Date().getHours() >= 20) {
            alert('Good evening, dear Admin!');
        } else {
            alert('Good day, dear Admin!');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}