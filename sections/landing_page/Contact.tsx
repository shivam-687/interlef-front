import ContactForm from "../../components/ContactForm";
import ContactInfoCard from "../../components/ContactInfoCard";
import Divider from "../../components/Divider";


const Contact = () => {
    return (

        <section className="py-20 px-5 mx-auto overflow-hidden">
            <div className="header flex items-center justify-center">
                <div className="max-w-2xl w-full text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Don’t dream for success, contact us</h1>
                    <Divider></Divider>
                    <p className="text-base mt-4">Leave an inquiry or contact us via email and phone. We will contact you within 24 hours during work days. We are interested in a long term partnership. When you hire Interlef team, you get a reliable partner for all your web development needs.</p>
                </div>
            </div>

            <div className="flex items-center justify-center">
            <div className="mt-10 rounded-lg shadow-lg shadow-primary/20 p-5 grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl w-full">
                <div className="lg:col-span-1">
                    <ContactInfoCard></ContactInfoCard>
                </div>
                <div className="lg:col-start-2 lg:col-span-3 mt-10 lg:mt-0">
                    <ContactForm></ContactForm>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Contact;