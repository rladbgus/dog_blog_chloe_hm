# Dog Blog

## Dog 갤러리 게시판 기능구성

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

Next.js를 사용하게 되면 유저가 요청할 때 마다 redux store를 새로 생성하게 되므로 redux store가 여러 개가 될 수 있다.
그리고 Next.js에서 제공하는 getInitialProps, getServerSideProps 등에서 redux store에 접근할 수 있어야 하는데 next-redux-wrapper가 없다면 접근 할 수 없다. 이러한 점 때문에 next-redux-wrapper가 필요하다.

## styled-component

- \_document에 적용
  \_document.tsx는 pages 폴더 내부에 존재하는 모든 페이지에 global한 설정 값을 줄 수 있는 파일이다.

  Next.js에서 styled-component를 사용하면 CSS 로딩이 늦게 되어 깜빡이는 현상 발생
  -> HTML은 SSR로 미리 렌더링 시키지만 styled-component의 스타일들은 사용자가 접속 시 변환되기 때문
  -> \_document.tsx 파일에 css를 미리 적용시켜야 한다.
  -> SSR 에서도 styled-component를 사용하도록 설정

## Ducks 패턴

action, saga, reducer로 나누어 다른 파일에서 관리했다.

하지만 하나의 기능을 수정하려고 하면, 이 기능과 관련된 여러개의 파일을 수정해야하는 일이 생기고 이러한 불편함을 개선하고자 나온 것이 Ducks 패턴이다.

Ducks 패턴은 구조중심이 아니라 기능중심으로 파일을 나눈다. 그래서 단일기능을 작성할때나 기능을 수정할 때 하나의 파일만 다루면 되므로 직관적인 코드작성이 가능하다.

지켜야할 점

1. reducer는 export default로 내보낸다.
2. action 함수는 export로 내보낸다.
3. 액션타입을 정의할 때 reducer/ACTION_TYPE형태로 적어줘야 한다. 이렇게 접두사를 붙여주는 이유는 서로다른 리듀서에서 액션이름이 중첩되는것을 방지하기위해서이다.

## 파일 네이밍 규칙

리액트 컴포넌트 파일은 반드시 tsx 확장자 로 선언.

### HYDRATE

/rootReducer
import { HYDRATE } from 'next-redux-wrapper';

next.js에서 생성한 redux store와 client에서 생성한 redux store는 다르기 때문에 이 둘을 합쳐야 한다.
그래서 이렇게 서버에서 생성한 스토어의 상태를 HYDRATE라는 액션을 통해서 클라이언트에 합쳐주는 작업이 필요한것이다.

action.payload에는 서버에서 생성한 스토어의 상태가 담겨있다. 이 둘을 합쳐 새로운 클라이언트의 리덕스 스토어의 상태를 만든다.
