import axiosClient from "../clients/AxiosClient";
import Lead, { LeadRes } from "../models/leads/Lead";
import {AxiosResponse} from 'axios';
import { ApiResponse } from "../models/ApiResponse";


export default class LeadService{
    client = axiosClient;


    async creatLead(leadData: Lead){
        return this.client.post<any, AxiosResponse<ApiResponse<LeadRes>>>('/leads', {data: leadData});
    }

}