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

## dynamic import

Next.js는 ES2020의 dynamic import 문법을 지원한다. dynamic import를 사용하면 모듈을 빌드 타임이 아닌 런타임에 불러오도록 한다. 이를 통해 번들 파일을 분리하고 퍼포먼스 향상을 기대할 수 있다. 앱에는 초기 로딩부터 사용하지 않는 부분이 존재할 수 있으며, 또 그 부분의 사이즈가 생각보다 클 수 있기 때문이다. 그리고 사용자 언어 등 런타임에서만 알 수 있는 정보에 기반해서 모듈을 선택해야 하는 케이스도 생길 수 있다.

## .env환경변수 사용하기

npm install dotenv-webpack

이모지
:books: [패키지 설치]
:sparkles: [추가]
:hammer: [수정]
:broken_heart: [버그]
:label: [HTML]
:nail_care: [CSS]
:guitar: [기타]

## 동적 코드 분할 Dynamic Imports

대부분의 코드들은 사용자가 보는 첫 페이지에는 필요하지 않다.
첫 페이지 진입시에 필요한 최소한의 코드만 다운 받고, 사용자가 특정 페이지나 위치에 도달할 때마다 코드를 로드 한다면, 첫 페이지의 초기 성능을 올릴 수 있다.
이런 방식을 lazy-load 게으른 로딩이라고 한다.
Dynamic Import 를 사용하면, 런타임시에 필요한 module 을 import 할 수 있다.

그런데 간혹, 특정 Component 에 한해서, 서버사이드에서는 렌더링 하지 않았으면 하는 마음이 있다.
그 '특정 컴포넌트' 라 함은, 특별히 SSR 이 중요하지도 않은데, 매우 무거워서, 최초 로딩 performance 에 악영향을 미치는 경우라 할 수 있겠다.

Next.js 에서 3.0부터 제공하는 'dynamic' 기능을 이용해서, 이런 문제를 해결할 수 있다.

```js
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(import('/components/HeavyComponent'), {
  loading: () => <div>서버사이드에서 대체되는 영역</div>,
  ssr: fals
});
```

이렇게 해두면, 서버사이드에서 렌더링을 하다가,
HeavyComponent 를 만나면,

<div>서버사이드에서 대체되는 영역</div>
요렇게 지정해둔 컴포넌트로 대체해서 렌더링해서, 응답을 내려준 후,
클라이언트 단에서 자동으로 원래 컴포넌트였던 HeavyComponent 를 렌더링 해 주는 것이다.

## getStaticProps

"빌드 시에 딱 한 번"만 호출되고, 바로 static file로 빌드됩니다. 따라서, 이후 수정이 불가능합니다.

SSG (Static Site Generation) 개념입니다.

앱 빌드 후에 웬만하면 바뀌지 않는 내용 (고정된 내용)이 있는 page가 있는 경우에만 사용하는 것이 좋겠지요?

장점은 호출 시 마다 매번 data fetch를 하지 않으니 getServerSideProps보다 성능면에서 좋습니다.

## getServerSideProps

"page가 요청받을때마다" 호출되어 pre-rendering합니다.

SSR (Server Side Rendering) 개념입니다.

pre-render가 꼭 필요한 동적 데이터가 있는 page에 사용하면 됩니다.

매 요청마다 호출되므로 성능은 getStaticProps에 뒤지지만, 내용을 언제든 동적으로 수정이 가능합니다

## FireBase란?

FireBase는 2014년도에 구글에서 인수한 모바일, 웹 애플리케이션 개발 플랫폼이다.

FireBase는 이 모든 플랫폼을 프로젝트 구축 시, 자동적으로 만들어 준다. 또한 서버를 구축하기 위해서 리눅스 명령어를 알 필요도 없고, 도메인을 구입할 필요도 없으며 개발하는 동안에는 서버를 구입할 필요도 없다.

FireBase는 백엔드 기능을 클라우드 서비스 형태로 제공하기 때문에 서버리스 애플리케이션 개발이 가능하다.

FireBase 플랫폼으로 프론트엔드 개발자와 백엔드 개발의 경계가 모호해질 것이며, 적은 비용으로 매우 좋은 앱을 만들 수 있을 것이라 기대된다.

## FormData

FormData 객체에 대한 설명은 MDN에 위와 같이 안내되어 있다. 단순한 객체가 아닌 XMLHttpRequest 전송을 위해 설계된 특수한 객체 형태라고 볼 수 있다.

따라서 문자열화할 수 없는 객체이기 때문에 console.log를 사용해서 프린트할 수 없다.

만약 전송 전에 FormData의 값을 확인하고 싶다면, 아래와 같이 FormData의 메소드를 사용해야 한다.

```js
// FormData의 key 확인
for (let key of formData.keys()) {
  console.log(key);
}
```

```js
// FormData의 value 확인
for (let value of formData.values()) {
  console.log(value);
}
```

