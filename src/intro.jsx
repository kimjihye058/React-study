import React, {useEffect, useState} from 'react';

function Intro() {
    // 데이터를 담기 위한 그릇
    const [todos, setTodos] = useState([]); 
    
    // 컴포넌트가 처음 나타날 때 실행 요청할 함수
    useEffect(() => {
        // 요청보낼 때 fetch()라는 내장 함수, 주소만 입력을 하게 되면 서버에 요청을 할 수 있음
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((res) => res.json())
        .then((data) => {
            // 받아오는 행동을 하는 것(setTodos)
            setTodos(data);
        })
        .catch((error) => {
            console.error("Error fetching todos:", error);
        });
    }, [])

    return(
        <ul>
            {/* map이라는 반복문을 통해 todo를 받는 것을 처리해줌 */}
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.title} - {todo.completed ? "✅" : "❌"}
                </li>
            ))}
        </ul>
    )
}
export default Intro;