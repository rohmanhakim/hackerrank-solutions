package main
import "fmt"

func simplesum(a []int) int {
	var s int
	for _, v := range a {
		s += v
	}
	return s
}

func main() {
	var n, v int
	var a []int
	
	_, err := fmt.Scanln(&n)
	
	if err == nil {
		for i := 0; i < n; i++ {
			_, err2 := fmt.Scan(&v)
			if err2 == nil {
				a = append(a,v)
			}
		}
		fmt.Println(simplesum(a))
	}
}
