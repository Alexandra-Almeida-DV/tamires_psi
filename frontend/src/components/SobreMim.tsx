import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import fundosobremim from '../assets/images/fundosobremim.png';

const SobreMim: React.FC = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const titleAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.3 } },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.6 } },
  };

  return (
    <Box
      ref={sectionRef}
      id="sobre-mim"
      sx={{
        minHeight: { xs: '70vh', md: '80vh' },
        padding: '2rem 2rem',
        backgroundColor: '#F5F0ED',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        textAlign: 'start',
        gap: '2.0rem', // Aumenta o espaçamento entre os elementos
        marginTop: { xs: '-30px', md: '40px' },
        backgroundImage: `url(${fundosobremim})`,
        backgroundSize: { xs: 'cover', md: 'contain' },
        backgroundPosition: { xs: 'start', md: 'center' },
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Título com animação */}
      <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={titleAnimation}>
        <Typography
          variant="h3"
          color="#3D5361"
          fontFamily='"Dancing Script", cursive'
          sx={{ mb: '2rem', ml: { xs: 0, md: 30 } }}
        >
          Sobre Mim
        </Typography>
      </motion.div>

      {/* Texto com animação */}
      <motion.div initial="hidden" animate={controls} variants={textAnimation}>
        <Typography
          variant="h6"
          sx={{
            maxWidth: '600px',
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.2rem' },
            fontFamily: '"Quicksand", sans-serif',
            color: '#3D5361',
            mb: '2rem', // Adiciona margem inferior maior para espaçamento do botão
            ml: { xs: 0, md: 30 }
          }}
        >
          Olá, meu nome é Tamires, sou psicóloga clínica, formada pela Universidade de Araraquara (UNIARA). Atuo pela abordagem psicanalítica e em psico-oncologia. Realizo atendimentos online a brasileiros, maiores de 18 anos e idosos, que residem no Brasil ou no exterior. Durante os atendimentos, prezo pelo acolhimento, escuta ativa e sigilo, com foco no atendimento de qualidade aos meus pacientes. Para isso, estou sempre em busca de atualização nos temas em psicologia.
        </Typography>
      </motion.div>

      {/* Botão com animação */}
      <motion.div initial="hidden" animate={controls} variants={buttonAnimation}>
        <Box sx={{ textAlign: 'center', marginTop: '1.5rem', ml: { xs: 0, md: 30 } }}>
          <WhatsAppButton />
        </Box>
      </motion.div>
    </Box>
  );
};

export default SobreMim;
