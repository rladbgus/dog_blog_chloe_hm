import * as Api from 'api';
import React, { useEffect, useState } from 'react';

const UploadFiles = () => {
  const [aaa, aaaa] = useState([]);

  useEffect(() => {
    Api.getUploadImage()
      .then((res) => {
        console.log(res.data);
        aaaa(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const deleteImage = () => {
    console.log(aaa[0]);
    Api.deleteUploadImage(aaa[0].id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div>Uploaded File List</div>
      {aaa[0] && <img src={aaa[0].url} />}
      <button onClick={() => deleteImage()}>delete</button>
    </>
  );
};

export default UploadFiles;
