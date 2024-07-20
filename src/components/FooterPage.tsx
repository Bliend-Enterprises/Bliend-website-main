import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiHeaderLink,
    EuiIcon,
    EuiLink,
    EuiSpacer,
    EuiText,
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import './FooterPage.css';

const Footer = () => {
    return (
        <div className="footer">
            <EuiFlexGroup id='footer-section' responsive wrap alignItems="center" justifyContent="spaceBetween">
                <EuiFlexItem grow={false} >
                    <div className='footer-logo-item'>
                    <img src="/logo_new.png" alt="Company Logo" className="footer-logo" />
                    </div>
                </EuiFlexItem>

                <EuiFlexItem grow={false} className='footer-nav'>
                    <EuiFlexGroup>
                        <EuiFlexItem grow={false}>
                            <EuiText >
                                <p onClick={()=>{
                                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className="footer-link">Services</p>
                            </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>

                            <EuiText>
                                <p onClick={()=>{
                                    document.getElementById('advertisement-section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className="footer-link">Advertisement</p>
                            </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>

                            <EuiText>
                                <p onClick={()=>{
                                    document.getElementById('marketing-section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className="footer-link">Marketing</p>
                            </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>

                            <EuiText>
                                <p onClick={()=>{
                                    document.getElementById('software-solution-section')?.scrollIntoView({ behavior: 'smooth' })
                                }} className="footer-link">Solutions</p>
                            </EuiText>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                </EuiFlexItem>

                <EuiFlexItem grow={false} >
                    <EuiFlexGroup responsive  justifyContent='center'>
                    <div className="footer-social">
                        <EuiFlexItem grow={false}>
                            <EuiLink href="https://www.facebook.com/profile.php?id=61562183645720&mibextid=ZbWKwL" className="footer-link">
                                <EuiIcon type="/brandLogos/facebook.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiLink href="https://x.com/bliendservices?t=lGQEPTTjH_KLK-vJhxXzRQ&s=09" className="footer-link">
                                <EuiIcon type="/brandLogos/twitter.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiLink href="https://www.instagram.com/bliendenterprises?igsh=MXJ5dW15ejB4dGlycg==" className="footer-link">
                                <EuiIcon type="/brandLogos/instagram.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiLink href="https://www.linkedin.com/company/bliend-enterprises-pvt-ltd/" className="footer-link">
                                <EuiIcon type="/brandLogos/linkedin.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                            <EuiLink href="https://pin.it/XiQ4pLpQc" className="footer-link">
                                <EuiIcon type="/brandLogos/pinterest.png" size="xl" />
                            </EuiLink>
                        </EuiFlexItem>
                        </div>
                    </EuiFlexGroup>
                </EuiFlexItem>

                <EuiFlexItem grow={false} className="footer-contact">
                    <EuiText>
                        <strong>Contact Us:</strong>
                        <br />
                        <EuiLink href="mailto:support@bliend.in" className="footer-link">support@bliend.in</EuiLink>
                        <br />
                        <EuiLink href="tel:+917418290420" className="footer-link">+91 74182 90420</EuiLink>
                    </EuiText>
                </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size='l'/>
        </div>
    );
};

export default Footer;
