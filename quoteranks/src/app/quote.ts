export class Quote {
    constructor(
    public id: number = 0,
    public quote: string = "", 
    public author: string = "",
    public votes: number = 0,
    public active: number = 1,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
    ){}
}
