import { useState } from "react";
import Vote from "./Vote";
import styles from "./Vote.module.css";

function MakeVote() {
    const [votes, setVotes] = useState([]);
    const [question, setQuestion] = useState("");
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");

    const addVote = () => {
        if (question.trim() === "") return alert("질문을 입력해주세요!");

        setVotes([...votes, { question, first, second }]);
        setQuestion("");
        setFirst("");
        setSecond("");
    };

    return (
        <div>
            <div className={styles.voteBox}>
                <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="질문을 입력하세요"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="찬성 문구 (예: 👍 찬성)"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />
                <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="반대 문구 (예: 👎 반대)"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                />
                <button className={styles.addButton} onClick={addVote}>투표 추가하기</button>
            </div>

            {votes.map((v, idx) => (
                <Vote key={idx} question={v.question} first={v.first} second={v.second} />
            ))}
        </div>
    );
}

export default MakeVote;
