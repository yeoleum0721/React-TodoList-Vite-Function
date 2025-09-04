import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo } from '@/reducers/todoSlice';
import './Form.css';

const Form = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  //이벤트핸들러 함수 선언
  const handleChange = useCallback((e) => {
    //console.log('handleChange =' + e.target.value);
    setTodo(e.target.value);
  }, [setTodo]); //handleChange

  const handleCreate = useCallback(() => {
    console.log('handleCreate');
    const newTodo = {
      text: todo,
      checked: false
    }
    //addTodo Action함수호출
    dispatch(addTodo(newTodo));
    setTodo('');

  }, [dispatch, todo]);

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleCreate();
    }
  }

  return (
    <div className="form">
      <input
        value={todo}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <div className="create-button" onClick={handleCreate}>
        추가
      </div>
    </div>
  );
};

Form.propTypes = {
  myEnter: PropTypes.func,
  myChange: PropTypes.func,
  myCreate: PropTypes.func
};

export default Form;