const joinNames = namesObj => {
    
    class Person {
        constructor(name) {
            this.name = name
        }
    }

    const bart = new Person('Bart')
    const lisa = new Person('Lisa')
    const maggie = new Person('Maggie')
    const tony = new Person('Tony')

    const finalName = namesObj.pop();

    return namesObj.join(', ') + ' & ' + finalName;
};

module.exports = joinNames;
