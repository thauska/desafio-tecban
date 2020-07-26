import React from 'react';
import PropTypes from 'prop-types';
import {Card, Photo, DescriptionView, Title, SubTitle, IconView, TextRate, IconLove, RateView, IconStar, IconStarHalf} from './styles';

const CardProfileBico = ({onPress, title, subtitle, photo, ...rest}) => {
  return (
    <Card onPress={onPress} {...rest}>
      <Photo source={{
          uri: photo
      }} />
      <DescriptionView>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <RateView>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStarHalf />
          <TextRate>
            4.{Math.floor(Math.random() * (9 - 1 + 1) + 1)}
          </TextRate>
          <TextRate>
            ({Math.floor(Math.random() * (300 - 200 + 1) + 200)})
          </TextRate>
        </RateView>
      </DescriptionView>
      <IconView>
        <IconLove />
      </IconView>
    </Card>
  );
};

CardProfileBico.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};

export default CardProfileBico;
