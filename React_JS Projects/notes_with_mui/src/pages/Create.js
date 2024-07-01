import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {Container} from '@mui/material';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function Create() {
    return (
        <Container>
            <Typography variant='h5' component='h2' gutterBottom color='textSecondary'>
                Create a Note.
            </Typography>
            <Button color='secondary' variant='contained' endIcon={<KeyboardArrowRightIcon/>}>Submit</Button>

        </Container>
    )
}