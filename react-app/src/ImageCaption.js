import React from 'react';

class ImageCaption extends React.Component {

    constructor(props) {
    super();
        this.img = {
            source: props.source,
            text: props.text,
        };
    }
    render() {
        return (
            <figure>
                <div>
                    <img src={this.img.source} alt={this.img.text}/>
                    <figcaption>
                        {this.img.text}
                    </figcaption>
                </div>
            </figure>
        );
    }
}

export default ImageCaption;