import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Product = (props) => {
  let characteristics = props.characteristics;
  let comfort;
  let quality;
  let size;
  let width;

  for (let key in characteristics) {
    if (key === 'Comfort') {
      comfort = Number(characteristics[key].value).toFixed(1);
    }
    if (key === 'Quality') {
      quality = Number(characteristics[key].value).toFixed(1);
    }
    if (key === 'Size') {
      size = Number(characteristics[key].value).toFixed(1);
    }
    if (key === 'Width') {
      width = Number(characteristics[key].value).toFixed(1);
    }
  }

  console.log('comfort: ', comfort)
  console.log('quality: ', quality)
  console.log('size: ', size)
  console.log('width: ', width)

  return (
    <div>
      <div>
        <div>Size</div>
        <div><input type="range" id="volume" name="volume"
          min="0" max="81" value="22"></input></div>
          <div id="textbox">
            <p class="alignleft">Too small</p>
            <p class="aligncenter">Perfect</p>
            <p class="alignright">Too large</p>
          </div>
      </div>

      <div>
        <div>Width</div>
        <div><input type="range" id="volume" name="volume"
          min="0" max="81" value="22"></input></div>
          <div id="textbox">
            <p class="alignleft">Too narrow</p>
            <p class="aligncenter">Perfect</p>
            <p class="alignright">Too wide</p>
          </div>
      </div>

      <div>
        <div>Comfort</div>
        <div><input type="range" id="volume" name="volume"
          min="0" max="81" value="22"></input></div>
          <div id="textbox">
            <p class="alignleft">Uncomfortable</p>
            <p class="aligncenter">Ok</p>
            <p class="alignright">Perfect</p>
          </div>
      </div>

      <div>
        <div>Quality</div>
        <div><input type="range" id="volume" name="volume"
          min="0" max="81" value="22"></input></div>
          <div id="textbox">
            <p class="alignleft">Poor</p>
            <p class="aligncenter">What I expected</p>
            <p class="alignright">Perfect</p>
          </div>
      </div>

      <div>
        <div>Length</div>
        <div><input type="range" id="volume" name="volume"
          min="0" max="81" value="22"></input></div>
          <div id="textbox">
            <p class="alignleft">Runs short</p>
            <p class="aligncenter">Perfect</p>
            <p class="alignright">Runs long</p>
          </div>
      </div>

      <div>
        <div>Fit</div>
        <div><input type="range" id="volume" name="volume"
          min="0" max="81" value="22"></input></div>
          <div id="textbox">
            <p class="alignleft">Runs tight</p>
            <p class="aligncenter">Perfect</p>
            <p class="alignright">Runs long</p>
          </div>
      </div>

      <div>
        <div>Size</div>
        <div><input type="range" id="volume" name="volume"
          min="0" max="81" value="22"></input></div>
          <div id="textbox">
            <p class="alignleft">Too small</p>
            <p class="aligncenter">Perfect</p>
            <p class="alignright">Too large</p>
          </div>
      </div>


    </div>
  )
};

export default Product;