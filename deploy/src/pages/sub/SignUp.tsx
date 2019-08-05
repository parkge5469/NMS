import * as React from 'react';
import { RouteComponentProps,NavLink } from 'react-router-dom';
import { Card,CardContent,TextField,Button,FormControl,InputLabel,Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {} from '@material-ui/core/colors';
import MaskedInput from 'react-text-mask';
import InputMask from 'react-input-mask';
import axios from 'axios';

interface Props extends RouteComponentProps<void>{}


const SignUp = (props:Props) => {
    const classes = useStyles();

    const [ id,setId ] = React.useState('');
    const [ pw,setPw ] = React.useState('');
    const [ pwCheck,setPwCheck ] = React.useState('');
    const [ name,setName ] = React.useState('');
    const [ code,setCode ] = React.useState('');
    const [ phone,setPhone ] = React.useState('');
    const [ email,setEmail ] = React.useState('');
    const [ addr,setAddr ] = React.useState('');



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const value = e.target.value;
        const name = e.target.name;

        if('id'===name) {
            setId(value);
        } else if('pw'===name) {
            setPw(value);
        }else if('pwCheck'===name) {
            setPwCheck(value);
        }else if('name'===name) {
            setName(value);
        }else if('code'===name) {
            setCode(value);
        }else if('phone'===name) {
            setPhone(value);
        }else if('email'===name) {
            setEmail(value);
        }else if('addr'===name) {
            setAddr(value);
        }
    }

    const handleClick = (): void => {
        axios.get('/axios/SignUp', {
            params: {
                id: id,
                pw: pw,
                name: name,
                code: code,
                phone: phone,
                email: email,
                addr: addr
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log('(/axios/SignUp) err : '+err);
        })
    }

    // const TextMaskCustom = () => {
    //     return(
    //         <MaskedInput
    //             mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    //             showMask
    //             className={classes.textMask}
    //         />
    //     )
    // }
    return (
        <Card className={classes.card}>
            
            <CardContent className={classes.cardContent}>
                <div className={classes.bottomBorder}>
                    <h1>회원가입</h1>
                </div>
                <div className={classes.gridContainer}>
                    <div className={classes.inputBox}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                아이디 *
                            </InputLabel>
                            <TextField
                                id="outlined-full-width"
                                placeholder="아이디를 입력하세요."
                                name='id' 
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
            
                    <div className={classes.inputBox}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                비밀번호 *
                            </InputLabel>
                            <TextField
                                id="outlined-full-width"
                                placeholder="비밀번호를 입력하세요."
                                name='pw' 
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    
                    <div className={classes.inputBox}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                비밀번호 확인 *
                            </InputLabel>
                            <TextField
                                id="outlined-full-width"
                                placeholder="비밀번호를 입력하세요."
                                name='pwCheck' 
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    

                
                    
                    <div className={classes.inputBox}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                이름 *
                            </InputLabel>
                            <TextField
                                id="outlined-full-width"
                                placeholder="이름을 입력하세요."
                                name='name' 
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                    
                    <div className={classes.inputBox}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                구분 *
                            </InputLabel>
                            <Select
                                native
                                
                                name='code' 
                                
                            >
                                <option value="">선택하세요.</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                            
                        </FormControl>
                    </div>
                    
                    
                
                
                    <div className={classes.inputBox}>
                        <FormControl className={classes.phoneFormControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                전화번호 *
                            </InputLabel>
                            <TextField
                                
                                placeholder="전화번호를 입력하세요."
                                name='phone' 
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                                type='text'
                                
                            >
                                <InputMask  mask={'(999)-9999-9999'} />
                            </TextField>
                            <div className={classes.buttonForm}>
                                <Button className={classes.buttons} variant='contained'>+</Button>
                                <Button className={classes.buttons} variant='contained'>-</Button>
                            </div>
                        </FormControl>
                    </div>

                
                    
                    <div className={classes.inputBox}>
                        <FormControl className={classes.buttonFormControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Email *
                            </InputLabel>
                            <TextField
                                id="outlined-full-width"
                                placeholder="이메일을 입력하세요."
                                name='email' 
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <div className={classes.buttonForm}>
                                <Button className={classes.buttons} variant='contained'>+</Button>
                                <Button className={classes.buttons} variant='contained'>-</Button>
                            </div>
                        </FormControl>
                    </div>

                

                    <div className={classes.inputBox}>
                        <FormControl className={classes.buttonFormControl}>
                            <InputLabel shrink htmlFor="bootstrap-input">
                                주소 *
                            </InputLabel>
                            <TextField
                                id="outlined-full-width"
                                placeholder="주소를 입력하세요."
                                name='addr' 
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />
                            <div className={classes.buttonForm}>
                                <Button className={classes.buttons} variant='contained'>+</Button>
                                <Button className={classes.buttons} variant='contained'>-</Button>
                            </div>
                        </FormControl>
                    </div>
                </div>   
                

            
                    
                
                <div className={classes.input4}>
                    <div className={classes.input4Button}>
                        <NavLink to='/'><Button variant='contained' color='primary' fullWidth={true} >취소</Button></NavLink>
                        <Button variant='contained' color='primary' fullWidth={true} onClick={handleClick} >가입</Button>
                    </div>
                </div>
                
                
            </CardContent>
        </Card>

    );
}

const useStyles = makeStyles({

    card: {
        maxHeight: '100%',
        height: '90%',
        width: '60%',
        textAlign: 'center',
        
    },
    cardContent: {
        maxHeight: '100%',
        height: '100%',
        width: '80%',
        display: 'inline-block',
    },
    gridContainer: {

        display: 'grid'
    },
    input4: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        display: 'grid',

    },
    inputBox: {
        marginTop: 5,
        width: '100%',
        height: '100%',

    },
    formControl: {
        width: '100%',
        height: '30%',
    },
    buttonFormControl: {
        width: '100%',
        height: '30%',
        display: 'grid',
        gridTemplateColumns: '5fr 1fr ',
        gridGap: '10px'
    },
    phoneFormControl: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '5fr 1fr ',
        gridGap: '10px'
    },
    buttonForm: {
        display: 'flex',
        flexFlow: 'flex-start',
        alignItems: 'center',
    },
    bottomBorder: {
        textAlign: "left",
        width: "100%",
        borderBottom: "3px solid gray",
        marginBottom: 20,
        color: 'gray',
    },
    buttons: {
        height: '50%',
    },
    input4Button: {
        width: '30%',
        height: '50%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '5px',
    },
    textMask: {
        width: '100%',
        height: '100%',
    },
})



export default SignUp;