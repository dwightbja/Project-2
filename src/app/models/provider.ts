export class Provider {
    description: string;
	name: string;
	company: number;
    status: string;
    constructor(description: string, name: string, company: number, status: string) {
        this.description = description;
        this.name = name;
        this.company = company;
        this.status = status;

    }
}
