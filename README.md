# Dog Blog

# Dog 갤러리 게시판 기능구성

[https://docs.thedogapi.com](https://docs.thedogapi.com) API 활용

## 매인 (검색 & 페이징)

---

- 한 페이지에 50개
- 정렬은 선택가능 하도록 버튼 구성 (desc or asc)
- 필터링은 Type, bread
- Infinite Scroll 구성
- 상세화면 진입후 뒤로가기로 돌아오면 진입전 스크롤 상태 유지
- 1열에 5개씩 구성
- 목록은 이미지와 간단한 정보 한두가지만 노출. 이미지위에 오버레이되면서 즐겨찾기 버튼 노출 (즐겨찾기 된건지 여부 표시)

## 상세화면

---

- 필요한 정보 몇가지 노출.
- 큰 이미지 노출 (뷰어는 오픈소스 활용. 이미지가 여러장일때 prev,next 선택 가능한 구조. 뷰어 클릭시 큰화면 혹은 전체화면으로 볼수있는구조)
- 좋아요, 좋아요 취소 기능구현
- 내가 등록한 이미지라면 제거 가능하도록 삭제버튼 노출
- 하단에 선택된 강아지의 이름과 비슷한 강아지 목록 50개 노출 (목록이랑 동일한 UI)

## 등록화면

---

- 이미지 선택 버튼
- 선택된 이미지가 표시되도록 레이아웃구성 (삭제도있음)
- 등록버튼 클릭시 프로그래스 구성
- 등록완료되면 푸시 (Service Worker 활용. Firebase이용)

## 내 프로필 정보

---

- IP,UserAgent 정보 노출 (프로필 정보가 없기 때문에 이정도만)
- 내가 즐겨찾기한 목록 보러가기 버튼
- 내가 좋아요한 목록 보러가기 버튼

## 내가 즐겨찾기한 목록

---

- 목록이랑 동일하게 구성
- 필터링은 제거

## 내가 좋아요한 목록

---

- 목록이랑 동일하지만 사진밑에 좋아요를 바로 할수있는 버튼 구성. 좋아요 되어있으면 취소도 할수있다.
- 화면 이동하지 않고 팝업형태로 간단한 정보가 뜨도록 한다. 이때 팝업에서 노출되는 정보는 큰 이미지 한개와 간단한 정보가 전부 (뷰어는 사용할필요없다.)

## 서비스 소개 화면

---

- static 페이지 구성 (layout 은 마음대로)

## 참고사항

---

- 페이지는 확장자를 hm으로 구성 ([www.aaa.com/faq.](http://www.aaa.com/faq.hello)hm)
- 시멘틱 태그 활용
- 크롬 개발자도구 - Lighthouse 로 레포팅을 추출했을때 퍼포먼스 & seo 등의 점수들이 각 60점 이상
- icon svg 처리 우대
- 이미지 webp 처리 우대
- CSS 스프라이트 처리 우대
- 아토믹 폴더 스트럭쳐 우대
- developing component isolation 우대 (storybook 활용시 +10점)

# [API 통신 제약]

- API 통신시 Timeout은 5초
- 전송 용량 limit 은 1mb
- Header이용 headers["x-api-key"]
- 사용자의 고유 정보 를 서버쿠키에 사용. (비슷한 다른것도 괜찮음, 만료기간은 5분)

# [코딩 제약]

- Indent는 depth 3까지허용 (Html 제외)
- else 예약어를 쓰지 않는다. (early return)
- 함수(또는 메서드)의 길이가 50라인을 넘어가지 않도록 구현
- 3개 이상의 아규먼트를 가진 함수를 쓰지 않는다
- All Function Component
- Code Coverage Minimum 70%

# [기술스택]

- ESLint & Prettier Recommendation
- Next.js
  - getStaticProps, getServerSideProps
  - next/link
  - next/router
  - next/image
  - Dynamic Import
  - Static File Serving
  - Built-In Component-Level CSS
- Node.js (Express Framework)
- Node Backend Service Worker
- Typescript (Type, Interface, Generic)
- Redux
  - Ducks Pattern
  - next-redux-wrapper
  - react-redux
  - Redux Toolkit (createAction, createReducer, configureStore)
- Redux-Saga
  - next-redux-saga
- Jest & RTL (React Testing Library)
- Styled Component

---

## next-redux-wrapper

Next를 사용하면 리덕스 스토어가 여러개가 될 수 있다. Next.js는 유저가 요청할때마다 redux store를 새로 생성한다.
그리고 Next.js가 제공하는 getInitialProps, getServerSideProps등에서 리덕스 스토어에 접근할 수 있어야 한다. next-redux-wrapper로 가능하게 한다.

## styled-component

- \_document에 적용
  \_document.tsx는 pages 폴더 내부에 존재하는 모든 페이지에 global한 설정 값을 줄 수 있는 파일이다.

  Next.js에서 styled-component를 사용하면 CSS 로딩이 늦게 되어 깜빡이는 현상 발생
  -> HTML은 SSR로 미리 렌더링 시키지만 styled-component의 스타일들은 사용자가 접속 시 변환되기 때문
  -> \_document.tsx 파일에 css를 미리 적용시켜야 한다.
  -> SSR 에서도 styled-component를 사용하도록 설정
