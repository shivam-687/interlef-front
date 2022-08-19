

const ContactForm = () => {
    return (

        <div className="grid place-items-center">
            <form className=" max-w-3xl w-full flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row gap-5 w-full mb-4">
                    <input type="text" placeholder="Name" required className="input input-bordered input-primary w-full max-w-lg" />
                    <input type="email" placeholder="Email" required className="input input-bordered input-primary w-full max-w-lg" />
                </div>
                <div className="flex flex-col md:flex-row gap-5 w-full mb-4">
                    <input type="text" placeholder="Whatsapp No." required className="input input-bordered input-primary w-full max-w-lg" />
                    <input type="text" placeholder="Company Name"  className="input input-bordered input-primary w-full max-w-lg" />
                </div>
                <div className="w-full">
                    <textarea placeholder="Message" required className="textarea textarea-primary w-full" rows={5}></textarea>
                </div>

                <div className="flex items-center justify-end w-full mt-5">
                    <button className="btn btn-primary ">Get Call Back</button>
                </div>
            </form>
        </div>

    );
}

export default ContactForm;