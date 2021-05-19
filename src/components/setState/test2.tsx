// import * as React from "react";
// import ReactDOM from "react-dom";
// import { Input, Button, CheckOutlined, CloseOutlined } from "../../util/antd";
// const { TextArea } = Input;
// interface IProps {
//   closePopup;
//   defaultValue: string;
//   changed;
//   value: string;
//   styles: Object;
//   rootDom:HTMLElement
// }
// interface IState {
//   value: string;
//   styles: any
// }

// let nid:number = (Math.random()*1000)

// export default class TextAreaPopup extends React.Component<IProps, IState> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: this.props.value,
//       styles: {}
//     };
//   }
//   modalDom: any
//   tableDom: any
//   changed = (val) => {
//     this.setState({
//       value: val,
//     });
//   };
//   saveHandle = () => {
//     const { value } = this.state;
//     this.props.changed(value);
//   };

//   init = () => {
//     const position = this.props.rootDom.getBoundingClientRect()
//     const styles = {left: position.left + 'px', top: position.top + 'px'}
//     this.setState({styles: styles})
//   }

//   searchParentNode = () => {
//     let parentDom:any = this.props.rootDom
//     let tag = 1
//     while(tag){
//       if (parentDom.matches('div.a-Table-content')) {
//         tag = 0
//       } else {
//         parentDom = parentDom.parentNode
//       }
//     }
//     setTimeout(() => {
//       tag && (tag = 0)
//     }, 2000)
//     return parentDom
//   }

//   componentDidMount() {
//     this.init() 
//     this.tableDom = this.searchParentNode()
//     this.modalDom = document.getElementsByClassName('a-Modal-body')[0]
//     if (this.modalDom) {
//       this.modalDom.addEventListener('scroll', this.init)
//     }
//     if (this.tableDom) {
//       this.tableDom.addEventListener('scroll', this.init)
//     }
//   }
//   componentWillUnmount() {
//     if (this.modalDom) {
//       this.modalDom.removeEventListener('scroll', this.init)
//     }
//     if (this.tableDom) {
//       this.tableDom.removeEventListener('scroll', this.init)
//     }
//   }

//   render() {
//     const { closePopup } = this.props;
//     const { styles } = this.state;
//     let { value } = this.state;
//     return ReactDOM.createPortal(
//       <div className="popup-textarea" style={styles} key={nid}>
//     <TextArea
//       value={value}
//       autoFocus
//       onBlur={this.saveHandle}
//       onChange={(e) => this.changed(e.target.value)}
//     />
//     <div className="popup-confirm-btn">
//       <Button
//         size="small"
//         type="primary"
//         icon={
//           <CheckOutlined
//             style={{ color: "#fff" }}
//             onClick={this.saveHandle}
//           />
//         }
//       />
//       <Button
//         size="small"
//         icon={
//           <CloseOutlined style={{ color: "#ccc" }} onClick={closePopup} />
//         }
//       />
//     </div>
//   </div>,
//       document.body
//     );
//   //   return (<div className="popup-textarea" style={styles}>
//   //   <TextArea
//   //     value={value}
//   //     autoFocus
//   //     onChange={(e) => this.changed(e.target.value)}
//   //   />
//   //   <div className="popup-confirm-btn">
//   //     <Button
//   //       size="small"
//   //       type="primary"
//   //       icon={
//   //         <CheckOutlined
//   //           style={{ color: "#fff" }}
//   //           onClick={this.saveHandle}
//   //         />
//   //       }
//   //     />
//   //     <Button
//   //       size="small"
//   //       icon={
//   //         <CloseOutlined style={{ color: "#ccc" }} onClick={closePopup} />
//   //       }
//   //     />
//   //   </div>
//   // </div>)
//   }
// }
