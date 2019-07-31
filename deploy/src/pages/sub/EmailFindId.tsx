import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button,TextField,Card,CardContent } from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/styles';


interface Props extends RouteComponentProps<void>{}

const EmailFindId = (props:Props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.findForm}>
                <div className={classes.bottomBorder}>
                    <h1>이메일로 찾기</h1>
                </div>
                <div className={classes.inputBox}>
                    <div className={classes.inputBoxGrid}>
                        <div className={classes.inputForm}>
                            <TextField className={classes.inputStyle} label="이름" />
                            <TextField className={classes.inputStyle} label="이메일 주소" />
                        </div>
                        <div className={classes.buttonForm}>
                            <Button className={classes.sendButton} variant='contained' color='primary'>인증번호 전송</Button>
                        </div>
                    </div>
                    
                </div>
            </CardContent>
        </Card>
    )

}

const useStyles = makeStyles({
    card: {
        height: "60%",
        width: '60%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    findForm: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        width: "60%",
        height: "80%",
    },
    buttonStyle: {
        '&:hover': {
            backgroundColor: "gray"
        }
    },
    inputForm: {
        width: "100%",
        height: "60%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 10

    },
    inputBoxGrid: {
        height: "50%",
        width: "90%",
        display: "grid",
        gridTemplateColumns: '2fr 1fr',
    },
    inputBox: {
        height: "60%",
        width: "100%",
        display: "flex",
        flexFlow: "flex-start",
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonForm: {
        width: "100%",
        display: "flex",
        height: "100%",
        alignItems: "center", 
    },
    sendButton: {
        textAlign: "center",
        height: "30%",
        width: "100%",
    },
    inputStyle: {
        width: "100%",
        
    },
    bottomBorder: {
        textAlign: "left",
        width: "100%",
        borderBottom: "3px solid black",
        marginBottom: 20
    },
})



export default EmailFindId;