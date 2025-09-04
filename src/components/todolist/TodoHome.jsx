import Form from '@/components/todolist/Form';
import TodoItemList from '@/components/todolist/TodoItemList';
import TodoListTemplate from '@/components/todolist/TodoListTemplate';

const TodoHome = () => {
    return (
        <div>
            <TodoListTemplate form={<Form />}>
                <TodoItemList />
            </TodoListTemplate>
        </div>
    );
};

export default TodoHome;