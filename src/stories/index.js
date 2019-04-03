import React from 'react';

import { storiesOf } from '@storybook/react';
import Carousel from '../carousel';
import Clock from '../clock';

storiesOf('Carousel', module)
  .add('default', () => {
    const images = [
      {
        src:
          "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg",
        alt: "A puppy running in grass"
      },
      {
        src:
          "https://cdn.theatlantic.com/assets/media/img/mt/2018/11/shutterstock_552503470/lead_720_405.jpg?mod=1541605820",
        alt: "A pug with tongue hanging out"
      },
      {
        src:
          "https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/02/basset-hound-poop-prints.jpg",
        alt: "A basset hound with mud tracks"
      }
    ];

    return (
      <Carousel images={images} />
    );
  });

storiesOf('Clock', module)
  .add('default', () => <Clock />);
