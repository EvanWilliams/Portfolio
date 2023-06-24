import React from 'react';
import * as classes from './imageContainer.module.scss';

export const ImageContainer = (props) => {
     return(
        <div className={props.className}>
            <div>
                {props.title ? <h3>{props.title}</h3> : null}
                <figure>
                    <img alt={props.alt} src={props.image}></img>
                    <figcaption className={classes["caption"]}>
                        {props.caption}
                    </figcaption>
                </figure>
            </div>
            {props.hr ? <hr/> : null}
        </div>
     )
}

export default ImageContainer;