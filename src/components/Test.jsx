import { useState } from "react";

function Test(){
    const [inputName, setInputName] = useState('')
    const [submittedName, setSubmittedName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()  // 이벤트가 발생했을 때 리랜더링 방지
        if(inputName.length > 3) {
            console.log('님 이름 3자 아닌가벼?')
            return 
        }
        setSubmittedName(inputName)
        setInputName('')
    }

    return (
    <div>
        <h2> 이름을 입력하세요. </h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="이름"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}/>
            <button type="submit">제출</button>
        </form>

        {submittedName&&(
            <p>{submittedName}님 안녕하세요.</p>
        )}
    </div>
)
}
export default Test
