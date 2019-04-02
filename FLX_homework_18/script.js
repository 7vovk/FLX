let mainUrl = 'https://jsonplaceholder.typicode.com';

let xhr = new XMLHttpRequest();

xhr.open('GET', `${mainUrl}/users`, true);
xhr.send(null);

xhr.onreadystatechange = function () {
    {
        if (xhr.readyState === 4) {
            let users = JSON.parse(xhr.responseText);
            let spinner = document.getElementById('spinner');
            spinner.style.display = 'block';

            for (let i = 0; i < users.length; i++) {

                let wrap = 'wrap' + [i + 1];
                let image = 'image' + [i + 1];
                let username = 'username' + [i + 1];
                let name = 'name' + [i + 1];
                let email = 'email' + [i + 1];
                let company = 'company' + [i + 1];
                let address = 'address' + [i + 1];
                let info = 'info' + [i + 1];
                let buttons = 'buttons' + [i + 1];
                let edit = 'edit' + [i + 1];
                let remove = 'remove' + [i + 1];

                let divWrap = document.createElement('div');
                let img = document.createElement('img');
                let infoWrap = document.createElement('div');
                let buttonsWrap = document.createElement('div');

                let usernameDiv = document.createElement('div');
                let nameDiv = document.createElement('div');
                let paragraphName = document.createElement('a');
                let inputName = document.createElement('input');
                let emailDiv = document.createElement('div');
                let paragraphEmail = document.createElement('p');
                let inputEmail = document.createElement('input');
                let companyDiv = document.createElement('div');
                let paragraphCompany = document.createElement('p');
                let inputCompany = document.createElement('input');
                let addressDiv = document.createElement('div');
                let paragraphAddressZip = document.createElement('p');
                let inputAddressZip = document.createElement('input');
                let paragraphAddress = document.createElement('p');
                let inputAddress = document.createElement('input');
                let editBtn = document.createElement('button');
                let removeBtn = document.createElement('button');

                document.body.appendChild(divWrap);
                divWrap.setAttribute('id', wrap);

                divWrap.appendChild(img);
                img.setAttribute('id', image);
                img.setAttribute('alt', 'Cat avatar');
                divWrap.appendChild(infoWrap);
                infoWrap.setAttribute('id', info);

                infoWrap.appendChild(usernameDiv);
                usernameDiv.setAttribute('id', username);
                infoWrap.appendChild(nameDiv);
                nameDiv.setAttribute('id', name);
                document.getElementById(name).innerHTML += `Name: `;
                nameDiv.appendChild(paragraphName);
                paragraphName.setAttribute('href', '#');
                nameDiv.appendChild(inputName);
                infoWrap.appendChild(emailDiv);
                emailDiv.setAttribute('id', email);
                document.getElementById(email).innerHTML = `Email address: `;
                emailDiv.appendChild(paragraphEmail);
                emailDiv.appendChild(inputEmail);
                infoWrap.appendChild(companyDiv);
                companyDiv.setAttribute('id', company);
                document.getElementById(company).innerHTML = `Company: `;
                companyDiv.appendChild(paragraphCompany);
                companyDiv.appendChild(inputCompany);
                infoWrap.appendChild(addressDiv);
                addressDiv.setAttribute('id', address);
                document.getElementById(address).innerHTML = `Local address: Zip Code `;
                addressDiv.appendChild(paragraphAddressZip);
                addressDiv.appendChild(inputAddressZip);
                addressDiv.appendChild(paragraphAddress);
                addressDiv.appendChild(inputAddress);

                divWrap.appendChild(buttonsWrap);
                buttonsWrap.setAttribute('id', buttons);

                buttonsWrap.appendChild(editBtn);
                editBtn.setAttribute('type', 'button');
                editBtn.setAttribute('id', edit);
                document.getElementById(edit).innerHTML = 'Edit/Save';
                buttonsWrap.appendChild(removeBtn);
                removeBtn.setAttribute('type', 'button');
                removeBtn.setAttribute('id', remove);
                removeBtn.setAttribute('onclick', 'removeParents(this, document.body)');
                document.getElementById(remove).innerHTML = 'Remove';

                document.getElementById(wrap).style.margin = '10px';
                document.getElementById(wrap).style.border = '1px solid #000';
                document.getElementById(wrap).style.display = 'flex';
                document.getElementById(image).style.maxWidth = '170px';
                document.getElementById(image).style.maxHeight = '150px';
                document.getElementById(info).style.width = '90%';
                document.getElementById(username).style.margin = '10px';
                document.getElementById(name).style.margin = '10px';
                document.getElementById(email).style.margin = '10px';
                document.getElementById(company).style.margin = '10px';
                document.getElementById(address).style.margin = '10px';
                document.getElementById(buttons).style.minWidth = '10%';
                document.getElementById(buttons).style.display = 'flex';
                document.getElementById(buttons).style.justifyContent = 'center';
                document.getElementById(buttons).style.flexDirection = 'column';
                document.getElementById(edit).style.height = '50%';
                document.getElementById(remove).style.height = '50%';
                document.getElementById(name).children[1].style.display = 'none';
                document.getElementById(name).children[1].style.width = '110px';
                document.getElementById(email).children[1].style.display = 'none';
                document.getElementById(company).children[1].style.display = 'none';
                document.getElementById(address).children[1].style.display = 'none';
                document.getElementById(address).children[1].style.width = '80px';
                document.getElementById(address).children[1].style.margin = '0 5px 0 0';
                document.getElementById(address).children[3].style.display = 'none';
                document.getElementById(address).children[3].style.width = '330px';

                document.getElementById(edit).onmouseover = function () {
                    this.style.cursor = "pointer";
                };
                document.getElementById(remove).onmouseover = function () {
                    this.style.cursor = "pointer";
                };

                document.getElementById(username).innerHTML = `Userame: ${users[i].username}.`;

                paragraphName.innerHTML = `${users[i].name}.`;

                paragraphEmail.innerHTML = `${users[i].email}`;

                paragraphCompany.innerHTML = `${users[i].company.name}`;

                paragraphAddressZip.innerHTML = `${users[i].address.zipcode}`;
                paragraphAddress.innerHTML = users[i].address.city + ', ' + users[i].address.street + ' street, ' +
                    users[i].address.suite;

                let toggleFlag = true;

// User posts
                document.getElementById(name).children[0].addEventListener('click', function () {
                    spinner.style.display = 'block';
                    document.getElementById('myModal').style.display = "block";
                    xhr.open('GET', `${mainUrl}/posts?userId=${i + 1}`, true);
                    xhr.send(null);
                    xhr.onreadystatechange = function () {
                        {
                            if (xhr.readyState === 4) {
                                let posts = JSON.parse(xhr.responseText);
                                for (let post = 0; post < posts.length; post++) {

                                    if (i + 1 === users[i].id) {
                                        let heading = 'heading' + [post];
                                        let postN = 'postN' + [post];
                                        document.getElementById('modalContent').children[1].innerHTML = 'User ' + [i + 1]
                                            + ' posts:';
                                        if (document.getElementById('modalContent').children.length > posts.length * 2) {
                                            document.getElementById(heading).remove();
                                            document.getElementById(postN).remove();
                                        }

                                        let heading5 = document.createElement('h3');
                                        let p = document.createElement('p');

                                        document.getElementById('modalContent').appendChild(heading5);
                                        heading5.setAttribute('id', heading);
                                        document.getElementById('modalContent').appendChild(p);
                                        p.setAttribute('id', postN);

                                        document.getElementById(heading).innerHTML = `${post + 1}. ${posts[post].title}`;
                                        document.getElementById(postN).innerHTML = `${posts[post].body}`;
                                        spinner.style.display = 'none';
                                    }
                                }
                            }
                        }
                    }
                });

                document.getElementsByClassName("close")[0].onclick = function () {
                    document.getElementById('myModal').style.display = "none";
                };
                window.onclick = function (event) {
                    if (event.target === document.getElementById('myModal')) {
                        document.getElementById('myModal').style.display = "none";
                    }
                };

                function editData() {
                    document.getElementById(name).children[0].style.display = 'none';
                    document.getElementById(email).children[0].style.display = 'none';
                    document.getElementById(company).children[0].style.display = 'none';
                    document.getElementById(address).children[0].style.display = 'none';
                    document.getElementById(address).children[2].style.display = 'none';

                    document.getElementById(name).children[1].style.display = 'inline-block';
                    document.getElementById(email).children[1].style.display = 'inline-block';
                    document.getElementById(company).children[1].style.display = 'inline-block';
                    document.getElementById(address).children[1].style.display = 'inline-block';
                    document.getElementById(address).children[3].style.display = 'inline-block';

                    document.getElementById(name).children[1].value = `${paragraphName.textContent}`;
                    document.getElementById(email).children[1].value = `${paragraphEmail.textContent}`;
                    document.getElementById(company).children[1].value = `${paragraphCompany.textContent}`;
                    document.getElementById(address).children[1].value = `${paragraphAddressZip.textContent}`;
                    document.getElementById(address).children[3].value = `${paragraphAddress.textContent}`;
                }

                let url = `${mainUrl}/users/` + [i + 1];

                function saveData() {
                    spinner.style.display = 'block';
                    xhr.open("PUT", url, true);

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                            document.getElementById(name).children[0].style.display = 'inline-block';
                            document.getElementById(email).children[0].style.display = 'inline-block';
                            document.getElementById(company).children[0].style.display = 'inline-block';
                            document.getElementById(address).children[0].style.display = 'inline-block';
                            document.getElementById(address).children[2].style.display = 'inline-block';

                            document.getElementById(name).children[1].style.display = 'none';
                            document.getElementById(email).children[1].style.display = 'none';
                            document.getElementById(company).children[1].style.display = 'none';
                            document.getElementById(address).children[1].style.display = 'none';
                            document.getElementById(address).children[3].style.display = 'none';

                            document.getElementById(name).children[0].innerHTML = `${document.getElementById(name).children[1].value}`;

                            document.getElementById(email).children[0].innerHTML = `${document.getElementById(email).children[1].value}`;
                            document.getElementById(company).children[0].innerHTML = `${document.getElementById(company).children[1].value}`;

                            document.getElementById(address).children[0].innerHTML = `${document.getElementById(address).children[1].value}`;
                            document.getElementById(address).children[2].innerHTML = `${document.getElementById(address).children[3].value}`;
                        }
                        spinner.style.display = 'none';
                    };
                    xhr.send(users);
                }

// Save/Edit key
                document.getElementById(edit).addEventListener('click', function () {
                    toggleFlag ? editData() : saveData();
                    toggleFlag = !toggleFlag;
                });
// Remove user
                document.getElementById(remove).addEventListener('click', function (item, url) {
                    url = `${mainUrl}/users`;
                    item = i + 1;
                    return fetch(url + '/' + item, {
                        method: 'delete'
                    })
                        .then(response => response.json());
                });

            }
//Add image for users
            let loadImg = setTimeout(function () {
                for (let i = 1; i <= users.length; i++) {
                    let image = 'image' + i;
                    fetch('https://api.thecatapi.com/v1/images/search')
                        .then(response => response.json())
                        .then(function (data) {
                            data.forEach((pics) => {
                                const {url} = pics;
                                document.getElementById(image).setAttribute('src', url);
                                spinner.style.display = 'none';
                            });
                        });
                }
            }, 100);
        }
    }
};

// Remove parent
function removeParents(e, root) {
    root = root ? root : document.body;
    let p = e.parentNode;
    while (root !== p) {
        e = p;
        p = e.parentNode;
    }
    root.removeChild(e);
}