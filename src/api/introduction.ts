const BASE_URL = 'http://localhost:3000/introduction';

// 서비스화면 data 호출
export async function getIntroduction() {
  const res = await fetch(BASE_URL);
  return res.json();
}
