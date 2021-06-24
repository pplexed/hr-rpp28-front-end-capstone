import React from 'react';
import ReactDOM from 'react-dom';


class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      width: 0,
      comfort: 0,
      quality: 0,
      length: 0,
      fit: 0
    };
    //this.binds go here
    this.onChange = this.onChange.bind(this);
  }

  //functions will go here

  onChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name

    this.setState({
      [name]: value
    });
    console.log('this is the current state: ', this.state);
  }


  render() {
    return(
        <table className="add-review">
          <tbody>
            <tr>
              <th colSpan="2">Size</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr onChange={this.onChange}>
              <td><label htmlFor="size1"><input type="radio" id="size1" name="size" value="1"/></label></td>
              <td><label htmlFor="size2"><input type="radio" id="size2" name="size" value="2"/></label></td>
              <td><label htmlFor="size3"><input type="radio" id="size3" name="size" value="3"/></label></td>
              <td><label htmlFor="size4"><input type="radio" id="size4" name="size" value="4"/></label></td>
              <td><label htmlFor="size5"><input type="radio" id="size5" name="size" value="5"/></label></td>
            </tr>
            <tr>
            <td>A size too small</td>
              <td>1/2 too big</td>
              <td>Perfect</td>
              <td>A little too big</td>
              <td>Way too big</td>
            </tr>
            <tr>
              <th colSpan="2">Width</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr onChange={this.onChange}>
              <td><label htmlFor="width1"><input type="radio" id="width1" name="width" value="1"/></label></td>
              <td><label htmlFor="width2"><input type="radio" id="width2" name="width" value="2"/></label></td>
              <td><label htmlFor="width3"><input type="radio" id="width3" name="width" value="3"/></label></td>
              <td><label htmlFor="width4"><input type="radio" id="width4" name="width" value="4"/></label></td>
              <td><label htmlFor="width5"><input type="radio" id="width5" name="width" value="5"/></label></td>
            </tr>
            <tr>
              <td>Too narrow</td>
              <td>Slightly narrow</td>
              <td>Perfect</td>
              <td>Slightly wide</td>
              <td>Too wide</td>
            </tr>
            <tr>
              <th colSpan="2">Comfort</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr onChange={this.onChange}>
              <td><label htmlFor="comfort1"><input type="radio" id="comfort1" name="comfort" value="1"/></label></td>
              <td><label htmlFor="comfort2"><input type="radio" id="comfort2" name="comfort" value="2"/></label></td>
              <td><label htmlFor="comfort3"><input type="radio" id="comfort3" name="comfort" value="3"/></label></td>
              <td><label htmlFor="comfort4"><input type="radio" id="comfort4" name="comfort" value="4"/></label></td>
              <td><label htmlFor="comfort5"><input type="radio" id="comfort5" name="comfort" value="5"/></label></td>
            </tr>
            <tr>
              <td>Uncomfortable</td>
              <td>Slightly uncomfortable</td>
              <td>Ok</td>
              <td>Comfortable</td>
              <td>Perfect</td>
            </tr>
            <tr>
              <th colSpan="2">Quality</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr onChange={this.onChange}>
              <td><label htmlFor="quality1"><input type="radio" id="quality1" name="quality" value="1"/></label></td>
              <td><label htmlFor="quality2"><input type="radio" id="quality2" name="quality" value="2"/></label></td>
              <td><label htmlFor="quality3"><input type="radio" id="quality3" name="quality" value="3"/></label></td>
              <td><label htmlFor="quality4"><input type="radio" id="quality4" name="quality" value="4"/></label></td>
              <td><label htmlFor="quality5"><input type="radio" id="quality5" name="quality" value="5"/></label></td>
            </tr>
            <tr>
              <td>Poor</td>
              <td>Below Average</td>
              <td>What I expected</td>
              <td>Pretty great</td>
              <td>Perfect</td>
            </tr>
            <tr>
              <th colSpan="2">Length</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr onChange={this.onChange}>
              <td><label htmlFor="length1"><input type="radio" id="length1" name="length" value="1"/></label></td>
              <td><label htmlFor="length2"><input type="radio" id="length2" name="length" value="2"/></label></td>
              <td><label htmlFor="length3"><input type="radio" id="length3" name="length" value="3"/></label></td>
              <td><label htmlFor="length4"><input type="radio" id="length4" name="length" value="4"/></label></td>
              <td><label htmlFor="length5"><input type="radio" id="length5" name="length" value="5"/></label></td>
            </tr>
            <tr>
              <td>Runs short</td>
              <td>Runs slightly short</td>
              <td>Perfect</td>
              <td>Runs slighlty long</td>
              <td>Runs long</td>
            </tr>
            <tr>
              <th colSpan="2">Fit</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr onChange={this.onChange}>
              <td><label htmlFor="fit1"><input type="radio" id="fit1" name="fit" value="1"/></label></td>
              <td><label htmlFor="fit2"><input type="radio" id="fit2" name="fit" value="2"/></label></td>
              <td><label htmlFor="fit3"><input type="radio" id="fit3" name="fit" value="3"/></label></td>
              <td><label htmlFor="fit4"><input type="radio" id="fit4" name="fit" value="4"/></label></td>
              <td><label htmlFor="fit5"><input type="radio" id="fit5" name="fit" value="5"/></label></td>
            </tr>
            <tr>
              <td>Runs tight</td>
              <td>Runs slightly tight</td>
              <td>Perfect</td>
              <td>Runs slighlty long</td>
              <td>Runs long</td>
            </tr>
          </tbody>
        </table>

    )
  }
}

export default Characteristics;