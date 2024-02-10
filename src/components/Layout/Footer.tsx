import {Euro, Globe, PersonStandingIcon } from "lucide-react";
import Container from "../Container";

const Footer = () =>{
    return (
        <Container className="py-5 bg-footer">
            <footer>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 py-5">
                    <div className="col-span-2">
                        <h1 className="text-3xl text-white font-semibold">Technext Limited</h1>
                    </div>
                    <div className="text-base">
                        <p className="py-3 text-white">Product</p>
                        <p className="py-3 text-footer">Pricing</p>
                        <p className="py-3 text-footer">Overview</p>
                        <p className="py-3 text-footer">Browse</p>
                        <p className="py-3 text-footer">Accessibility</p>
                    </div>
                    <div className="text-base">
                        <p className="py-3 text-white">Solutions</p>
                        <p className="py-3 text-footer">Brainstorming</p>
                        <p className="py-3 text-footer">Ideation</p>
                        <p className="py-3 text-footer">Wireframing</p>
                        <p className="py-3 text-footer">Research</p>
                    </div>
                    <div className="text-base">
                        <p className="py-3 text-white">Resources</p>
                        <p className="py-3 text-footer">Help Center</p>
                        <p className="py-3 text-footer">Blog</p>
                        <p className="py-3 text-footer">Tutorials</p>
                        <p className="py-3 text-footer">FAQs</p>
                    </div>
                    <div className="text-base">
                        <p className="py-3 text-white">Support</p>
                        <p className="py-3 text-footer">Contact Us</p>
                        <p className="py-3 text-footer">Developers</p>
                        <p className="py-3 text-footer">Documentation</p>
                        <p className="py-3 text-footer">Integrations</p>
                    </div>
                    {/* <div className="text-base">
                        <p className="py-3 text-white">Company</p>
                        <p className="py-3 text-footer">About</p>
                        <p className="py-3 text-footer">Press</p>
                        <p className="py-3 text-footer">Events</p>
                        <div className="flex gap-3 mx-auto items-center">
                            <p className="py-3 text-footer">Request Demo</p>
                            <ArrowRight className="text-white"></ArrowRight>
                        </div>
                    </div> */}
                </div>
                <hr></hr>

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-12 pt-6 text-footer">
                    <div>
                        <p className="text-base"> @ 2024. All rights reserved.</p>
                    </div>
                    <div className="flex lg:gap-8 md:gap-2 gap-5 lg:justify-end">
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Contact</p>
                        <div className="flex items-center gap-2">
                            <Globe></Globe>
                            <p>EN</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Euro></Euro>
                            <p>EUR</p>
                        </div>
                        <PersonStandingIcon></PersonStandingIcon>
                    </div>
                </div>


            </footer>

        </Container>
    )
}

export default Footer;