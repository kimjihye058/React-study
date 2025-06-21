function Good({isGood, color}) {
    return (
        <div> {isGood ? <p>좋아요</p> : <p>좋아요 취소</p>}</div>
    )
}
export default Good;