export class Tag {
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly C = new Tag('C','blue');
    static readonly Bootstrap = new Tag('Bootstrap','teal');

    private constructor(private readonly key:string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}