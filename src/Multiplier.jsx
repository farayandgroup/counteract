import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class Multiplier extends React.Component {
    state = {
        currentValue: 0,
        multiplier: 7
    };

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <TextField label={'Multiplier:' + this.state.multiplier} onKeyUp={(event) => this.setState({ multiplier: event.target.value })}>
                                {/* <TextField label="Multiplier" onKeyUp={(event)=>alert(event.target.value)}> */}

                            </TextField>

                        </Grid>
                        <Grid container justify="center">
                            <Typography variant="h1" component="h2" gutterBottom>
                                {this.state.currentValue}
                            </Typography>

                        </Grid>
                        <Grid container justify="center">
                            <Button variant="contained" color="primary" onClick={() => this.setState({ currentValue: Number(this.state.currentValue) - Number(this.state.multiplier) })}>
                                Previous
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => this.setState({ currentValue: Number(this.state.currentValue) + Number(this.state.multiplier) })}>
                                Next
                             </Button>

                        </Grid>

                        <Grid container justify="center">
                            <Button variant="contained" color="primary"
                                onClick={(event) => this.setState({ currentValue: event.target.value= 0 })}>
                                clear screen
                            </Button>

                        </Grid>

                    </Grid>
                </Grid>



            </div>
        )
    }
}
export default Multiplier;