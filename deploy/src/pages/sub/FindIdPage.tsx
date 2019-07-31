import * as React from 'react'
import { RouteComponentProps,NavLink } from 'react-router-dom';
import { makeStyles,withStyles } from '@material-ui/styles';
import { Button,Card,CardContent } from '@material-ui/core';
import { orange } from '@material-ui/core/colors'

interface Props extends RouteComponentProps<void>{}

const FindIdPage = (props:Props) => {
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            
            <CardContent className={classes.container}>
                <div className={classes.bottomBorder}>
                    <h1>아이디 찾기</h1>
                </div>
                <div className={classes.buttonForm}>
                    <NavLink to='phoneFindId' className={classes.buttonSize}>
                        <CustomButton 
                            className={classes.buttonStyle}
                            fullWidth={true} 
                            size='large' 
                            variant='contained'
                            color='primary'
                        >
                            휴대전화로 찾기
                        </CustomButton>
                    </NavLink>

                    <NavLink to='emailFindId' className={classes.buttonSize}>
                        <CustomButton 
                            className={classes.buttonStyle}
                            fullWidth={true} 
                            size='large' 
                            variant='contained'
                            color='primary'
                        > 
                            이메일로 찾기
                        </CustomButton>
                    </NavLink>
                </div>
                
                   
                

            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        width: '70%',
        height: '70%',
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: 'column',

    },
    container: {
        width: "60%",
        height: "80%",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomBorder: {
        textAlign: "left",
        width: "100%",
        borderBottom: "3px solid black",
        marginBottom: 20
    },
    buttonForm: {
        width: "100%",
        height: "50%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-around"
    },
    buttonSize: {
        width: "100%",
        height: "30%",
    },
    buttonStyle: {
        fontSize: 20,
        fontWeight: "bold",
        width: "100%",
        height: "100%",
       
    }
})

const CustomButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(orange[700]),
        backgroundColor: orange[700],
        '&:hover': {
            backgroundColor: orange[900]
        }
    }
}))(Button)

export default FindIdPage;