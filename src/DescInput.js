import './DescInput.css';
import { Component, useEffect, useRef } from 'react';

function DescInput(props) {
  const input = useRef();
  useEffect(()=>{
    input.current = document.querySelector('input');
  });
 
  return (
    <form className='desc-input'>
      <input type='text' />
      <button type='submit'
        onClick={(e) => {
          const text = input.current.value;
          props.send(text);
          e.preventDefault();
        }}>추가</button>
    </form>
  );
}

// class DescInput extends Component {
//   render() {
//     return (
//       <form className='desc-input'>
//         <input type='text' />
//         <button type='submit'
//           onClick={(e) => {
//             const text = 
//               document.querySelector('input').value;
//             this.props.send(text);
//             e.preventDefault();
//           }}>추가</button>
//       </form>
//     );
//   }
// }
export default DescInput;