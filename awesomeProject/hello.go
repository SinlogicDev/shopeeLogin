package main

import (
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func main() {
	r := gin.Default()
	//r.LoadHTMLGlob("lc/*")
	r.StaticFile("/", "dist/index.html")

	r.Static("/css", "dist/css")
	r.Static("/fonts", "dist/fonts")
	r.Static("/img", "dist/img")
	r.Static("/js", "dist/js")
	r.LoadHTMLGlob("dist/index.html")
	r.GET("/login", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{})
	})
	r.POST("/login", login)
	r.GET("/hello", Hello)

	r.Run(":9090")

	//http://localhost:9090/login/dong/123456
	//http://localhost:9090/verify/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjA1MTIyMTAsImlhdCI6MTU2MDUwODYxMCwidXNlcl9pZCI6MSwicGFzc3dvcmQiOiIxMjM0NTYiLCJ1c2VybmFtZSI6ImRvbmciLCJmdWxsX25hbWUiOiJkb25nIiwicGVybWlzc2lvbnMiOltdfQ.Esh1Zge0vO1BAW1GeR5wurWP3H1jUIaMf3tcSaUwkzA
	//http://localhost:9090/refresh/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjA1MTIyNDMsImlhdCI6MTU2MDUwODYxMCwidXNlcl9pZCI6MSwicGFzc3dvcmQiOiIxMjM0NTYiLCJ1c2VybmFtZSI6ImRvbmciLCJmdWxsX25hbWUiOiJkb25nIiwicGVybWlzc2lvbnMiOltdfQ.Xkb_J8MWXkwGUcBF9bpp2Ccxp8nFPtRzFzOBeboHmg0
}

const (
	ErrorReason_ServerBusy = "服务器繁忙"
	ErrorReason_ReLogin    = "请重新登陆"
)

type JWTClaims struct { // token里面添加用户信息，验证token后可能会用到用户信息
	jwt.StandardClaims
	UserID      int      `json:"user_id"`
	Password    string   `json:"password"`
	Username    string   `json:"username"`
	FullName    string   `json:"full_name"`
	Permissions []string `json:"permissions"`
}

var (
	Secret     = "dong_tech" // 加盐
	ExpireTime = 3600        // token有效期
)

func Hello(c *gin.Context) {
	strToken := c.DefaultQuery("token", "")
	if strToken == "" {
		//c.Redirect(http.StatusMovedPermanently, "file:///D:/Goo/src/awesomeProject/login.html")
		c.HTML(http.StatusOK, "login.html", gin.H{})
	}
	_, err := verifyAction(strToken)
	if err != nil {
		c.String(http.StatusNotFound, err.Error())
		return
	}
	//c.String(http.StatusOK, "hello,", claim.Username)
	c.HTML(http.StatusOK, "hello.html", gin.H{})

}

func login(c *gin.Context) {
	fmt.Println("LOGIN ￥￥￥￥￥")
	username := c.PostForm("username")
	password := c.PostForm("password")
	fmt.Println(username)
	fmt.Println(password)
	fmt.Println("LOGIN ￥￥￥￥￥")
	claims := &JWTClaims{
		UserID:      1,
		Username:    username,
		Password:    password,
		FullName:    username,
		Permissions: []string{},
	}
	claims.IssuedAt = time.Now().Unix()
	claims.ExpiresAt = time.Now().Add(time.Second * time.Duration(ExpireTime)).Unix()
	signedToken, err := getToken(claims)
	if err != nil {
		c.String(http.StatusNotFound, err.Error())
		return
	}
	//c.String(http.StatusOK, signedToken)
	c.Header("authorization", signedToken)
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": "ppp",
	})
	//c.Redirect(http.StatusMovedPermanently, "hello?token="+signedToken)
}

func verifyAction(strToken string) (*JWTClaims, error) {
	token, err := jwt.ParseWithClaims(strToken, &JWTClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(Secret), nil
	})
	if err != nil {
		return nil, errors.New(ErrorReason_ServerBusy)
	}
	claims, ok := token.Claims.(*JWTClaims)
	if !ok {
		return nil, errors.New(ErrorReason_ReLogin)
	}
	if err := token.Claims.Valid(); err != nil {
		return nil, errors.New(ErrorReason_ReLogin)
	}
	fmt.Println("verify")
	return claims, nil
}

func getToken(claims *JWTClaims) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString([]byte(Secret))
	if err != nil {
		return "", errors.New(ErrorReason_ServerBusy)
	}
	return signedToken, nil
}
