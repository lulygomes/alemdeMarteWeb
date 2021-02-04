/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';

import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

import { Container, Header, Content, Card } from './styles';

interface PhotoData {
  id: number;
  like: boolean;
  likes: number;
  earth_date: string;
  rover: {
    name: string;
  };
  img_src: string;
}

interface ResponseLikeData {
  photo_id: number;
  likes: number;
}

const LandPage: React.FC = () => {
  const { user } = useAuth();
  const [nasaPhotos, setNasaPhotos] = useState<PhotoData[]>([]);

  useEffect(() => {
    api
      .get('/photos')
      .then(response => setNasaPhotos(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleLike = useCallback(
    async photoId => {
      try {
        const { data } = await api.post<ResponseLikeData>(
          `/like/photo/${photoId}`,
        );

        const updatePhotoLike = nasaPhotos.map(photo => {
          if (photo.id === Number(data.photo_id)) {
            return { ...photo, likes: data.likes, like: !photo.like };
          }

          return photo;
        });

        setNasaPhotos(updatePhotoLike);
      } catch (err) {
        console.log(err);
      }
    },
    [nasaPhotos],
  );

  return (
    <Container>
      <Header>
        <h1>Olá {user.name}</h1>
      </Header>

      <Content>
        {nasaPhotos.map(photo => {
          return (
            <Card key={photo.id}>
              <img src={photo.img_src} alt="Foto tirada pela NASA" />

              <div id="like">
                <button type="button" onClick={() => handleLike(photo.id)}>
                  {photo.like ? 'Unlike' : 'Like'}
                </button>
                {photo.likes} Likes
              </div>

              <p>Foto tirada pelo hover {photo.rover.name}.</p>
              <p>No dia terrestre {photo.earth_date}</p>
            </Card>
          );
        })}
      </Content>
    </Container>
  );
};

export default LandPage;
