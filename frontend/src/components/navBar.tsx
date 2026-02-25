import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Footer from './Footer';
import logopsi from '../assets/images/logopsi.png';
import logoTamires from '../assets/images/logoTamires.png';
import AvatarTm from '../assets/images/AvatarTm.jpeg';
import { Box } from '@mui/material';
import WhatsAppButtonAgende from './WhatsAppButtonAgende';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Grid, Card, CardContent} from "@mui/material";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDrawerToggle = () => {
    console.log('Drawer toggle clicked');
    setDrawerOpen(!drawerOpen);
  };
  

const menuItems = [
  { text: 'Sobre Mim', icon: <FaceIcon color="secondary" />, link: '#sobre-mim' },
  { text: 'Psicoterapia', icon: <LocalFloristIcon color="secondary" />, link: '#psicoterapia' },
  { text: 'Psico-oncologia', icon: <LocalFloristIcon color="secondary" />, link: '#psicooncologia' },
  { text: 'Meu Trabalho', icon: <WorkOutlineIcon color="secondary" />, link: '#meu-trabalho' },
  { text: 'Contato', icon: <ContactPageIcon color="secondary" />, link: '#contato' },
];

  const renderMenuItems = () => (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} component="a" href={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: 'none',
          width: '100vw',
          minHeight: { xs: "100svh", md:"100vh" },
          height: "auto",
          zIndex: theme.zIndex.appBar,
          backgroundImage: `url(${AvatarTm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundBlendMode: 'overlay',
          backgroundAttachment: 'fixed',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '60px',
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <a href="#">
                <Box
                  component="img"
                  src={logopsi}
                  alt="Logo Psi"
                  sx={{
                    width: { xs: '100px', sm: '100px', md: '300px',g: '350px' },
                    height: 'auto',
                    marginTop: '-20px',
                  }}
                />
              </a>
              <a href="#">
                <Box
                  component="img"
                  src={logoTamires}
                  alt="Logo Tamires"
                  sx={{
                    width: { xs: '200px', sm: '150px', md: '200px', lg: '300px' },
                    height: 'auto',
                    marginTop: '0px',
                  }}
                />
              </a>
            </div>
          </Slide>

          {isMobile ? (
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
              <div style={{ display: 'flex' }}>
                {menuItems.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    component="a"
                    href={item.link}
                    sx={{
                      mx: { xs: 1, sm: 2, md: 3 },
                      color: '#3D5361',
                      textDecoration: 'none',
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.5rem' },
                    }}
                  >
                    {item.text}
                  </Typography>
                ))}
              </div>
            </Slide>
          )}

        </Toolbar>

        <Toolbar
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingTop: { xs: '20px', sm: '30px', md: '60px' },
            gap: { xs: '10px', md: '30px' },
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 800 }}>
            <Typography
              variant="h5"
              component="h1"
              color="primary"
              sx={{
                marginBottom: '20px',
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '0.65rem', sm: '1.2rem', md: '1.2rem' },
              }}
            >
              Tamires Martins Camargo <br /> Psicoterapeuta CRP 06/206142 <br />
              Psicóloga em Araraquara / Clínica e Oncológica
            </Typography>
          </Slide>


<Grid container spacing={4} alignItems="center">

  {/* Coluna esquerda - Textos principais */}
  <Grid item xs={12} md={6}>
    
<Slide
  direction="down"
  in={isVisible}
  timeout={{ enter: 1000 }}
>
  <Typography
    variant="h2"
    component="h1"
    color="primary"
    sx={{
      fontFamily: '"Dancing Script", cursive',
      fontSize: { xs: '3rem', md: '7rem' },
    }}
  >
    Psicoterapia <br /> Clínica e Oncológica
  </Typography>
</Slide>

<Slide
  direction="down"
  in={isVisible}
  timeout={{ enter: 1300 }}
>
  <Typography
    variant="h6"
    color="primary"
    sx={{
      mt:2,
      fontSize: { xs: '0.9rem', md: '1.5rem' },
      fontFamily: '"Quicksand", sans-serif',
    }}
  >
    Que bom que está aqui!
  </Typography>
</Slide>

  </Grid>
 

  {/* Coluna direita - Card estratégico */}
 <Grid
  item
  xs={12}
  md={6}
  sx={{
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" }
  }}
>

<Slide
  direction={isMobile ? "up" : "left"}
  in={isVisible}
  timeout={{ enter: 900 }}
>
  <Box>
<Card
  sx={{
    maxWidth: {
      xs: "100%",
      sm: "85%",
      md: 380,
      lg: 420
    },

    backgroundColor: {
      xs: "rgba(255,255,255,0.92)",   // 👈 mais sólido no mobile
      md: "rgba(255,255,255,0.2)"
    },

    backdropFilter: {
      xs: "none",                    // 👈 remove blur no mobile (melhor performance)
      md: "blur(8px)"
    },

    borderRadius: { xs: 4,   // 👈 mais suave no mobile
      md: 3
    },

    boxShadow: {
      xs: "0 4px 15px rgba(0,0,0,0.08)",
      md: "0 10px 30px rgba(0,0,0,0.08)"
    },

    p: {
      xs: -1,     // 👈 menos padding no celular
      md: 5
    },

    mx: { xs: "auto", md: 0 },
    alignSelf: { xs: "center", md: "flex-start" },

    mt: {
      xs: -3,          // 👈 desce o card no mobile
      sm: 8,
      md: 0
    },

    position: "relative",

    transform: {
      xs: "none",                // 👈 REMOVE movimento no mobile
      md: "translate(60px, -40px)",
      lg: "translate(350px, -120px)"
    }
  }}
>
      <CardContent>
        <Typography
  variant="body1"
  component="h2"
  sx={{
    fontSize: {
      xs: "0.9rem",
      sm: "1rem",
      md: "1.1rem"
    },
    lineHeight: 1.6
  }}
>
          Sou psicóloga em Araraquara com atendimento presencial e online.
          Me especializei em psicoterapia clínica e psico-oncologia.
          Ofereço suporte emocional para adultos que enfrentam ansiedade,
          depressão e desafios relacionados ao tratamento oncológico.
        </Typography>
      </CardContent>
    </Card>
  </Box>
</Slide>

  </Grid>

</Grid>

<Slide in={isVisible} mountOnEnter unmountOnExit timeout={{ enter: 1200, exit: 800 }}>
<Box
  sx={{
    position: 'relative',
    bottom: {
      xs: -140,
      sm: 25,
      md: 0,
      lg: 70
    },
    left: { xs: "15%",  sm:"", md:"", lg:"45%"},
    transform: "translateX(-10%)",
    zIndex: 3000
  }}
>
  <WhatsAppButtonAgende />
</Box>
</Slide>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <div
          style={{
            width: 230,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            zIndex: theme.zIndex.modal,
            backgroundColor: '#F5F0ED',
            color: '#3D5361',
            fontFamily: '"Quicksand", sans-serif',
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Typography
            variant="h6"
            sx={{
              padding: theme.spacing(2),
              textAlign: 'center',
              fontFamily: '"Quicksand", sans-serif',
            }}
          >
            {/* Título ou logo */}
          </Typography>
          <div style={{ flexGrow: 1 }}>{renderMenuItems()}</div>
          <Footer />
        </div>
      </Drawer>
    </>
  );
};

export default Navbar
