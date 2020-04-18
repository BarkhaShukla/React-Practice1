import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import product from '../products.json';
import 'react-awesome-slider/dist/styles.css';

export default class Featured extends Component {
    render() {

        const AutoPlaySlider = withAutoplay(AwesomeSlider);
        return (
            <div className="Featured">
                <AutoPlaySlider
                    play={true}
                    cancelOnInteraction={false}
                    interval={5000}
                    className="products" >
                    {
                        product.products.map((p) => {
                            console.log(p)
                            return (
                                <div key={p.id} data-src={p.imgsrc} >
                                    <h2>{p.title}</h2>
                                    <h3>{p.desc}</h3>
                                </div>
                            )
                        })
                    }
                </AutoPlaySlider>


            </div>
        )
    }
}
