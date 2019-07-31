import * as React from 'react';
import { RouteComponentProps,NavLink } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/styles'
import { Card,CardContent,Button,TextField } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import axios, {AxiosRequestConfig} from 'axios';

interface Props extends RouteComponentProps<void>{}
interface LoginProps {
    id: String,
    pw: String
}



const LoginPage = (props:Props) => {
    const classes = useStyles();
    const [ id,setId ] = React.useState('');
    const [ password,setPW ] = React.useState(''); 
    const idInput = React.useRef<any>();   
    const passwordInput = React.useRef<any>();    

    const config: AxiosRequestConfig = {
        url: '/Login',
        method: 'get',
        baseURL: 'http://localhost:3001/',
        transformRequest: (data: any) => '{"foo":"bar"}',
        transformResponse: [
          (data: any) => ({ baz: 'qux' })
        ],
        headers: { 'X-FOO': 'bar' },
       
        data: { id:id, pw: password },
        timeout: 10000,
        withCredentials: true,
        auth: {
          username: 'janedoe',
          password: 's00pers3cret'
        },
        responseType: 'json',
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        onUploadProgress: (progressEvent: any) => {},
        onDownloadProgress: (progressEvent: any) => {},
        maxContentLength: 2000,
        validateStatus: (status: number) => status >= 200 && status < 300,
        maxRedirects: 5,
        proxy: {
          host: '127.0.0.1',
          port: 9000
        },
        
      };

    function HandleClick(): void{


        axios.get('http://localhost:3000/axios/Login',{
           params: {
            id: id,
            pw: password
           }
                

        })
        .then((data) => {
            console.log(data);
        })
    }

    function HandleChange(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void{
        const value = e.target.value;
        const name = e.target.name;
        if('id'===name) {
            setId(value);
        }else {
            setPW(value);
        }
        console.log('LoginPage-HandleChange-ID : ' + JSON.stringify(id));
        console.log('LoginPage-HandleChange-PW : ' + JSON.stringify(password));
     
    }

    return (
        <div className={classes.root}>
            <div className={classes.loginBox}>
                <Card className={classes.card}>
                    <h1>
                        LOGIN
                    </h1>
                    <CardContent>
                        <div className={classes.loginForm}>
                            <div className={classes.inputForm}>
                                <CssTextField ref={idInput} name='id' id="custom-css-standard-input" label="ID" onChange={HandleChange} />
                                <CssTextField ref={passwordInput} name='pw' id="custom-css-standard-input" label="Password" type='password' onChange={HandleChange} />
                            </div>

                            
                                <LoginButton variant='contained' color='primary' fullWidth={true} onClick={HandleClick} >
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