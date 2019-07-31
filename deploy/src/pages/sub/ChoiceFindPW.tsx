import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button,TextField,Radio,RadioGroup,FormControl,FormControlLabel,Card,CardContent } from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/styles';


interface Props extends RouteComponentProps<void>{}


const ChoiceFindPW = (props:Props) => {
    const classes = useStyles();
    const [radioST,setRadioST] = React.useState('');
    

    const handleChange = (e:any) => {
        setRadioST(e.target.value);
        //console.log('radioST : '+radioST);
    }

    const emailForm = (
        <div className={classes.inputBox}>
            <div className={classes.inputForm}>
                <TextField className={classes.inputStyle} label="이름" />
                <TextField className={classes.inputStyle} label="이메일" />
            </div>
            <div className={classes.buttonForm}>
                <Button className={classes.sendButton} variant='contained' color='primary'>인증번호 전송</Button>
            </div>
        </div>
    )

    const phoneForm = (
        <div className={classes.inputBox}>
            <div className={classes.inputForm}>
                <TextField className={classes.inputStyle} label="이름" />
                <TextField className={classes.inputStyle} label="전화번호" />
            </div>
            <div className={classes.buttonForm}>
                <Button className={classes.sendButton} variant='contained' color='primary'>인증번호 전송</Button>
            </div>
        </div>
    )

    return (
        <Card className={classes.card}>
            <CardContent className={classes.radioGroup} >
                <FormControl
                    className={classes.formGroup}
                >
                    <RadioGroup 
                        onChange={handleChange}
                    >  
                        <div></div>
                        <FormControlLabel
                            value='phone'
                            control={<Radio color='primary' />}
                            labelPlacement='end'
                            label='휴대전화로 찾기'
                        />
                        {'phone'===radioST? (phoneForm):(<div></div>)}
                        <FormControlLabel
                            value='email'
                            control={<Radio color='primary' />}
                            labelPlacement='end'
                            label='이메일로 찾기'
                        />
                        {'email'===radioST? (emailForm):(<div></div>)}
                    </RadioGroup>
                </FormControl>
                
            </CardContent>

        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        height: "50%",
        width: '60%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    radioGroup: {
        height: "60%",
        width: "80%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "flex-start",

    },
    formGroup: {
        width: "100%",
    },
    inputForm: {
        width: "100%",
        height: "60%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 10

    },
    inputBox: {
        height: "40%",
        width: "80%",
        display: "flex",
        flexFlow: "flex-start",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    buttonForm: {
        width: "40%",
        display: "flex",
        height: "100%",
        alignItems: "center", 
    },
    sendButton: {
        textAlign: "center",
        height: "15%",
        width: "100%",
    },
    inputStyle: {
        width: "70%",
        
    }
    
})

export default ChoiceFindPW;
