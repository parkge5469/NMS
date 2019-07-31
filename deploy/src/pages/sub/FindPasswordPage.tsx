import * as React from 'react';
import { RouteComponentProps,NavLink } from 'react-router-dom';
import { Button,TextField,Card,CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


interface Props extends RouteComponentProps<void> {}

const FindPasswordPage = (props:Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardContent className={classes.container}>
                <div className={classes.bottomBorder}>
                    <h1>비밀번호 찾기</h1>
                </div>
                <TextField
                    id="outlined-full-width"
                    placeholder="아이디를 입력하세요."

                    margin="normal"
                    variant="outlined"
                />
                <NavLink to='choiceFindPW' className={classes.buttonSize}><Button variant='contained' color='primary' size='large' fullWidth={true}> 다음</Button></NavLink>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        height: "50%",
        width: '50%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "60%",
        height: "60%",
        display: "flex",
        flexFlow: "column"
    },
    bottomBorder: {
        textAlign: "left",
        width: "100%",
        borderBottom: "3px solid black",
        marginBottom: 20
    },
    buttonSize: {
        width: '100%',
    },
})

export default FindPasswordPage;
