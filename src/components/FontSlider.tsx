import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../redux/action";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const mapStateToProps = (state:any) => {
let fontsize = parseInt(state.fontsize.substring(0, 2));
 return { fontValue: fontsize, fontsize: state.fontsize };
};

function mapDispatchToProps(dispatch:any) {

  return {
    changeFontSize: (size:any) => dispatch(addArticle(size))
  };
}

export class FontSlider extends Component<any, any> {
  
  constructor(props:any) {
    super(props);
    this.state = {
      fontValue: 14
    };
  }

  handleFontSize = (value:any) => {
    this.setState({ fontValue: value })
    let fontValue = (value).toString() + 'px';
    this.props.changeFontSize(fontValue);
  }
 
 render() {
   const {fontsize} = this.props
  return (
     <div style={{ width: '50%', }}>
       <  Slider
         min={0}
         max={100}
         step={1}
         value={this.state.fontValue}
         onChange={(value) => this.handleFontSize(value)}
       />
       <p style={{ fontSize: fontsize }} > </p>
     </div>
   )
 }
}
const App = connect(mapStateToProps, mapDispatchToProps)(FontSlider);
export default App;