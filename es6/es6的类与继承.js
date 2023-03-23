class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._sex = -1
    }
    get sex() {
        if (this._sex == 1) {
            return "male";
        } else if (this._sex == 0) {
            return "female";

        }else{
            return 'error'
        }

    }
    set sex(value) {
        if (value === 0 || value === 1) {
            this._sex = value

        }

    }
    showName() {
        console.log("我叫:" + this.name + ',' + "今年:" + this.age + "岁")
    }
    static getCount() {
        return 5
    }

}

let p1 = new People("海", 22)
p1.showName()
console.log(p1)
p1.sex = 1
console.log(p1.sex)
console.log(People.getCount())


class Coder extends People {
    constructor(name, age, company) {
        super(name, age)
        this.company = company

    }
    showCompany() {
        console.log(this.company)
    }
}

let c1 = new Coder("刘", 22, '华为')
c1.showCompany()
c1.showName()
console.log(c1)
console.log(Coder.getCount())

