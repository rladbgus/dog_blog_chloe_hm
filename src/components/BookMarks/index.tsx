import DogCard from 'components/Home/DogCard';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const BookMarks = (props) => {
  const { bookmarkList } = props;

  // const [aaa, sss] = useState([]);

  // 각 강아지의 세부정보 조회 및 저장
  // const getDetailData = (dogData) => {
  //   searchDogDataApi(dogData.image_id)
  //     .then((res) => {
  //       return res.data.breeds[0];
  //       // console.log('🚀 ~ data', data);
  //       // sss(...aaa);
  //       // console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  return (
    <>
      Bookmark <br />
      강아지 클릭시 자세한 정보를 알 수 있습니다~!
      <DogCardS>
        {bookmarkList.map((dogData: any) => {
          // getDetailData(dogData);
          return (
            <Link href={`/app/detail/[id]`} as={`/app/detail/${dogData.image_id}`} key={dogData.id}>
              <a>
                <DogCard
                  key={dogData.id}
                  life_span={dogData.created_at}
                  imageUrl={dogData.image.url}
                />
              </a>
            </Link>
          );
        })}
      </DogCardS>
    </>
  );
};

const DogCardS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export default BookMarks;
