import {useState} from "react";
import styles from '../components/Vote.module.css';

function Vote(props) {
    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);

    const handleYes = () => setYesCount(yesCount + 1);
    const handleNo = () => setNoCount(noCount + 1);

    const yesLabel = props.first ?? "👍 찬성";
    const noLabel = props.second ?? "👎 반대";
    const question = props.question ?? "투표해주세요";

    return (
        <div className={styles.voteBox}>
            <h3> Q. {question} </h3>
            <p className={styles.yesLabel}> {yesLabel} {yesCount}표</p>
            <p className={styles.noLabel}> {noLabel} {noCount}표</p>
            <p className={styles.totalLabel}> 총 {yesCount + noCount}명 참여</p>
            <div></div>
            <hr></hr>
            <button className={styles.yesButton} onClick={handleYes}>{yesLabel}</button>
            <button className={styles.noButton} onClick={handleNo}>{noLabel}</button>
        </div>
    )
}
export default Vote;