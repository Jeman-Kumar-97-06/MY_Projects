import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Create = () => {
    return (
        <div>
            <Typography variant='h6' color='textSecondary' component='h2' gutterbottom>
                Create a New Note
            </Typography>
            <Button type='submit ' variant='contained' color='secondary'>Default</Button>
        </div>
    )
};

export default Create;