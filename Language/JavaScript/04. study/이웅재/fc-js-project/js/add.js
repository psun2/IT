function getToken() {
    return localStorage.getItem("token");
}

async function getUserByToken(token) {
    try {
        const res = await axios.get("https://api.marktube.tv/v1/me", {
            headers : {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error) {
        console.log("getUserByToken error", error);
        return null;
    }
}

async function save(event) {
    event.preventDefault(); // 쓸떼없는 rerendering 을 막는다.
    event.stopPropagation(); // 상위DOM에 event 가 전달 안되게 한다.
    console.log("save");

    event.target.classList.add("was-validated") //부트스트랩 기능 버튼이 문제가 없기 때문에 그런(?) UI로 바뀐댄다 씨발럼이
    // 빈 input 에 빨간색 X 가 존나 뜸

    const titleElement = document.querySelector("#title");
    const messageElement = document.querySelector("#message");
    const authorElement = document.querySelector("#author");
    const urlElement = document.querySelector("#url");

    const title = titleElement.value;
    const message = messageElement.value;
    const author = authorElement.value;
    const url = urlElement.value;

    if (title === "" || message === "" || author === "" || url === "") {  // 유효성 검사
        return;
    }

    const token = getToken();
    if (token == null) {  // 문제가 생기면 로그인 페이지로 보낸댄다
        location.assign("/login");
        return;
    }

    try { //모든 준비가 끝나고 서버로 보낸댄다 깊은 빡침이 느껴지지 않는가?
        await axios.post("https://api.marktube.tv/v1/book", {
            title,
            message,
            author,
            url,
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        location.assign("/");
    } catch(error) {
        console.log("save error", error);
        alert("책 추가 실패 ㅆㅃ");
    }
}

function bindSaveButton() {
    const form = document.querySelector("#form-add-book");
    form.addEventListener("submit", save);
 }
async function main() {
    // 버튼에 이벤트 연결
    bindSaveButton();

    // 토큰 체크
    const token = getToken();
    if( token === null) {
        location.assign("/login");
        return;
    }

    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if (user === null) {
        localStorage.clear();
        location.assign("/login");
        return;
    }

    console.log(user);
}

document.addEventListener("DOMContentLoaded", main);