## progress Bar

<!-- https://www.npmjs.com/package/react-circular-progressbar -->

## 환경변수

```.env.local
  DOG_DATA_API_KEY=b5b7f00c-d21d-4457-b750-857d73dd4410
```

- 서버 사이드에서 환경 변수 접근
  기본적으로 node.js 환경에서 접근하는 방식은 process.env.{환경변수}로 접근한다.
  process.env.DOG_DATA_API_KEY

- 클라이언트에서 환경변수 접근
  브라우저에서 필요로 할 때는 NEXT_PUBLIC 을 붙인 후 선언을 해주어야 동작한다.
  process.env.NEXT_PUBLIC_DOG_DATA_API_KEY

처음 window.scrollY를 쓰려고 했는데 MDN을 확인해보니, scrollY의 다른 이름의 속성이지만, 브라우저 호환성을 위해 window.pageYOffset을 제안하고 있었다. 그러나 IE 9 미만의 올드 브라우저에서는 두 속성 모두 지원이 안 된다.

## 프록시 서버

프록시 서버는 인터넷에서 유저를 대신해서 데이터를 가져오는 서버이다.
원래는 클라이언트가 서버에 직접 접근해서 요청한 내용을 가져와야 하지만
프록시 서버가 대신 서버에 요청하고 클라이언트에게 가져다 준다.

예를 들면 클라이언트에서 naver의 주소를 입력해서 접속을 시도한다.
이 요청은 서버로 가는게 아니라 프록시 서버로 간다. 프록시 서버가 네이버의 서버에 도착해서 웹페이지를 가져다가 클라이언트인 웹브라우저에게 보내준다.
프록시 proxy 에는 '대리' 라는 뜻이 있다. 클라이언트를 대리한다는 뜻이다. 중계인도 비슷한 말이다.

### 사용 이유

1. 개인정보를 보호할 수 있습니다.
   프록시 서버 없이 클라이언트가 네이버의 서버에 요청을 할 때 나의 IP 주소도 전달이 된다. 프록시 서버를 사용하면 네이버의 서버는 나의 IP가 아니라 프록시 서버의 IP를 보게 된다. 즉 네이버 서버 관리부에서는 IP 주소를 보고 어디서 네이버에 접속했는지 알아낼 수 있기에 IP 주소를 추적하면...? 다 나오게 된다. 프록시 서버를 사용하면 나의 IP주소는 네이버 서버에 전달되지 않는다.

2. 캐시 사용 - 속도향상
   프록시 서버가 웹페이지를 가져올 때 자신의 데이터베이스에 최근 데이터를 저장해놓는다. 이것을 캐시라 힌다.(Cache)
   다른 클라이언트가 접속할 때 캐시된 웹페이지가 있으면 프록시 서버에서 바로 클라이언트에 전송함으로써 속도를 향상 시킬 수 있다. 인터넷으로 갈 필요도 없이 프락시 서버에서 끝나는 것이다.
   캐시기능을 사용하면 인터넷으로 데이터를 수집하러 나갈 필요가 없으니까 대역폭을 줄이는 효과도 있다.

3. 로그 기록 관리
   서버에게 개인정보가 보호되지만 프록시 서버에는 클라이언트의 기록이 남아있다.
   이 기록들을 보면 어떤 IP에서 어디에 얼마나 오래 접속했는지 기록을 확인할 수 있다.
   또 프록시 서버가 방문할 수 있는 웹사이트를 제한할 수 있다.
   결국 연결된 클라이언트들의 정보를 제어할 수 있기 때문에 프록시 서버는 회사에서 많이 사용한다.
   관리자가 프록시 서버를 열어보면 직원들이 어떤 사이트에 접속했는지 손바닥 처럼 들여다 볼 수 있기 때문이다.

4. 방화벽
   프락시 서버와 방화벽은 다른 것이지만 보안을 위해 함께 일한다.
   프락시는 요청을 방화벽은 네트워크 패킷을 제어한다.

5. 접속 우회
   프록시 서버는 여러대 연결시킬 수 있다.
   클라이언트 -> 프락시 서버1 -> 프락시 서버2 -> 서버
   클라이언트의 IP를 숨기기 위해 여러 프록시 서버를 경유하는 기술을 Proxy Chaining 이라고 한다.
   흔히 해커들의 IP주소를 숨기고 공격할 때 쓰는 수법으로 알려져 있습니다만,
   Proxy Chaining 이 완벽한 기술은 아니다. 어쨋든 서버에는 프록시 서버의 주소가 남아있을테니 추적을 거듭하면 클라이언트를 알아낼 수도 있다. 다만 여러 국가의 컴퓨터에 접속해서 우회한다면 나라마다 정보 보호법이 달라서 서버의 정보를 공개하지 않는 나라도 있어 상당히 힘들다고 본다.

## PWA (Progressive Web App)

