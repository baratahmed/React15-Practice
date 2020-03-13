import React, {Component} from 'react';

{
// function Footer(){
//   return(
//     <footer>
//       <h1>Footer Area</h1>
//     </footer>
//   );
// }
}

class Footer extends Component{
  constructor(props){
      super(props);
      this.nickname = "Tom";
      this.state = {};
  }
  designation(des){
    return "Software "+des;
  }
  render(){
    const name = 'Barat Ahmed';
    return(
      <footer>
            <h1>Footer Area</h1>
            <div>
                <div>
                    Name : {name}
                </div>
                <div>
                    Nick Name : {this.nickname}
                </div>
                <div>
                    Designation : {this.designation("Engineer")}
                </div>
            </div>
            <br />
            <br />
       </footer>
    );
  }
}

export default Footer;
