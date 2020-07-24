// import {Component} from "react";



// class Search extends Component {
//   token = null;
//   state = {
//     query: "",
//     people: []
//   };

//   onChange = e => {
//     const { value } = e.target;
//     this.setState({
//       query: value
//     });

//     this.search(value);
//   };

//   search = query => {
//     const url = `https://w9msjh5xc0.execute-api.eu-west-2.amazonaws.com/dev/shops?postcode=${query}`;
//     const token = {};
//     this.token = token;

//     fetch(url)
//       .then(results => results.json())
//       .then(data => {
//         if (this.token === token) {
//           this.setState({ people: data.results });
//         }
//       });
//   };