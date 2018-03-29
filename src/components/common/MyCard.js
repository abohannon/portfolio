import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import scss from '../../styles/_variables.scss';

const styles = props => ({
  cardStyle: {
    width: '33.33%',
    marginRight: props.index === 2 ? 0 : '1.5rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    height: 200,
    objectFit: 'cover',
  },
  actionsStyle: {
    marginTop: 'auto',
  },
});

const renderButtons = ({ urls }) => {
  if (urls.length < 1) return;

  return urls.map((url, i) => (
    <FlatButton label={url.label} href={url.href} />
  ));
};

const MyCard = (props) => {
  const {
    imageUrl, imageAlt,
    overlayTitle, overlaySubtitle,
    cardTitle, cardSubtitle,
    children, buttonLabels,
    buttonUrls, lastChild,
    index,
  } = props;

  const {
    cardStyle, container, image, actionsStyle,
  } = styles(props);

  return (
    <Card style={cardStyle} containerStyle={container}>
      <CardMedia>
        <img src={imageUrl} alt="" style={image} />
      </CardMedia>
      <CardTitle title={cardTitle} subtitle={cardSubtitle} />
      <CardText style={{ color: scss.colorGreyLight }}>
        {children}
      </CardText>
      <CardActions style={actionsStyle}>
        {renderButtons(props)}
      </CardActions>
    </Card>
  );
};

export { MyCard };
