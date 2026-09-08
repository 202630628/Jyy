// 영화 목록 데이터 (원하는 영화를 계속 추가할 수 있습니다!)
const movieList = [
    { title: "인셉션", genre: "SF / 액션" },
    { title: "기생충", genre: "드라마 / 스릴러" },
    { title: "라라랜드", genre: "로맨스 / 뮤지컬" },
    { title: "인터스텔라", genre: "SF / 스릴러" },
    { title: "어바웃 타임", genre: "로맨스 / 코미디" },
    { title: "다크 나이트", genre: "액션 / 범죄" },
    { title: "센과 치히로의 행방불명", genre: "애니메이션 / 판타지" },
    { title: "아바타", genre: "SF / 액션" },
    { title: "글래디에이터", genre: "액션 / 드라마" },
    { title: "토이 스토리", genre: "애니메이션 / 모험" }
];

let currentMovie = null; // 현재 화면에 보이는 영화 저장

// 영화 추천 함수
function recommendMovie() {
    // 1. 영화 목록에서 랜덤으로 하나 추출
    const randomIndex = Math.floor(Math.random() * movieList.length);
    currentMovie = movieList[randomIndex];

    // 2. 화면에 영화 정보 업데이트
    document.getElementById("movie-genre").innerText = currentMovie.genre;
    document.getElementById("movie-title").innerText = currentMovie.title;

    // 3. '이 영화로 결정' 버튼 활성화
    document.getElementById("select-btn").disabled = false;

    // 4. 이전에 결정했던 결과창이 떠있다면 다시 숨김
    document.getElementById("final-choice").classList.add("hidden");
}

// 영화 최종 선택 함수
function selectMovie() {
    if (currentMovie) {
        // 선택한 영화 제목 표시
        document.getElementById("selected-title").innerText = currentMovie.title;
        // 결과창 표시
        document.getElementById("final-choice").classList.remove("hidden");
    }
}