export default interface Lead {
    name: string;
    email: string;
    number: string;
    message?: string;
    business?:string
}


export interface LeadRes{
    id: number;
    attributes: Lead;
}
