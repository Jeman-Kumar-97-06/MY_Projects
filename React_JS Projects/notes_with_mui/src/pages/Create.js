import { Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const Create = () => {
    return (
        <Container>
            <Typography variant='h6' color='textSecondary' component='h2' gutterbottom='true'>
                Create a New Note
            </Typography>
            <Button onClick={()=>{console.log('you clicked submit')}} type='submit' variant='contained' color='secondary'>Submit</Button>
        </Container>
    )
};

export default Create;