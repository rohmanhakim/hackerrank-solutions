// https://www.hackerrank.com/challenges/diagonal-difference/

package main
import "fmt"


func diagonaldiff(a [][]int) int {
	var x, y int
	z := len(a)

	for i :=0;i<z;i++ {
		x += a[i][i]
		y += a[i][z-i-1]
	}

	if x-y > 0 { 
		return x-y
	} else {
		return -1*(x-y)
	}
}

func main() {
	var n, v int
	var a [][]int
	var b []int
	_, err := fmt.Scanln(&n)
	if err == nil {
		for i := 0; i < n; i++ {
			b = []int{}
			for j := 0; j < n; j++ {
				_, err2 := fmt.Scan(&v)
				if err2 == nil {
					b = append(b,v)					
				}
			}
			a = append(a,b)
		}
		fmt.Println(diagonaldiff(a))
	} 
}
