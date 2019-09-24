// http://www.yushesh.com/
class Logo extends React.Component {
    render() {
        return (
            <div className="top_logo" onClick={()=>window.location.href='index.html'}>
                <img src="./content/images/logo.svg" alt=""/>
            </div>
        );
    }
}
class TopLogo extends React.Component {
    render() {
        return (
            <div className="top_logo" onClick={()=>window.location.href='index.html'}></div>
        );
    }
}
class MobileLogo extends React.Component {
    render() {
        return (
            <div className="mobile_top_logo" onClick={()=>window.location.href='index.html'}>
            <img src="./content/images/logo.svg" alt="" />
        </div>
        );
    }
}

class MobileNav extends React.Component {
    render() {
        return (
            <ul>
                <li className="tri_delay_1"><a href="introduction.html">Introduction</a></li>
                {/* <li className="tri_delay_2"><a href="award.html">AWARDS</a></li>
                <li className="tri_delay_3"><a href="news.html">NEWS</a></li>
                <li className="tri_delay_3"><a href="team.html">TEAM</a></li>*/}
                <li className="tri_delay_4"><a href="contact.html">Contact Us</a></li>
                <li className="tri_delay_5"><a href="job.html">JOIN US</a></li>
            </ul>
        );
    }
}

class PCNav extends React.Component {
    render() {
        return (
            <ul className="sub_nav">
                <li><a href="introduction.html">introduction | <span>简介</span></a></li>
                <li><a href="job.html">jobs | <span>招聘</span></a></li>
                <li><a href="contact.html">contact us | <span>联系</span></a></li>
            </ul>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="foot">
                <div id="new_footer_container" className="pc_block">
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p>
                </div>
                <div id="mobile_footer_container" className="mobile_block border-top-1px">
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p> 
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Logo />,
    document.querySelector("#Logo")
);
ReactDOM.render(
    <TopLogo />,
    document.querySelector("#TopLogo")
);
ReactDOM.render(
    <MobileLogo />,
    document.querySelector("#MobileLogo")
);

ReactDOM.render(
    <MobileNav />,
    document.querySelector("#MobileNav")
);
ReactDOM.render(
    <Footer />,
    document.querySelector("#Footer")
);
ReactDOM.render(
    <PCNav />,
    document.querySelector(".pcNav")
);