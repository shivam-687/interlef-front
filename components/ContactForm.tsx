import React, { useState } from "react";
import Lead from "../http/models/leads/Lead";
import LeadService from "../http/services/Lead.service";

export type ContactFormData = {

}

const ContactForm = () => {

    const [formData, setFormData] = useState<Lead>({
        name: "",
        email: "",
        message: "",
        number: '',
        business: ''
    });
    const [loading, setLoading] = useState(false);
    const [httpError, setHttpError] = useState<string|undefined>(undefined);
    const [showPrompt, setShowPrompt] = useState(false);
    const service = new LeadService();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            setHttpError(undefined);
            const lead = await service.creatLead(formData);
            emptyForm();
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            setHttpError(error.message);
        }
        promptShow();
    }

    const promptShow = () => {
        setShowPrompt(true);
        setTimeout(() => {
            setShowPrompt(false);
        }, 5000);

    }

    const emptyForm = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
            number: '',
            business: ''
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return (

        <>
            {
                showPrompt && (
                    httpError ? (
                        <div className="alert alert-error shadow-lg mr-5 mb-2 max-w-lg animate__animated animate__fadeInUp ">
                            <div><h3>Their is some error while sending your request!</h3></div>
                        </div>
                    ) : (
                        <div className="alert alert-success shadow-lg mr-5 mb-2 max-w-lg animate__animated animate__fadeInUp ">
                            <div><h3>Your Request submitted and we will contact you very soon</h3></div>
                        </div>
                    )
                )
            }
            <div className="grid place-items-center">
                <form className=" max-w-3xl w-full flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row gap-5 w-full mb-4">
                        <input type="text" name="name" placeholder="Name" required className="input input-bordered input-primary w-full max-w-lg" onChange={handleChange} value={formData.name} />
                        <input type="email" name="email" placeholder="Email" required className="input input-bordered input-primary w-full max-w-lg" onChange={handleChange} value={formData.email} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 w-full mb-4">
                        <input type="text" name="number" placeholder="Whatsapp No." required className="input input-bordered input-primary w-full max-w-lg" onChange={handleChange} value={formData.number} />
                        <input type="text" name="business" placeholder="Company Name" className="input input-bordered input-primary w-full max-w-lg" onChange={handleChange} value={formData.business} />
                    </div>
                    <div className="w-full">
                        <textarea name="message" placeholder="Message" required className="textarea textarea-primary w-full" rows={5} onChange={handleChange} value={formData.message}></textarea>
                    </div>

                    <div className="flex items-center justify-end w-full mt-5">
                        {
                            loading ? <button className="btn loading" disabled={true}>loading</button> : <button className="btn btn-primary " type="submit">Get Call Back</button>
                        }
                    </div>
                </form>
            </div>
        </>

    );
}

export default ContactForm;