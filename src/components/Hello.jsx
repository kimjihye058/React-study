function Hello({isLogin}){
    return (
        <div>
            {isLogin ? <p>환영합니다.</p> : <p>로그인을 해주세요.</p>}
        </div>
    )
}
export default Hello;