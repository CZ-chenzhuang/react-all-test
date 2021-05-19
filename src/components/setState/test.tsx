// import * as React from "react";
// import ReactDOM from "react-dom";
// import { observer } from "mobx-react";
// import { Input } from "../../util/antd";
// import TextareaPopup from "./textAreaPopup";

// import { FormControlProps } from "amis/lib/renderers/Form/Item";
// import { Renderer } from "amis";
// const { TextArea } = Input;
// interface IState {
//   popupVisible: boolean;
//   textareaRef: null | HTMLElement;
//   textareaStyle: Object;
//   nid:number,
// }

// @Renderer({
//   name: "neoTextArea",
//   test: /(?:^|\/)neoTextArea$/i,
// })
// export default class FormTextArea extends React.Component<
//   FormControlProps,
//   IState
// > {
//   constructor(props) {
//     super(props);
//     this.state = {
//       popupVisible: false,
//       textareaRef: null,
//       textareaStyle: {},
//       nid:Number(Math.random()*1000),
//     };
//   }
//   rootDom: any
//   componentDidMount() {
//     const dom = ReactDOM.findDOMNode(this);
//     this.setState({
//       textareaRef: dom as HTMLElement,
//     });
//     this.rootDom = document.getElementById(`form-textarea${this.state.nid}`);
//     // dom.addEventListener('click', e =>{
//     //   if(e.target.getAttribute("data-id") == this.state.nid){
//     //   }
//     // })
    
//   }

//   inputFouces = (e) => {
//     if (this.props.isChildField && this.props.subType!=='subEdit') {
//       this.setState({
//         popupVisible: true,
//       });
//       // 获取元素位置
//       const position = this.state.textareaRef.getBoundingClientRect();
//       this.setState({
//         textareaStyle: {
//           // left: position.left + "px",
//           // top: position.top + "px",
//         },
//       });
//     }
//   };
//   closePopup = () => {
//     this.setState({
//       popupVisible: false,
//     });
//   };
//   changed = (value) => {
//     this.props.onChange(value);
//     this.setState({
//       popupVisible: false,
//     });
//   };

//   shouldComponentUpdate(nextProps: FormControlProps,nextState) {
//     const props = this.props;
//     if (
//       props.defaultValue !== nextProps.defaultValue||
//       props.value !== nextProps.value||
//       props.disabled !== nextProps.disabled||
//       props.maxRows !==nextProps.maxRows||
//       props.minRows !==nextProps.minRows||
//       props.isChildField !==nextProps.isChildField||
//       props.maxLength !==nextProps.maxLength||
//       props.placeholder !== nextProps.placeholder ||
//       this.state.popupVisible !== nextState.popupVisible
//     ) {
//       return true;
//     }
//     return false;
//   }

//   render() {
//     let { popupVisible } = this.state;
//     const {
//       defaultValue,
//       value,
//       disabled = false,
//       maxRows,
//       minRows,
//       isChildField = false,
//       maxLength,
//       placeholder,
//     } = this.props;

//     let showCountValue = true;

//     if (isChildField || disabled) {
//       showCountValue = false;
//     }

//     return (
        
//         <div className="form-textarea" data-id={this.state.nid} id={`form-textarea${this.state.nid}`}>
//           {
//             (disabled && !value)
//             ? <span className="noValue-span">未填写</span> :
//               <TextArea
//                 showCount={showCountValue}
//                 maxLength={maxLength}
//                 defaultValue={defaultValue}
//                 disabled={disabled}
//                 value={value}
//                 placeholder={placeholder}
//                 onFocus={this.inputFouces}
//                 onChange={(e) => this.changed(e.target.value)}
//                 autoSize={{
//                   minRows: isChildField ? 1 : minRows,
//                   maxRows: isChildField ? 1 : maxRows,
//                 }}
//               ></TextArea>
//           }
//         {popupVisible ? (
//           <TextareaPopup
//             styles={this.state.textareaStyle}
//             rootDom={this.rootDom}
//             closePopup={this.closePopup}
//             defaultValue={defaultValue}
//             value={value}
//             changed={this.changed}
//           />
//         ) : null}
//       </div>
//     );
//   }
// }