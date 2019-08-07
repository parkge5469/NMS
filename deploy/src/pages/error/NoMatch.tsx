import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/styles'
import { Card,CardContent,Button,TextField } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

interface Props extends RouteComponentProps<void>{}

const NoMatch = (props: Props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.loginBox}>
                <Card className={classes.card}>
                    <h1>
                        알림
                    </h1>
                    <CardContent>
                        <div className={classes.cardContentForm}>
                            <div>404 ERROR 페이지를 요청할수없습니다.</div>
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
    cardContentForm: {
        height: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent:"space-around",
    },
    card: {
        maxWidth: 500,
        padding: 30
    },
    
    
})

export default NoMatch;