Google I/O 2016에서 소개된 미래의 웹기술이며, PWA라고 줄여서 부르기도 한다.

먼저 구글에서 소개하는 PWA는 이러하다.

PWA는 최고의 웹과 최고의 앱을 결합한 경험이다. 브라우저를 통해 처음 방문한 사용자에게 유용하며, 설치가 필요하지 않다. 사용자가 PWA와 관계를 점진적으로 형성할수록 성능이 더욱 강력해 질 것이다. 느린 네트워크에서도 빠르게 로드되고, 관련된 푸시 알림을 전송한다. 모바일 앱처럼 전체 화면으로 로드되고, 홈 화면에 아이콘이 있다.

쉽게 말하자면, PWA는 모바일 앱과 웹 기술의 장점을 결합한 것이라고 볼 수 있다.

- offline에서 동작
- 반응성이 좋고 (유저 동작에 빠르게 응답)
- 풀스크린으로 동작
- 홈스크린에 추가될 수 있음
- 푸시를 받기

잘 구현한다면, 웹사이트만으로도 정말 APP같은 사용자 경험을 만들 수 있다.홈 화면에 아이콘을 추가할 수 있어 사용자를 묶어둘 수 있고,(유저의 지속성을 유지할 수 있다.) URL을 통한 접근으로 설치라는 허들을 낮춰 도달율을 높일 수 있다. (모바일 사용자는 새로운 앱을 다운로드하는 것에는 냉소적이며, 사용하던 앱을 계속해서 사용하는 경향이 높다.)

## 서비스워커

Service Worker는 브라우저와 네트워크 사이의 가상 프록시이다. 이는 프론트엔드 개발자들이 수년간 어려움을 겪었던 문제들을 결국 해결하였다(특히 웹 사이트의 자원을 적절히 캐싱하는 방법과, 사용자의 기기가 오프라인일 때 이를 사용할 수 있도록 하는 것 등).

한 마디로 말해 ‘가로채기’라고 할 수 있다. 웹 앱의 네트워크 요청이 서버로 넘어가기 전에 서비스 워커가 요청을 가로채, 자신이 보유한 캐시 파일을 제공하는 프록시 서버 역할을 한다.

궁극적으로는 오프라인 상황에서도 서비스 워커가 웹 앱을 온전하게 기능하도록 제어한다. 대부분의 상황에서 서비스 워커의 캐시 기능은 강력하게 작동한다. 웹 앱이 보유하고 있는 정적 자산을 매번 요청하지 않고 스스로 제공해주기 때문에 네트워크 속도에 구애받지 않고 쾌적한 실행 성능을 보장해 준다.

-> 브라우저가 백그라운드에서 실행하는 스크립트이며, 웹페이지와는 다른 라이프 사이클을 가진다
오프라인일 경우에도 웹 어플리케이션을 기동할 수 있도록 한다(오프라인 캐시) 간단히 말해, 사용자의 fetch 요청을 가로채, 대신 응답해 줄 수 있다.

- 보안
  Service Worker는 매우 강력하기때문에 안전한 컨텍스트(HTTPS를 의미)에서만 실행된다. 코드를 상용으로 푸시하기전에 먼저 테스트하길 원하신다면, localhost에서 테스트하거나 GitHub Pages를 설정하면 된다. 둘 다 HTTPS를 지원한다.

```

## TDD

이미 검증된 방법이고, 결과가 뻔한 작업이라면 TDD를 하지 않아도 된다.
테스트해야하는 방식이 너무 복잡하지만, 얻을 수 있는 결과가 정말 보잘 것 없다면 하지 않는 것이 더 좋다.

TDD를 적용해야할 대표적인 상황들

- 처음해보는 프로젝트의 주제
- 고객의 요구조건이 얼마든지 바뀔 수 있는 프로젝트
- 개발하는 사람과 유지보수하는 사람이 서로 다른 사람일 때
- 즉 불확실성이 높을 때 TDD를 진행하면 된다.

## Jest

- 선택 이유
  Jest 이전에는 여러 테스트 라이브러리를 섞어서 사용했다고 한다.
  Mock 함수를 만들기 위해 Sinon과 Testdouble 같은 Test Mock 라이브러리를 추가로 설치하여 사용하는 것이 그 예이다.
  Jest를 사용하면 거의 모든 기능을 한 번에 지원하기 때문에 선택했다.

1. jest는 JavaScript 테스트 도구이다.
   때문에 TypeScript를 위한 도구가 필요하다.

2. jest는 CommonJS 모듈 시스템을 사용한다.
   때문에 ES6문법인 import-export를 적용하면 에러가 발생한다.
```

## TypeScript

### interface vs type

컴포넌트의 props에 대한 타입을 선언 할 때에는 type 을 써도 되고, interface 를 사용해도 상관없다.

단, 프로젝트에서 일관성만 유지하면 충분하다
