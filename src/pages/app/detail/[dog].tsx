import { useRouter } from 'next/router';
import Detail from 'components/Detail';

function DogDetail() {
  const router = useRouter();
  const dogData = router.query;

  return (
    <>
      <p>Dog Id</p>
      <Detail dogData={dogData} />
    </>
  );
}

export default DogDetail;
