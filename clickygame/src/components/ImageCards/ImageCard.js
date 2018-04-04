import React from "react";

const ImageCard = props => (
    <div>
        <img onClick={() => props.handleOnChange(props.id, props.phrase)}></img>
    </div>
);

export default ImageCard;