import { useRouter } from 'next/router';
import Detail from 'components/Detail';
const Dog = () => {
  const router = useRouter();
  console.log('🚀 ~ router', router);
  const { dog } = router.query;

  return (
    <>
      <p>Dog Id: {dog}</p>
      <Detail />
    </>
  );
};

export default Dog;
