// https://www.hackerrank.com/challenges/a-very-big-sum/

package main

import "fmt"

func bigsum(a []int64) int64{
	var x int64
	
	for _, v := range a {
		x += v
	}
	return x
}

func main() {
	var n int
	var v int64
	var a []int64
	_, err := fmt.Scan(&n)
	if err == nil {
		for i := 0; i < n; i++ {
		_, err2 := fmt.Scan(&v)
			if err2 == nil {
				a = append(a,v)
			}
		}
	}
	fmt.Println(bigsum(a))
}
