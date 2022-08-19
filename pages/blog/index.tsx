import { NextPage } from "next";
import Footer from "../../components/Footer";
import { Navigation } from "../../components/Navigation";
import BlogHero from "../../sections/blog/BlogHero";
import Featured from "../../sections/blog/Featured";
import Stories from "../../sections/blog/Stories";
import Contact from "../../sections/landing_page/Contact";
import {Element} from 'react-scroll';


const Blog: NextPage = () => {

    return(
        <>
            <BlogHero></BlogHero>
            <Featured></Featured>
            <Stories></Stories>
            <Element name='contact'><Contact></Contact></Element>
            <Footer></Footer>
        </>
    );
}

export default Blog;