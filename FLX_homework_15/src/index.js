let magicNumbers = {
    minus1: -1,
    zero: 0,
    one: 1,
    hundred: 100,
    second: 1000
};

function Company(name, owner, maxCount) {
    this.company = name;
    this.owner = owner;
    this.maxCount = maxCount;
    this.employees = [];
    let _logs = [];

    _logs.push(`${this.company} was created in ${new Date().toLocaleString()}`);

    this.addNewEmployee = function (employee) {
        if (employee instanceof Employee) {
            if (this.employees.length < this.maxCount) {
                if (!employee.hasJob) {
                    this.employees.push(employee);
                    _logs.push(`${employee.name} starts working at ${this.company} in ${new Date().toLocaleString()}`);
                    employee.hire(this.company);
                } else {
                    return `${employee.name} is already working in this company`
                }
            } else {
                this.employees.sort(function (prev, next) {
                    if (prev.salary >= next.salary) {
                        return magicNumbers.one;
                    }
                    if (prev.salary < next.salary) {
                        return magicNumbers.minus1;
                    }
                    return magicNumbers.zero;
                });
                let employees = this.employees[magicNumbers.zero];
                this.employees.splice(magicNumbers.zero, magicNumbers.one);
                _logs.push(`${employees.name} ends working at ${this.company} in ${new Date().toLocaleString()}`);
                employees.fire();
                if (!employee.hasJob) {
                    this.employees.push(employee);
                    _logs.push(`${employee.name} starts working at ${this.company} in ${new Date().toLocaleString()}`);
                    employee.hire(this.company);
                } else {
                    return `${employee.name} is already working. Please find another employee`
                }
            }
        } else {
            console.error('Please try to add Employee instance');
        }
    };

    this.removeEmployee = function (index) {
        if (index < this.employees.length) {
            let removedEmployee = this.employees.splice(index - magicNumbers.one, magicNumbers.one);
            _logs.push(removedEmployee[magicNumbers.zero].name + 'is finished working at ' + this.name + ' in '
                + new Date().toLocaleString());
            removedEmployee[magicNumbers.zero].fire(this.company);
        }
    };


    this.getAverageSalary = function () {
        let _salaryArr = [];
        let _salary = magicNumbers.zero;
        this.employees.forEach(function (employee) {
            _salaryArr.push(employee.salary);
            _salary += employee.salary;
        });
        let averageSalary = _salary / _salaryArr.length;
        return parseInt(averageSalary * magicNumbers.hundred) / magicNumbers.hundred;
    };

    this.getEmployees = function () {
        return this.employees;
    };

    this.getFormattedListOfEmployees = function () {
        this.employees.forEach(function (employee) {
            let name = employee.name;
            let timeInCompany = employee.getWorkTimeInSeconds();
            console.log(`${name} -  works in ${employee.company} ${timeInCompany} seconds`);
        });
    };

    this.getAverageAge = function () {
        let _ageArr = [];
        let _age = magicNumbers.zero;
        this.employees.forEach(function (employee) {
            _ageArr.push(employee.age);
            _age += employee.age;
        });
        let averageAge = _age / _ageArr.length;
        return parseInt(averageAge * magicNumbers.hundred) / magicNumbers.hundred;
    };

    this.getHistory = function () {
        for (let i = magicNumbers.zero; i < _logs.length; i++) {
            console.log(_logs[i])
        }
    };

}

function Employee(name, age, salary, primarySkill) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.primarySkill = primarySkill;
    this.company = '';
    let company = '';
    this.hasJob = false;
    this.logs = [];
    let _seconds = magicNumbers.zero;
    let _count = null;


    this.getSalary = function () {
        return this.salary;
    };

    this.setSalary = function (newSalary) {
        if (isNaN(newSalary) || newSalary <= magicNumbers.zero) {
            console.log('You should use only positive numbers');
        } else {

            let prevSalary = this.salary;
            if (prevSalary >= newSalary) {
                this.logs.push({
                    event: `try to change salary from ${prevSalary} to ${newSalary}`
                });
            } else {
                this.logs.push({
                    event: `change salary from ${this.salary} to ${newSalary}`
                });
            }
        }
    };

    this.getWorkTimeInSeconds = function () {
        return _seconds;
    };

    this.hire = function (companyName) {
        this.company = companyName;
        this.hasJob = true;
        _count = null;
        _count = setInterval(function () {
            _seconds += magicNumbers.one;
        }, magicNumbers.second);
        this.logs.push(`${this.name} is hired to ${this.company} in ${new Date().toLocaleString()}`);
    };

    this.fire = function () {
        this.logs.push(`${this.name} is fired from ${this.company} in ${new Date().toLocaleString()}`);
        company = null;
        this.company = company;
        this.hasJob = false;
        clearInterval(_count);
        _count = null;
    };

    this.getHistory = function () {
        for (let i = magicNumbers.zero; i < this.logs.length; i++) {
            console.log(this.logs[i])
        }
    };
}


// //Work script:
// let artem = new Employee('Artem', 15, 1000, 'UX');
// let vova = new Employee('Vova', 16, 2000, 'BE');
// let vasyl = new Employee('Vasyl', 25, 1000, 'FE');
// let ivan = new Employee('Ivan', 35, 5000, 'FE');
// let orest = new Employee('Orest', 29, 300, 'AT');
// let anton = new Employee('Anton', 19, 500, 'Manager');
//
// let epam = new Company('Epam', 'Arkadii', 5);
// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);
//
//
// epam.getHistory();
//
// epam.removeEmployee(3);
//
//
// vasyl.getHistory();
//
// epam.getAverageSalary();
// epam.getAverageAge();
//
// epam.addNewEmployee(5, 6, 9, 5);
//
// setTimeout(() => {
//     epam.removeEmployee(1);
//     console.log(artem.getWorkTimeInSeconds());
//     artem.getHistory();
// }, 5000);
//
// epam.getEmployees();
// setTimeout(() => {
//     epam.getFormattedListOfEmployees();
// }, 6000);
//
//
// vova.setSalary(900);
// vova.setSalary(2200);
// vova.getHistory();