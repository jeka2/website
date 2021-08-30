import React from 'react';
import Header from '../components/header/header.compontent';
import Footer from '../components/footer/footer.component';

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="front-page">
                <span className="bio">
                    <h3>About me</h3>
                </span>
                <span className="photo">
                    sd
                </span>
            </div>
        )
    }
}

export default FrontPage;