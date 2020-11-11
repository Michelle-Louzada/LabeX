import React from 'react';
import Box from '@material-ui/core/Box';

export default function Footer() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="#202020">
        <Box p={1} flexGrow={1} bgcolor="#202020" color="#FFFCEF" fontSize="0.5em">
          <p>LabeX © 2020 - Todos os direitos reservados - labex.com.br atividades de internet LTDA</p> 
          <p>CNPJ: 00.000.000/0001-00 Av. xxxxxxxxxx, S/N, Cidade-UF, 00000-000 - (00) 0000-0000</p>
        </Box>
      </Box>
    </div>
  );
}