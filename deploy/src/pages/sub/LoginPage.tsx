import * as React from 'react';
import { RouteComponentProps,NavLink,Redirect } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/styles'
import { Card,CardContent,Button,TextField } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import axios, {AxiosRequestConfig} from 'axios';
import IDCreator from '../../utils/IDCreator';
import jwt from 'jsonwebtoken';
import Modal from 'react-modal'

interface Props extends RouteComponentProps<void>{}
interface LoginProps {
    id: String,
    pw: String
}



const LoginPage = (props:Props) => {
    const classes = useStyles();
    const [ id,setId ] = React.useState('');
    const [ password,setPW ] = React.useState(''); 
    const [ modalIsOpen,setModalIsOpen ] = React.useState(false); 
    const idInput = React.useRef<any>();   
    const passwordInput = React.useRef<any>();    
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
      }
     const sessionClear = () => {
        sessionStorage.clear();
        const key = IDCreator.createLongId();
			console.log('key '+key);
			axios.get('/axios/CreateJwt',{
				params: {
					key: key
				}
			})
			.then((jwtToken: any) => {
				console.log(jwtToken.data);
				sessionStorage.setItem('jwt_token',jwtToken.data);
			})
			.catch((err) => {
				console.log('/axios/CreateJwt err: '+err);
		});
        
    }

    const handleClick = (): void => {
        const formId = IDCreator.createLongId();
        const jwtId = IDCreator.createLongId();
        const jwt_token = sessionStorage.getItem('jwt_token');

        

        if(jwt_token !== null) {
            console.log(jwt_token);

            const token = jwt.sign(
                {   
                    jwtId: jwtId,
                    formId: formId,
                    data: {
                        id: id,
                        pw: password
                    }
                },
                jwt_token
            )

            axios.get('/axios/Login',{
                params: {
                    token: token
                }
             })
             .then((data) => {
                 if('error' === data.data.st) {
                     //setModalIsOpen(true);
                     alert(data.data.msg);
                 } else {
                    console.log('asdasdasd');
                    sessionStorage.setItem('jwt_token', data.data.jwt_token);
                    props.history.push('/nms/main');
                 }
                 // console.log(data);
             })
             .catch((err) => {
                console.log('err : '+err);
             })
        } else {
            console.log('jwt token null');
        }

        
    }

    const handleKeyDown = (e:React.KeyboardEvent): void => {
        if(e.key === 'Enter') {
            handleClick();
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const value = e.target.value;
        const name = e.target.name;
        if('id'===name) {
            setId(value);
        }else {
            setPW(value);
        }
        // console.log('LoginPage-HandleChange-ID : ' + JSON.stringify(id));
        // console.log('LoginPage-HandleChange-PW : ' + JSON.stringify(password));
     
    }

    return (
        <div className={classes.root}>
            <div className={classes.loginBox}>
                <button onClick={sessionClear}>sessionStorage 초기화</button>
                <Card className={classes.card}>
                    <h1>
                        LOGIN
                    </h1>
                    <CardContent>
                        <div className={classes.loginForm}>
                            <div className={classes.inputForm}>
                                <CssTextField ref={idInput} name='id' id="custom-css-standard-input" label="ID" onChange={handleChange} onKeyDown={handleKeyDown} />
                                <CssTextField ref={passwordInput} name='pw' id="custom-css-standard-input" label="Password" type='password' onChange={handleChange} onKeyDown={handleKeyDown} />
                            </div>

                            
                                <LoginButton variant='contained' color='primary' fullWidth={true} onClick={handleClick} >
                                    로그인
                                </LoginButton>
                            
                            <div className={classes.buttonForm}>
                                <NavLink to='findId'><Button className={classes.buttonStyle} variant='contained' color='primary'>아이디 찾기</Button></NavLink>
                                <NavLink to='findPassword'><Button className={classes.buttonStyle} variant='contained' color='primary'>비밀번호 찾기</Button></NavLink>
                                <NavLink to='signUp'><Button className={classes.buttonStyle} variant='contained' color='primary'>회원가입</Button></NavLink>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

}

const useStyles = makeStyles({
    root: {
        height: "100%",
        minHeight: "100%",
		textAlign: "center",
		paddingTop: 20,
		paddingLeft: 15,
		paddingRight: 15,
    },
    loginBox: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    loginForm: {
        height: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent:"space-around",
    },
    card: {
        maxWidth: 500,
        padding: 30
    },
    inputForm: {
        height: "30%",
        display: "flex",
        flexFlow: "column",
        paddingBottom: 30
    },
    buttonForm: {
        width: 360,
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        alignContent: "stretch",
        paddingTop: 10,
        
    },
    buttonStyle: {
        minWidth: 90 
    },
    
})

const LoginButton = withStyles(theme => ({
    root: {
        
        color: theme.palette.getContrastText(orange[700]),
        backgroundColor: orange[700],
        '&:hover' : {
            backgroundColor: orange[900],
        }
    }
}))(Button)

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);

export default LoginPage;