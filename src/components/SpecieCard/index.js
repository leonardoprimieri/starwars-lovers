import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const SpecieCard = ({ data, index, onClick }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages({
      0: 'https://imagens.publico.pt/imagens.aspx/1387688?tp=UH&db=IMAGENS&type=JPG&w=960',
      1: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Fbattle-droids-2000.jpg',
      2: 'https://lumiere-a.akamaihd.net/v1/images/wookiees-main-b_fc850c5b.jpeg?region=8%2C0%2C1543%2C868&width=960',
      3: 'https://pyxis.nymag.com/v1/imgs/0d7/f15/de0cccd25cb5951dbc5f5fa02b5f9f5631-19-greedo-a-new-hope.2x.h467.w700.jpg',
      4: 'https://images-na.ssl-images-amazon.com/images/I/51daSVI9sxL._AC_.jpg',
      5: 'https://img1.looper.com/img/gallery/everything-we-know-about-yodas-species/intro-1574290530.jpg',
      6: 'https://starwarsblog.starwars.com/wp-content/uploads/2018/04/Bossk-header.jpg',
      7: 'https://lumiere-a.akamaihd.net/v1/images/databank_moncalamari_01_169_135967d9.jpeg?region=0%2C0%2C1560%2C780',
      8: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/49/1512493430-wicket-ewok-star-wars.jpg?crop=1xw:0.89198606271777xh;center,top&resize=1200:*',
      9: 'https://lumiere-a.akamaihd.net/v1/images/databank_sullustan_01_169_01e4c3e0.jpeg?region=0%2C49%2C1560%2C780',
    });
  }, []);

  const handleItemClick = () => {
    onClick(data);
  };

  return (
    <>
      <Container background={images[index]} onClick={handleItemClick}>
        <h3>{data.name}</h3>
      </Container>
    </>
  );
};

export default SpecieCard;
