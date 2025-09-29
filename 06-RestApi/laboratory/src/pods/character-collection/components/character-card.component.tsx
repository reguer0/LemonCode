import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { classes } from './character-card.styles';
import { CharacterEntityVm } from '../character-collection.vm';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card className={classes.card}>
      <CardMedia
        image={character.image}
        title={character.name}
        className={classes.media}
      />
      <CardContent className={classes.content}>
        <Typography variant="h5" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {character.status} - {character.species}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          <strong>Last known location:</strong> {character.location}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          <strong>Origin:</strong> {character.origin}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => onEdit(String(character.id))}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
