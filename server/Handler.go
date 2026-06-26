package server

import (
	"fmt"
	"html/template"
	"net/http"
)

func Handler() {
	home, err := template.ParseFiles("client/index.html")
	errPage, err := template.ParseFiles("client/error.html")

	fmt.Println("URL: http://localhost:8080")

	fs := http.FileServer(http.Dir("./client/assets"))
	http.Handle("/assets/", http.StripPrefix("/assets/", fs))

	if err != nil {
		fmt.Print(err.Error())
		return
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			errPage.Execute(w, "404 - Page not Found")
			http.Error(w, "Page Not Found", http.StatusNotFound)
			return
		}
		home.Execute(w, nil)
	})

	http.ListenAndServe(":8080", nil)
}
