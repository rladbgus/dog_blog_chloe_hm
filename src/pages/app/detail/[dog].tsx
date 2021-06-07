import { useRouter } from 'next/router';
import Detail from 'components/Detail';

function DogDetail() {
  const router = useRouter();
  console.log('🚀 ~ router', router);
  const dogData = router.query;
  console.log('🚀 ~ ddddddddd', dogData);

  return (
    <>
      <p>Dog Id</p>
      <Detail dogData={dogData} />
    </>
  );
}

export default DogDetail;
