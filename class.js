class Book {
    constructor(name, author, price){
        this.name = name;
        this.author = author;
        this.price = price;
    }

    get name(){ 
        return this.name;
    }
    set name(name){ 
        this.name = name;
    }

    get author(){ 
        return this.author;
    }
    set author(author){ 
        this.author = author;
    }

    get price(){ 
        return this.price;
    }
    set price(price){ 
        this.price = price;
    }
}

const firstBook = new Book("O poder do hábito", "Charles During", 30.00);
const secondBook = new Book("Pai rico pai pobre", "Robert Kyosaki", 20.00);
const thirdBook = new Book("Como fazer amigos e influenciar pessoas", "Dale Carnegie", 25.00);

console.table(new Array(firstBook, secondBook, thirdBook));