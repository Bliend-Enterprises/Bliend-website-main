import {
    EuiButtonIcon,
    EuiFlexGroup,
    EuiFlexItem,
    EuiFlyout,
    EuiFlyoutBody,
    EuiFlyoutHeader,
    EuiHeader,
    EuiHeaderLink,
    EuiHeaderLogo
} from '@elastic/eui';
import { Fragment, FunctionComponent, useState } from 'react';
import ScrollingHeader from './ScrollingHeader';
import './Header.css';

const HeaderComponent: FunctionComponent = () => {
    const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

    const toggleFlyout = () => {
        setIsFlyoutVisible(!isFlyoutVisible);
    };

    const closeFlyout = () => {
        setIsFlyoutVisible(false);
    };

    return (
        <Fragment>
                {/* <div className="header-container">
                    <ScrollingHeader/>
                </div> */}
            <EuiHeader style={{ background: 'white', border: 'none' }} position="fixed">
                <div className="header-container">
                    <EuiFlexItem grow={false} id="menu-icon">
                        <EuiButtonIcon
                            style={{ background: 'white', border: 'none', color: 'black' }}
                            color='success'
                            iconType="menu"
                            aria-label="Open menu"
                            onClick={toggleFlyout}
                        />
                    </EuiFlexItem>
                    <EuiFlexItem grow={false} id="logo-item">
                        <EuiHeaderLogo className='text-pulse' iconType="/logo_black.png" />
                    </EuiFlexItem>
                    <EuiFlexItem id="nav-items">
                        <EuiFlexGroup justifyContent="spaceAround">
                            <EuiFlexItem grow={false}>
                                <h3 className="header-link" onClick={() => {
                                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Services</h3>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <h3 className="header-link" onClick={() => {
                                    document.getElementById('advertisement-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Advertisement</h3>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <h3 className="header-link" onClick={() => {
                                    document.getElementById('marketing-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Marketing</h3>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <h3 className="header-link" onClick={() => {
                                    document.getElementById('software-solution-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Solutions</h3>
                            </EuiFlexItem>
                            <EuiFlexItem grow={false}>
                                <h3 className="header-link" onClick={() => {
                                    document.getElementById('footer-section')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Contact Us</h3>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </div>
                
            </EuiHeader>

            {isFlyoutVisible && (
                <EuiFlyout
                    ownFocus
                    onClose={closeFlyout}
                    aria-labelledby="flyoutTitle"
                    size="xs"
                    style={{ background: '#0a0a23' }}
                    className='flyout'
                    hideCloseButton
                >
                    <EuiFlyoutHeader hasBorder>
                        <EuiHeaderLogo iconType="/logo_new.png">
                            <p style={{ color: 'white' }}>Bliend</p>
                        </EuiHeaderLogo>
                    </EuiFlyoutHeader>
                    <EuiFlyoutBody>
                        <EuiFlexGroup direction="column" gutterSize="s">
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Services
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('advertisement-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Advertisement
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('marketing-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Marketing
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('software-solution-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Software Solutions
                                </EuiHeaderLink>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiHeaderLink className='header-link' href="#" onClick={() => {
                                    document.getElementById('footer-section')?.scrollIntoView({ behavior: 'smooth' })
                                    closeFlyout()
                                }}>
                                    Contact Us
                                </EuiHeaderLink>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlyoutBody>
                </EuiFlyout>
            )}
        </Fragment>
    );
};

export default HeaderComponent;



