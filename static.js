//With static do you not need create a new class instance to use methods from this.

class Duck {
    static eat = () => "Duck did eat";
    static walk = () => "Duck did walk";
    static swim = () => "Duck did swim";
    static fire = () => "Duck did not spits fire, only dragons!";
}

console.log(Duck.eat());