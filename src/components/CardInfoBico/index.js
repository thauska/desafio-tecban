import React from 'react';
import PropTypes from 'prop-types';
import {Card, Photo, DescriptionView, Description, Title, SubTitle, IconView, TextRate, IconLove, RateView, IconStar, IconStarHalf} from './styles';
import ButtonText from '~/components/ButtonText'

const CardInfoBico = ({title, subtitle, photo, description, ...rest}) => {
  return (
    <Card {...rest}>
      <Photo source={{
          uri: photo
      }} />

      <IconView>
        <IconLove />
      </IconView>

      <DescriptionView>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </DescriptionView>
      <Description>
        {description}
      </Description>

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

      <ButtonText onPress={() => {}} icon='chevron-right' text='Cotratar' backgroundColor='#F2B84B' textColor='#F2F2F2' />
    </Card>
  );
};

CardInfoBico.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
};

export default CardInfoBico;
