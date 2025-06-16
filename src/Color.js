import {useState} from 'react';
import ColorPicker from 'react-pick-color';
import React from 'react';
import './Color.css';

function Color(){
    const [color, setColor] = useState('#060d2a');
    let img = document.createElement('img');
    img.src = "https://sindresorhus.com/apps/system-color-picker/icon.png";
    
    let img2 = document.createElement('img');
    img2.src = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV84X2hhbmQtZHJhd25fd2F0ZXJjb2xvcl9pbGx1c3RyYXRpb25fb2ZfcmFpbmJvd183NzEyNzA4ZS1lMTlkLTQwZmYtODQxMC03MjllZTM5ZTE4YWQucG5n.png";


    function handleChange(newColor){
        setColor(newColor.hex);
    }

    return(
        <div className = "background" style = {{backgroundColor: color}}>
            <input type="color" className = "input-button" onChange={handleChange} />
            <h1 className = "heading">Color Picker</h1>
            <img src = {img.src} alt = "Color Picker Icon" className = "icon"/>
            <div className="icon2"></div>
            <div className = "color-picker">
                <ColorPicker className = "component"
                    format = "hex"
                    swatches ={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
                    value = {color}
                    onChange = {handleChange}
                    />
            </div>

            <div className = "social-icons">
                <a href = "https://github.com/thainguyen1405"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>

                <a href = "https://www.linkedin.com/in/thainguyen1405/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>

            
        </div>
            
    )
    
}



export default Color;
