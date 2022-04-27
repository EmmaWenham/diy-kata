const getEmployerRole = (employeeName, employees) => {
  if(!employees) {
      return 'Not an employee';
  }  
const foundEmployee = employees.find(
    element => element.name === employeeName);
    if(!foundEmployee) {
        return 'Does not work here';
    }

    return foundEmployee.role;
};

module.exports = getEmployerRole;
