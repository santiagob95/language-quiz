import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
// import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';



const styles = (theme) => ({
  root: {

    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
     
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(true);

  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>     
   
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {props.levelselected === 'Facil' &&
                              <div>
                              El mono Tito
                              </div>
                              }
                              {props.levelselected ==='Intermedio' &&
                              <div>
                              El leopardo 
                              </div>
                              }
                              {props.levelselected==='Avanzado' &&
                              <div>Mickey Mouse 
                               </div>
                              } 
        </DialogTitle>
        <DialogContent dividers>
        {props.levelselected === 'Facil' &&
                              <div>
                              Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.
                              <br/>
Siempre va cargado con una cesta hecha con ramitas y cuando tiene más de treinta nueces, elabora una deliciosa tarta de frutos secos y mermelada de mango.
<br/>
Como Tito es generoso, comparte el postre con sus amigos la ardilla y el puercoespín.

                              </div>
                              }
                              {props.levelselected ==='Intermedio' &&
                              <div>
                              El leopardo es un precioso animal que pertenece a la familia de los grandes felinos. Su pelaje es de color amarillo salpicado con manchas negras. Cuando su pelo es totalmente oscuro, se le conoce con el nombre de pantera.
                              <br/>
Los leopardos son capaces de vivir en lugares muy diferentes, como en los bosques, en las montañas, en zonas casi desérticas… ¡Se adaptan a casi todo!
<br/>
Son animales muy fuertes, ágiles y flexibles. Pasan gran parte de su tiempo subidos a los árboles. También es un buen nadador e incluso puede llegar a pescar peces.
<br/>
Hay quien confunde el leopardo con el guepardo por su parecido pelaje a manchas, pero son animales diferentes. El leopardo es más grande pero en cambio, el guepardo es más veloz.

                              </div>
                              }
                              {props.levelselected==='Avanzado' &&
                              <div>
                              Mickey Mouse es el personaje de dibujos animados más famoso de todos los tiempos.
Dice la leyenda que un día Walt Disney iba en el tren y durante el viaje comenzó a dibujarlo. También se dice que en un principio puso al ratón el nombre de Mortimer, pero que cuando se lo contó a su mujer a ella no le gustó nada y lo cambió por Mickey.
<br/>
La primera película que protagonizó Mickey Mouse se llama El avión loco y se estrenó en 1928. Es una película en blanco y negro que no tiene ni voz ni sonido, es decir, es muda. Lo cierto es que no tuvo mucho éxito entre el público.
<br/>
Walt Disney y sus colaboradores se dieron cuenta de que era muy importante que Mickey pudiera hablar, así que se pusieron manos a la obra y unos meses después llegó a los cines otra película, El navegante Willie. En esta sí que hay música y los personajes tienen voz. La voz de Mickey es en realidad la de Walt Disney quien, a partir de entonces, fue quien le dobló en las películas durante muchos años.
<br/>La película fue un éxito y convirtió a Mickey en un personaje muy popular y querido por los niños de todo el mundo.
                              </div>
                              }
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}