import { Check } from '@mui/icons-material';
import { Chip, Radio, RadioGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const Trail = () => {

    const [selected, setSelected] = React.useState('');
  return (
    <div>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Box>
        <Typography level="h2" fontSize="lg" id="best-movie" mb={2}>
          Best Movie
        </Typography>
        <RadioGroup
          name="best-movie"
          aria-labelledby="best-movie"
          row
          sx={{ flexWrap: 'wrap', gap: 1 }}
        >
          {[
            'Star trek',
            'Batman',
            'Spider man',
            'Eternals',
            'Shang chi',
            'Jungle cruise',
            'No time to die',
            'Thor',
            'The hulk',
          ].map((name) => {
            const checked = selected === name;
            return (
              <Chip
                key={name}
                variant={checked ? 'soft' : 'plain'}
                color={checked ? 'primary' : 'neutral'}
                startDecorator={
                  checked && <Check sx={{ zIndex: 1, pointerEvents: 'none' }} />
                }
              >
                <Radio
                  variant="outlined"
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={name}
                  value={name}
                  checked={checked}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelected(name);
                    }
                  }}
                />
              </Chip>
            );
          })}
        </RadioGroup>
      </Box>
    </Box>
      
    </div>
  )
}

export default Trail
